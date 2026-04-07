import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Personal Project Manager',
  description: 'Clarke Moyer\'s personal project management tools and resources.',
  openGraph: {
    title: 'Personal Project Manager | Clarke Moyer',
    description: 'Clarke Moyer\'s personal project management tools and resources.',
    type: 'website',
    url: 'https://clarkemoyer.com/personal-project-manager/',
  },
};

export default function PersonalProjectManagerPage() {
  return (
    <>
      <Navigation />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Personal Project Manager
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Personal Project Manager</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 mb-8">
            Content for this page is coming soon. Check back later for tools and resources on personal project management.
          </p>
          <Link href="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
        </div>
      </section>
    </>
  );
}
