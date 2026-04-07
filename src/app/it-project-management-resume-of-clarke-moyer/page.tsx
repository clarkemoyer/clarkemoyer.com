import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Project Management Resume of Clarke Moyer',
  description: 'Professional resume of Clarke Moyer — DoD contractor, Army veteran, IT professional, and entrepreneur.',
  openGraph: {
    title: 'IT Project Management Resume of Clarke Moyer | Clarke Moyer',
    description: 'Professional resume of Clarke Moyer — DoD contractor, Army veteran, IT professional, and entrepreneur.',
    type: 'profile',
    url: '/it-project-management-resume-of-clarke-moyer/',
  },
};

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Resume
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">IT Project Management Resume of Clarke Moyer</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center prose prose-lg mx-auto">
          <p className="text-xl text-gray-700 mb-8">
            I am always looking to connect with interesting people making a difference in my industry.
            Connect today with me on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/clarkemoyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors no-underline mb-8"
          >
            Clarke Moyer LinkedIn Profile
          </a>
          <p className="text-gray-600 mt-8">
            If you are looking for a resume example to use, please see my older resume template below.
            You can freely use this for your own needs.
          </p>
          <a
            href="/downloads/Clarke-Moyer-Resume.pdf"
            className="inline-block text-blue-600 hover:underline font-medium"
          >
            Example Resume of Clarke Moyer (PDF)
          </a>
        </div>
      </section>
    </>
  );
}
