import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn More About Free For Charity',
  description: 'Free For Charity reduces costs and increases revenues for nonprofits — putting that money back into their charitable mission.',
  openGraph: {
    title: 'Learn More About Free For Charity | Clarke Moyer',
    description: 'Free For Charity reduces costs and increases revenues for nonprofits — putting that money back into their charitable mission.',
    type: 'website',
    url: 'https://clarkemoyer.com/learn-free-charity/',
  },
};

export default function LearnFreeCharityPage() {
  return (
    <>
      <Navigation />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Learn Free Charity
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Learn More About Free For Charity</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <p className="text-xl font-semibold text-center text-blue-800">
            Contact me anytime about Free For Charity or go to the website to learn more at{' '}
            <a href="https://freeforcharity.org" target="_blank" rel="noopener noreferrer">FreeForCharity.org</a>
          </p>

          <h2>About Free For Charity</h2>
          <h3>Free for Charity has a simple mission with broad implications.</h3>
          <p>
            Reduce costs and increase revenues for nonprofits; putting that money back into their charitable mission
            where it belongs.
          </p>
          <p>
            This charity for charities seeks to replace as many functions as possible that current nonprofits pay for
            to for-profit companies with free or at-cost work from our campus, on-site projects, or partnerships with
            other entities.
          </p>

          <h3>Some things we are working to get to free or at cost to nonprofits and charity groups:</h3>
          <ul>
            <li>Free charity website hosting with tons of normally for-profit paid products included free for charities</li>
            <li>Research papers, case studies, and use cases from other industries and nonprofits</li>
            <li>Guides for the charity or nonprofit manager in many best business practices</li>
            <li>Unbiased technology directory focused on helping you find the software and tools you need</li>
            <li>Unbiased service and consultant directory — again free of overt marketing or gimmicks</li>
          </ul>

          <p>
            Free for Charity engages in a full cycle training and workshop program to develop the needed talent by
            leveraging the growing use of telecommuting and information technology from a campus environment.
          </p>
          <p>
            Free for Charity trains both the in-house staff of existing charities, as well as direct employees and
            volunteers of Free for Charity who will then perform work for charities as out-of-house consultants.
          </p>
          <p>
            Cultivation of information technology and business skills is the charitable purpose and the net result of
            Free for Charity. As part of the educational mission, Free for Charity trainees engage local residents,
            small businesses, and pre-501c3 charities to build up the skills needed to work on complex non-profit
            projects.
          </p>

          <div className="mt-12 text-center not-prose">
            <a
              href="https://freeforcharity.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Visit FreeForCharity.org
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
