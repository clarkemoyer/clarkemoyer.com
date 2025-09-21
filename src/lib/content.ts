import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface ContentData {
  title?: string;
  content: string;
  [key: string]: any;
}

export async function getContentFile(fileName: string): Promise<ContentData | null> {
  try {
    const filePath = path.join(process.cwd(), 'content', 'sections', `${fileName}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const parsed = matter(fileContent);
    
    const html = await marked(parsed.content);
    
    return {
      ...parsed.data,
      content: html
    };
  } catch (error) {
    console.warn(`Could not read content file: ${fileName}.md`);
    return null;
  }
}