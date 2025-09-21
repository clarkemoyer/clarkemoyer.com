import Navigation from '@/components/Navigation';
import CTAButtons from '@/components/CTAButtons';
import { getContentFile } from '@/lib/content';
import Link from 'next/link';

export default async function FamilyPage() {
  const content = await getContentFile('family');

  return (
    <>
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Family</h1>
          
          {content ? (
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : (
            <p className="text-gray-600">Content coming soon...</p>
          )}
          
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <CTAButtons />
          </div>
        </div>
      </main>
    </>
  );
}