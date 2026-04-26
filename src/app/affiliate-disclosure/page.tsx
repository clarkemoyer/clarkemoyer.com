import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | Clarke Moyer',
  description:
    'Affiliate disclosure for clarkemoyer.com. This site participates in the Amazon Associates program and may earn commissions from qualifying purchases.',
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <section className="relative bg-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm mb-4">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}Affiliate Disclosure
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Affiliate Disclosure</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparency about how this site earns commissions.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-lg">
          <h2>Amazon Associates</h2>
          <p>
            Clarke Moyer is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
            program designed to provide a means for sites to earn advertising fees by advertising and linking to
            Amazon.com.
          </p>
          <p>
            When you click on an Amazon link on this site and make a qualifying purchase, this site may earn a
            small commission at <strong>no extra cost to you</strong>. These commissions help support the site.
          </p>

          <h2>What This Means for You</h2>
          <ul>
            <li>Product recommendations on this site are honest and based on real experience or research — not driven by commission potential.</li>
            <li>Affiliate links are used for Amazon products where a tag (<code>clarkemoyer-20</code>) is present in the URL.</li>
            <li>You pay the same price whether you use an affiliate link or not.</li>
          </ul>

          <h2>FTC Disclosure</h2>
          <p>
            In accordance with the Federal Trade Commission (FTC) guidelines, this site discloses any material
            connections between content and any products or services recommended or linked.
          </p>

          <h2>Questions</h2>
          <p>
            If you have questions about this disclosure, contact{' '}
            <a href="mailto:clarke@moyermanagement.com">clarke@moyermanagement.com</a>.
          </p>

          <div className="not-prose mt-10 text-center">
            <Link href="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
