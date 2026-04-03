import lunr from 'lunr';
import type { Skill } from './skills';

export interface SearchDocument {
  slug: string;
  title: string;
  tags: string;
  description: string;
  category: string;
}

export function createSearchIndex(skills: Skill[]): lunr.Index {
  const documents: SearchDocument[] = skills.map(skill => ({
    slug: skill.slug,
    title: skill.frontmatter.title,
    tags: skill.frontmatter.tags.join(' '),
    description: skill.frontmatter['when-to-use'],
    category: skill.frontmatter.category,
  }));

  return lunr(function () {
    this.field('title', { boost: 10 });
    this.field('tags', { boost: 5 });
    this.field('description', { boost: 2 });
    this.field('category', { boost: 3 });

    documents.forEach(doc => {
      this.add({
        id: doc.slug,
        ...doc,
      });
    });
  });
}

export function serializeIndex(idx: lunr.Index): string {
  return JSON.stringify(idx.toJSON());
}

export function deserializeIndex(serialized: string): lunr.Index {
  return lunr.Index.load(JSON.parse(serialized));
}
