import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'Affiliate disclosure for clarkemoyer.com — Amazon Associates and other affiliate relationships.',
  openGraph: {
    title: 'Affiliate Disclosure | Clarke Moyer',
    type: 'website',
    url: '/affiliate-disclosure/',
  },
};

const EFFECTIVE_DATE = 'April 2026';

export default function AffiliateDisclosurePage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-6 py-16 mt-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Affiliate Disclosure</h1>
        <p className="text-sm text-gray-500 mb-10"><em>Effective Date: {EFFECTIVE_DATE}</em></p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

          <section>
            <h2 className="text-xl font-bold text-gray-900">Amazon Associates</h2>
            <p>
              Clarke Moyer is a participant in the{' '}
              <a
                href="https://affiliate-program.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Amazon Services LLC Associates Program
              </a>
              , an affiliate advertising program designed to provide a means for sites to earn
              advertising fees by advertising and linking to Amazon.com.
            </p>
            <p>
              This means that when you click on certain product links on this site and make a
              purchase on Amazon, I may earn a small commission at{' '}
              <strong>no additional cost to you</strong>. The price you pay is exactly the same
              whether you use my affiliate link or go directly to Amazon.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">FTC Disclosure</h2>
            <p>
              In accordance with the{' '}
              <a
                href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Federal Trade Commission&apos;s guidelines
              </a>
              , I disclose that this site contains affiliate links. I only link to products I
              actually use and recommend. My opinions and content are entirely my own and
              are not influenced by affiliate relationships.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">Which Pages Contain Affiliate Links</h2>
            <p>Affiliate links currently appear on the following pages:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li><Link href="/clarke-moyer-world-famous-apple-crisp-recipe/" className="text-blue-600 hover:underline">Apple Crisp Recipe</Link></li>
              <li><Link href="/clarke-moyer-sweet-tea-recipe/" className="text-blue-600 hover:underline">Sweet Tea Recipe</Link></li>
              <li><Link href="/clarke-moyer-philly-cheesesteak-recipe/" className="text-blue-600 hover:underline">Philly Cheesesteak Recipe</Link></li>
              <li><Link href="/clarke-moyer-cissp-certification-passing-guide/" className="text-blue-600 hover:underline">CISSP Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-cissp-issep-certification-passing-guide/" className="text-blue-600 hover:underline">CISSP-ISSEP Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-pmp-certification-passing-guide/" className="text-blue-600 hover:underline">PMP Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-safe-spc-certification-passing-guide/" className="text-blue-600 hover:underline">SAFe SPC Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-comptia-security-plus-passing-guide/" className="text-blue-600 hover:underline">CompTIA Security+ Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-comptia-network-plus-passing-guide/" className="text-blue-600 hover:underline">CompTIA Network+ Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-comptia-a-plus-passing-guide/" className="text-blue-600 hover:underline">CompTIA A+ Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-comptia-project-plus-passing-guide/" className="text-blue-600 hover:underline">CompTIA Project+ Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-ciw-professional-passing-guide/" className="text-blue-600 hover:underline">CIW Professional Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-itil-4-foundation-passing-guide/" className="text-blue-600 hover:underline">ITIL 4 Foundation Certification Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-microsoft-az-900-passing-guide/" className="text-blue-600 hover:underline">Microsoft AZ-900 Azure Fundamentals Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-microsoft-az-500-passing-guide/" className="text-blue-600 hover:underline">Microsoft AZ-500 Azure Security Technologies Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-microsoft-ai-900-passing-guide/" className="text-blue-600 hover:underline">Microsoft AI-900 Azure AI Fundamentals Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-microsoft-sc-900-passing-guide/" className="text-blue-600 hover:underline">Microsoft SC-900 Security Fundamentals Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-microsoft-sc-500-passing-guide/" className="text-blue-600 hover:underline">Microsoft SC Security Certification Track Guide</Link></li>
              <li><Link href="/clarke-moyer-microsoft-ms-900-passing-guide/" className="text-blue-600 hover:underline">Microsoft MS-900 Microsoft 365 Fundamentals Guide</Link></li>
              <li><Link href="/clarke-moyer-vcp6-cma-passing-guide/" className="text-blue-600 hover:underline">VMware VCP6-CMA Cloud Management &amp; Automation Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-vcp-am-passing-guide/" className="text-blue-600 hover:underline">VMware VCP-AM Application Modernization Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-vcp5-dcv-passing-guide/" className="text-blue-600 hover:underline">VMware VCP5-DCV Data Center Virtualization Passing Guide</Link></li>
              <li><Link href="/clarke-moyer-vcp4-dcv-passing-guide/" className="text-blue-600 hover:underline">VMware VCP4-DCV Data Center Virtualization Passing Guide</Link></li>
            </ul>
            <p className="mt-3">
              Affiliate links on these pages are marked with ↗ and will open Amazon.com in a new tab.
              A notice reading &ldquo;As an Amazon Associate I earn from qualifying purchases&rdquo;
              also appears at the bottom of each recipe page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900">Questions</h2>
            <p>
              If you have any questions about this disclosure, contact Clarke Moyer via{' '}
              <a
                href="https://www.linkedin.com/in/clarkemoyer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              .
            </p>
          </section>

        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-blue-600 hover:underline font-medium">← Back to Home</Link>
        </div>
      </main>
    </>
  );
}
