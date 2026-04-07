import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Who I Am',
  description: 'Learn about Clarke Moyer — husband, father, DoD contractor, Army veteran, education supporter, and charity founder.',
  openGraph: {
    title: 'Who I Am | Clarke Moyer',
    description: 'Learn about Clarke Moyer — husband, father, DoD contractor, Army veteran, education supporter, and charity founder.',
    type: 'website',
    url: '/who-i-am/',
  },
};

export default function WhoIAmPage() {
  return (
    <>
      <Navigation />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link> / Who I Am
          </div>
          <h1 className="text-5xl md:text-6xl font-bold">Who I Am</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">
          <p className="text-xl text-gray-600 mb-8">
            Start your targeting packages here. This is a general introduction to who I am and what motivates me.
          </p>

          <h2>Husband and Father</h2>
          <p>
            I am married to April Moyer and we have 2 children Autumn Moyer and Clarke S. Moyer. We focus on doing fun
            things around the house and saving for great vacations. For pictures and a better view of my family life,
            send me a friend request on Facebook.
          </p>

          <h2>Education Supporter</h2>
          <p>
            I started late into education. When getting out of the Army I did not think that I &ldquo;needed&rdquo; a college
            education. Times have changed for me. I have now invested in myself through both technical certifications
            and formal education.
          </p>
          <p>
            I currently hold over 10 certifications and trainings. For more information regarding my DoD and industry IT
            certifications please visit my{' '}
            <a href="https://linkedin.com/in/clarkemoyer" target="_blank" rel="noopener noreferrer">LinkedIn Page</a>.
          </p>
          <p>
            For formal education, I hold a BS-IT and an MBA-ITM from WGU as well as a graduate certificate of project
            management from UMUC. I am pursuing the PSU Smeal eDBA Program.
          </p>
          <p>
            I highly recommend WGU to anyone seeking to further their education. For more information please see my{' '}
            <Link href="/wgu-referral">WGU alumni referral page</Link>.
          </p>

          <h2>DoD Contractor</h2>
          <p>
            Since leaving the US Army as a 33W (35T) I have worked for several great companies and organizations. My
            services have focused primarily on Agile information technology support. This support has spanned multiple
            size organizations at different echelons across the government sector. For a full listing of my experience
            and education please view my{' '}
            <a href="https://linkedin.com/in/clarkemoyer" target="_blank" rel="noopener noreferrer">LinkedIn Page</a>.
          </p>
          <p>I am currently employed by PSU-ARL.</p>

          <h2>Physical Investor / Charity Supporter</h2>
          <p>
            Taking an active role in investing for the future is to me a critical part of anyone&rsquo;s life. Investing to
            me means more than just stocks and bonds stashed away in a 401K. Taking a physical approach to investing I
            hold many unique assets above and beyond stocks and bonds.
          </p>
          <p>
            I have also founded a 501c3 non profit that helps to educate other nonprofits and charity staff on IT,
            business and marketing topics. To learn more visit{' '}
            <a href="https://freeforcharity.org" target="_blank" rel="noopener noreferrer">freeforcharity.org</a>.
          </p>

          <div className="mt-12 text-center">
            <a
              href="https://linkedin.com/in/clarkemoyer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors no-underline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
