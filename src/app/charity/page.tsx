import Navigation from '@/components/Navigation';
import CTAButtons from '@/components/CTAButtons';
import { getContentFile } from '@/lib/content';
import Link from 'next/link';

export default async function CharityPage() {
  const content = await getContentFile('charity');
  const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';

  return (
    <>
      <Navigation />
      
      {/* Hero Section with FFC Circle Logo */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.85)), url('${basePath}/images/ffc-circle-hero.png')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Free For Charity</h1>
          </div>
        </div>
      </section>
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium mb-8 inline-block">
            ← Back to Home
          </Link>
          
          {content ? (
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : (
            <p className="text-gray-600">Content coming soon...</p>
          )}
          
          <div className="mt-12 text-center">
            <a 
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More About Free For Charity
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <CTAButtons />
          </div>
        </div>
      </main>
    </>
  );
}