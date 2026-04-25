import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Clarke Moyer Microsoft MCP Certification Passing Guide',
  description: "Clarke Moyer's guide to the Microsoft MCP — the foundational Microsoft Professional credential.",
  openGraph: {
    title: 'Clarke Moyer Microsoft MCP Certification Passing Guide | Clarke Moyer',
    description: "Clarke Moyer's guide to the Microsoft MCP — the foundational Microsoft Professional credential.",
    type: 'article',
    url: '/clarke-moyer-mcp-passing-guide/',
  },
};

export default function MCPGuidePage() {
  return (
    <>
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <div className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}MCP Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft MCP Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          <h2>The Story</h2>
          <p>
            I got my MCP in March 2009 — and yes, it was a <strong>Windows XP certification</strong>. If you&rsquo;re
            wondering how long ago that was: the &ldquo;P&rdquo; in XP stood for &ldquo;Professional,&rdquo; not
            &ldquo;Please upgrade already.&rdquo;
          </p>
          <p>
            At the time, the MCP was a hard prerequisite. SAIC and DCGS required it before they&rsquo;d even consider
            hiring you. It wasn&rsquo;t optional, it wasn&rsquo;t a nice-to-have — it was the ticket you had to punch
            to get in the door. So I punched it.
          </p>
          <p>
            This was the <strong>before cloud era</strong>. Microsoft certifications in 2009 meant knowing your way
            around a domain controller and Active Directory. You didn&rsquo;t &ldquo;spin up resources&rdquo; — you
            physically racked servers. Group Policy was the closest thing to infrastructure-as-code, and DNS was
            something you fixed at 2am with a prayer and a server reboot.
          </p>
          <p>
            The MCP was the entry credential to everything else in the Microsoft ecosystem at the time: MCSA, MCSE,
            MCDBA. It said &ldquo;this person passed at least one Microsoft exam and can be trusted near a Windows
            server.&rdquo; That was the bar.
          </p>
          <p>
            I earned it, it served its purpose, and then Microsoft eventually retired the entire track when they
            shifted to the role-based cloud certification model. No complaints — the new track is genuinely better
            and more useful.
          </p>

          <div className="not-prose bg-red-50 border-l-4 border-red-600 p-5 my-8 rounded">
            <p className="text-red-800 font-bold text-lg">⚠️ Retired Certification</p>
            <p className="text-red-700 mt-2">
              The MCP certification track has been retired by Microsoft. Microsoft no longer offers the MCP credential.
              Clarke holds this as a legacy certification. There is nothing to study for — you cannot take this exam anymore.
            </p>
            <p className="text-red-700 mt-2">
              For current Microsoft certifications, see the recommendations below.
            </p>
          </div>

          <h2>What I Recommend Instead</h2>
          <p>
            Microsoft&rsquo;s current certification track is genuinely excellent — role-based, cloud-focused, and
            actually relevant to what enterprises and DoD environments are running today. I&rsquo;ve completed all
            of these and recommend them.
          </p>

          <ul className="not-prose space-y-3 mt-4">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <div>
                <Link href="/clarke-moyer-microsoft-az-900-passing-guide/" className="text-blue-600 hover:underline font-semibold">
                  AZ-900 Azure Fundamentals
                </Link>
                <span className="text-gray-600"> — Start here. The entry point for all Azure certifications. Covers cloud concepts, Azure services, pricing, and governance.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <div>
                <Link href="/clarke-moyer-microsoft-ai-900-passing-guide/" className="text-blue-600 hover:underline font-semibold">
                  AI-900 Azure AI Fundamentals
                </Link>
                <span className="text-gray-600"> — Essential for anyone advising on AI policy or procurement in enterprise or DoD environments.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <div>
                <Link href="/clarke-moyer-microsoft-ms-900-passing-guide/" className="text-blue-600 hover:underline font-semibold">
                  MS-900 Microsoft 365 Fundamentals
                </Link>
                <span className="text-gray-600"> — Covers productivity, collaboration, security, and compliance across the Microsoft 365 platform.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <div>
                <Link href="/clarke-moyer-microsoft-sc-900-passing-guide/" className="text-blue-600 hover:underline font-semibold">
                  SC-900 Security, Compliance &amp; Identity Fundamentals
                </Link>
                <span className="text-gray-600"> — Entry point to the Microsoft security track. Especially useful alongside CISSP for mapping concepts to Azure.</span>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">→</span>
              <div>
                <Link href="/clarke-moyer-microsoft-sc-500-passing-guide/" className="text-blue-600 hover:underline font-semibold">
                  SC Series — Cloud &amp; AI Security Engineer Track
                </Link>
                <span className="text-gray-600"> — Clarke&rsquo;s overview of the full SC security track, from SC-900 through SC-100, and how each maps to DoD and enterprise security roles.</span>
              </div>
            </li>
          </ul>

          <div className="mt-12 text-center not-prose">
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
