import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

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
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Certification Guides', url: '/certification-guides/' },
        { name: 'MCP Guide', url: '/clarke-moyer-mcp-passing-guide/' },
      ])} />
      <section className="relative min-h-[40vh] bg-gray-900 flex items-center justify-center pt-28 pb-16 px-4">
        <div className="text-center text-white max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm mb-2">
            <Link href="/" className="hover:underline text-gray-300">Home</Link>
            {' / '}
            <Link href="/certification-guides" className="hover:underline text-gray-300">Certification Guides</Link>
            {' / '}MCP Guide
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Clarke Moyer Microsoft MCP Certification Passing Guide</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 prose prose-lg">

          {/* WGU / early career context banner */}
          <div className="not-prose bg-blue-50 border-l-4 border-blue-500 p-5 mb-8">
            <p className="font-bold text-blue-900">🎓 Early Career Context</p>
            <p className="text-blue-800 text-sm mt-1">
              Clarke obtained the MCP in 2009 during the same period he completed his{' '}
              <strong>BS-IT at Western Governors University</strong>. WGU&apos;s program helped build the
              foundational Microsoft Windows knowledge that led to this credential. Clarke obtained
              the MCP specifically as a prerequisite for his hire into SAIC and DCGS — it was
              a career requirement, not just an academic one.
            </p>
          </div>

          <h2 className="not-prose text-2xl font-bold text-gray-900 mb-4 mt-10 border-l-4 border-gray-400 pl-4">The Story</h2>

          {/* CRT Terminal Card */}
          <div className="not-prose my-8 rounded-lg overflow-hidden border-4 border-gray-600 shadow-2xl" style={{background: '#0a0a0a'}}>
            {/* Monitor bezel top */}
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border-b border-gray-600">
              <span className="text-2xl">💾</span>
              <span className="text-gray-400 text-xs font-mono tracking-widest">VINTAGE CREDENTIAL</span>
              <span className="ml-auto text-gray-600 text-xs font-mono">©1998 MICROSOFT CORP</span>
            </div>
            {/* CRT screen */}
            <div className="p-6 font-mono text-green-400 text-sm leading-relaxed relative overflow-hidden"
              style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)',
                textShadow: '0 0 8px rgba(74, 222, 128, 0.8)'
              }}>
              <p className="mb-1">C:\CERTIFICATIONS&gt; dir MCP.exe</p>
              <p className="mb-1 text-green-300">Microsoft Certified Professional (MCP)</p>
              <p className="mb-1">Certification ID: <span className="text-green-200">A2100-0009</span></p>
              <p className="mb-1">Exam: <span className="text-green-200">Windows XP Professional</span></p>
              <p className="mb-1">Obtained: <span className="text-green-200">2009</span></p>
              <p className="mb-1">Status: <span className="text-yellow-400">RETIRED</span></p>
              <p className="mb-3">Required for: <span className="text-green-200">SAIC / DCGS hire</span></p>
              <p className="text-green-600">C:\CERTIFICATIONS&gt; <span className="animate-pulse">_</span></p>
            </div>
            {/* Monitor bottom bezel */}
            <div className="bg-gray-800 border-t border-gray-600 px-4 py-2 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-sm" style={{boxShadow: '0 0 6px #22c55e'}}></div>
              <span className="text-gray-500 text-xs font-mono">POWER ON</span>
              <span className="ml-auto text-gray-600 text-xs font-mono">640×480 VGA</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
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

          <h2 className="not-prose text-2xl font-bold text-gray-900 mb-4 mt-10 border-l-4 border-blue-500 pl-4">What I Recommend Instead</h2>
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
            <p className="text-sm text-gray-600 mb-3">
              📅 Related training:{' '}
              <Link href="/professional-development/" className="text-blue-600 hover:underline">
                Professional Development Events
              </Link>
            </p>
            <Link href="/certification-guides" className="text-blue-600 hover:underline font-medium">← Back to Certification Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
