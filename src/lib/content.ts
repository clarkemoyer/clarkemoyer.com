import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked, Renderer } from 'marked';

export interface ContentData {
  title?: string;
  content: string;
  [key: string]: any;
}

// Custom renderer: add rel="noopener noreferrer" to external links
const renderer = new Renderer();
renderer.link = ({ href, title, text }: { href: string; title?: string | null; text: string }) => {
  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
  const attrs = [
    `href="${href}"`,
    title ? `title="${title}"` : '',
    isExternal ? 'target="_blank"' : '',
    isExternal ? 'rel="noopener noreferrer"' : '',
  ].filter(Boolean).join(' ');
  return `<a ${attrs}>${text}</a>`;
};

export async function getContentFile(fileName: string): Promise<ContentData | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'sections', `${fileName}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(fileContent);
    
    const html = await marked(parsed.content, { renderer });
    
    return {
      ...parsed.data,
      content: html
    };
  } catch (error) {
    console.warn(`Could not read content file: ${fileName}.md`);
    return null;
  }
}