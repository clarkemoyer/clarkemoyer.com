import React from 'react';
import { ContentData } from '@/lib/content';

interface ContentSectionProps {
  id: string;
  title: string;
  content: ContentData | null;
  showReadMore?: boolean;
}

export default function ContentSection({ id, title, content, showReadMore = false }: ContentSectionProps) {
  if (!content) {
    return (
      <section id={id} className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
          <p className="text-gray-600">Content coming soon...</p>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div 
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
        {showReadMore && (
          <div className="mt-6">
            <a
              href={`/${id}`}
              className="text-brand hover:text-brand-hover font-medium"
            >
              Read More →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}