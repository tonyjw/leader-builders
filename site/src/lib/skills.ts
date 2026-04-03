import jsYaml from 'js-yaml';
import { marked } from 'marked';

// Read all skill markdown files as raw strings from outside the site root.
// import.meta.glob with as:'raw' inlines file content at build time — no fs at runtime.
const rawFiles = import.meta.glob('../../../skills/**/*.md', {
  as: 'raw',
  eager: true,
}) as Record<string, string>;

// ── Types ────────────────────────────────────────────────────────

export interface ChangelogEntry {
  version: string;
  date: string;
  changes: string;
  reason?: string;
}

export interface SkillFrontmatter {
  title: string;
  slug: string;
  version: string;
  'last-updated': string;
  status: string;
  category: string;
  tags: string[];
  difficulty: string;
  'works-with': string[];
  'evidence-strength': string;
  'evidence-types': string[];
  'primary-sources': string[];
  'when-to-use': string;
  'not-for'?: string;
  'time-to-run'?: string;
  changelog: ChangelogEntry[];
}

export interface SkillSections {
  reasoning: string;
  promptCode: string;   // raw text of the prompt (for copy button)
  variables: string;
  goodOutput: string;
  poorOutput: string;
  failureModes: string;
  promptNotes: string;
  sources: string;
  changelogBody: string;
}

export interface Skill {
  frontmatter: SkillFrontmatter;
  sections: SkillSections;
  slug: string;
}

// ── Categories ───────────────────────────────────────────────────

export const CATEGORIES: Record<string, string> = {
  'people-management': 'People management',
  'strategy-planning': 'Strategy & planning',
  'hiring-talent': 'Hiring & talent',
  'ai-transformation': 'AI transformation',
  'career-growth': 'Career growth',
};

// ── Parsing ──────────────────────────────────────────────────────

/** Parse YAML frontmatter without gray-matter (no fs dependency) */
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
    goodOutput: sectionMap['What good output looks like'] ?? '',
    // em dash (U+2014) in the section heading
    poorOutput: sectionMap['What poor output looks like \u2014 and why'] ?? '',
    failureModes: sectionMap['Failure modes'] ?? '',
    promptNotes: sectionMap['Prompt notes'] ?? '',
    sources: sectionMap['Sources'] ?? '',
    changelogBody: sectionMap['Changelog'] ?? '',
  };
}

// ── Markdown rendering ───────────────────────────────────────────

/** Wrap inline [Author, Year] citations in <cite> elements */
function addCiteElements(md: string): string {
  return md.replace(/\[([A-Za-z][^[\]\n]+?,\s*\d{4})\]/g, '<cite>[$1]</cite>');
}

/** Replace source type tags with styled badge spans */
function addSourceBadges(md: string): string {
  return md
    .replace(/\[research\]/g, '<span class="badge badge-research">research</span>')
    .replace(/\[practitioner\]/g, '<span class="badge badge-practitioner">practitioner</span>')
    .replace(/\[field\]/g, '<span class="badge badge-field">field</span>');
}

export function renderMarkdown(md: string): string {
  return String(marked.parse(addCiteElements(md)));
}

export function renderSources(md: string): string {
  return String(marked.parse(addCiteElements(addSourceBadges(md))));
}

/** Parse failure modes section into name + body pairs */
export function parseFailureModes(md: string): Array<{ name: string; body: string }> {
  const modes: Array<{ name: string; body: string }> = [];
  const blocks = md.split(/\n(?=\*\*[^*]+\*\*)/);
  for (const block of blocks) {
    const match = block.match(/^\*\*([^*]+)\*\*\n?([\s\S]*)/);
    if (match) {
      modes.push({ name: match[1].trim(), body: match[2].trim() });
    }
  }
  return modes;
}

// ── Data access ──────────────────────────────────────────────────

let _skills: Skill[] | null = null;

export function getAllSkills(): Skill[] {
  if (_skills) return _skills;

  _skills = Object.entries(rawFiles)
    .map(([_path, raw]) => {
      const { data, content } = parseFrontmatter(raw);
      const frontmatter = data as SkillFrontmatter;
      const sections = extractSections(content);
      return { frontmatter, sections, slug: frontmatter.slug };
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

export function strengthClass(strength: string): string {
  if (strength === 'strong') return 'strong';
  if (strength === 'moderate') return 'moderate';
  return 'emerging';
}

export function evidenceIcon(type: string): string {
  if (type === 'research') return '⚗';
  if (type === 'practitioner') return '◉';
  return '◎';
}

export function truncate(str: string, n: number): string {
  if (str.length <= n) return str;
  const cut = str.lastIndexOf(' ', n);
  return str.slice(0, cut > 0 ? cut : n) + '\u2026';
}
