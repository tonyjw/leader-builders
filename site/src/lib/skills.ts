import jsYaml from 'js-yaml';
import { marked } from 'marked';

// Read all skill markdown files as raw strings from outside the site root.
// import.meta.glob with as:'raw' inlines file content at build time — no fs at runtime.
const rawFiles = import.meta.glob('../../../skills/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// ── Types ────────────────────────────────────────────────────────

export interface SkillFrontmatter {
  title: string;
  slug: string;
  status: string;
  category: string;
  tags: string[];
  difficulty: string;
  'works-with': string[];
  'when-to-use': string;
  'not-for'?: string;
  'time-to-run'?: string;
}

export interface SkillSections {
  reasoning: string;
  promptCode: string;   // raw text of the prompt (for copy button)
  variables: string;
  sources: string;
}

export interface Skill {
  frontmatter: SkillFrontmatter;
  sections: SkillSections;
  slug: string;
}

// ── Categories ───────────────────────────────────────────────────

export const CATEGORIES: Record<string, string> = {
  'people-management': 'People management',
  'agile-delivery': 'Agile delivery',
  'strategy-planning': 'Strategy & planning',
  'hiring-talent': 'Hiring & talent',
  'ai-transformation': 'AI transformation',
  'career-growth': 'Career growth',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  'people-management': 'Build trust, navigate difficult conversations, and help your team do their best work.',
  'agile-delivery': 'Run better ceremonies, improve your process, and help your team ship with confidence.',
  'strategy-planning': 'Communicate direction, make technical investment decisions, and align stakeholders.',
  'hiring-talent': 'Write job descriptions, design assessments, and build a process that finds great engineers.',
  'ai-transformation': 'Lead your team through adopting AI tools and build a compelling case for investment.',
  'career-growth': 'Advocate for yourself, navigate performance systems, and build your leadership presence.',
};

// ── Parsing ──────────────────────────────────────────────────────

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data = jsYaml.load(match[1]) as Record<string, unknown>;
  return { data, content: match[2] };
}

function extractSections(body: string): SkillSections {
  const parts = ('\n' + body).split(/\n## /);
  const sectionMap: Record<string, string> = {};

  for (const part of parts.slice(1)) {
    const newlineIdx = part.indexOf('\n');
    if (newlineIdx === -1) continue;
    const heading = part.slice(0, newlineIdx).trim();
    let content = part.slice(newlineIdx + 1);
    // Strip trailing horizontal rules used as visual separators
    content = content.replace(/\n\n---\s*$/, '').trim();
    sectionMap[heading] = content;
  }

  // Extract raw prompt text from inside the fenced code block
  const promptSection = sectionMap['The prompt'] ?? '';
  const codeMatch = promptSection.match(/```[^\n]*\n([\s\S]*?)\n```/);
  const promptCode = codeMatch ? codeMatch[1].trim() : '';

  return {
    reasoning: sectionMap['The reasoning'] ?? '',
    promptCode,
    variables: sectionMap['Variables'] ?? '',
    sources: sectionMap['Sources'] ?? '',
  };
}

// ── Markdown rendering ───────────────────────────────────────────

/** Wrap inline [Author, Year] citations in <cite> elements */
function addCiteElements(md: string): string {
  return md.replace(/\[([A-Za-z][^[\]\n]+?,\s*\d{4})\]/g, '<cite>[$1]</cite>');
}

export function renderMarkdown(md: string): string {
  return String(marked.parse(addCiteElements(md)));
}

// ── Variable parsing ─────────────────────────────────────────────

export interface ParsedVariable {
  /** All {{VAR}} names covered by this entry (handles "X through Y" groups) */
  names: string[];
  description: string;
  example: string;
  required: boolean;
}

/**
 * Parse the ## Variables markdown section into structured variable objects.
 * Each block starts with a line containing one or more `{{VAR_NAME}}` tokens.
 */
export function parseVariables(markdown: string): ParsedVariable[] {
  if (!markdown.trim()) return [];

  // Split on lines that start a new variable entry (begin with `{{)
  const blocks = markdown.split(/\n(?=`\{\{)/).map(b => b.trim()).filter(Boolean);

  return blocks.flatMap(block => {
    const firstLine = block.split('\n')[0];
    // Extract all {{VAR}} names from the first line
    const names = [...firstLine.matchAll(/\{\{([A-Z0-9_]+)\}\}/g)].map(m => m[1]);
    if (names.length === 0) return [];

    // Description: text after the last ` — ` on the first line
    const descMatch = firstLine.match(/—\s*(.+)$/);
    const description = descMatch?.[1]?.trim() ?? '';

    // Example: first line matching `Example: ...`
    const exampleMatch = block.match(/Example:\s*`?([^`\n]+)`?/);
    const example = exampleMatch?.[1]?.trim() ?? '';

    // Required if block contains "Required" (and not exclusively "Optional")
    const required = /Required/.test(block);

    return [{ names, description, example, required }];
  });
}

/**
 * Render the prompt code as HTML with {{VARIABLE}} tokens replaced by
 * interactive chip spans. Accepts a name→cardId map so grouped variables
 * (e.g. OBS_2 → var-card-OBS_1) link to the correct card.
 */
export function renderPromptWithChips(
  promptCode: string,
  nameToCardId: Record<string, string>,
): string {
  const escaped = promptCode
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, name: string) => {
    const cardId = nameToCardId[name] ?? `var-card-${name}`;
    return `<span class="var-chip" data-var="${name}" data-card="${cardId}" id="chip-${name}">{{${name}}}</span>`;
  });
}


// ── Data access ──────────────────────────────────────────────────

let _skills: Skill[] | null = null;

export function getAllSkills(): Skill[] {
  if (_skills) return _skills;

  _skills = Object.entries(rawFiles)
    .map(([_path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      const fm = data as SkillFrontmatter;

      // Normalize multiline YAML scalars to single-line strings
      fm['when-to-use'] = fm['when-to-use']?.replace(/\n/g, ' ').trim() ?? '';
      if (fm['not-for']) fm['not-for'] = fm['not-for'].replace(/\n/g, ' ').trim();

      const sections = extractSections(content);
      return { frontmatter: fm, sections, slug: fm.slug };
    })
    .filter(s => s.frontmatter.status === 'active')
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));

  return _skills;
}

export function getSkillBySlug(slug: string): Skill | undefined {
  return getAllSkills().find(s => s.slug === slug);
}

export function getSkillsByCategory(category: string): Skill[] {
  return getAllSkills().filter(s => s.frontmatter.category === category);
}

export function truncate(str: string, n: number): string {
  if (str.length <= n) return str;
  const cut = str.lastIndexOf(' ', n);
  return str.slice(0, cut > 0 ? cut : n) + '\u2026';
}
