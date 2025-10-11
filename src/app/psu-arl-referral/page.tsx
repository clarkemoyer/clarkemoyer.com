import Navigation from '@/components/Navigation';
import { getContentFile } from '@/lib/content';
import Link from 'next/link';
import './psu-arl-referral.css';

export default async function PSUARLReferralPage() {
  const content = await getContentFile('psu-arl-referral');

  return (
    <>
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-brand hover:text-brand-hover font-medium mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">PSU-ARL Referral Program</h1>
          
          {content ? (
            <div 
              className="prose prose-lg max-w-none text-gray-700 psu-arl-content"
              dangerouslySetInnerHTML={{ __html: content.content }}
            />
          ) : (
            <p className="text-gray-600">Content coming soon...</p>
          )}
        </div>
      </main>
    </>
  );
}