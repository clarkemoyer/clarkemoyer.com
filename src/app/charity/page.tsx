import Navigation from '@/components/Navigation';
import CTAButtons from '@/components/CTAButtons';
import { getContentFile } from '@/lib/content';
import Link from 'next/link';

export default async function CharityPage() {
  const content = await getContentFile('charity');
  // Get the basePath for GitHub Pages deployment
  // For GitHub Pages subdirectory: USE_BASE_PATH=true
  // For custom domains or local dev: USE_BASE_PATH=false or unset
  const basePath = process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : '';

  return (
    <>
      <Navigation />
      
      {/* Hero Section with FFC Circle Logo */}
      <section 
        className="relative min-h-[500px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.85)), url('${basePath}/images/ffc-circle-hero.png')`
        }}
      >
        <div className="text-center text-white pt-24 pb-16 px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Free For Charity</h1>
        </div>
      </section>
      
      {/* Main Content Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            {content ? (
              <div className="space-y-6">
                {/* Introduction Paragraph */}
                <p className="text-lg leading-relaxed text-gray-700">
                  I have been actively involved in direct and indirect charity projects for many years. 
                  Most notably I have Founded and continue to fund a nonprofit that helps other 
                  nonprofits with IT, Business, Web, Marketing, and other services at no cost called 
                  &ldquo;Free For Charity&rdquo;
                </p>

                {/* Learn More Button */}
                <div className="text-center py-8">
                  <a 
                    href="https://freeforcharity.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-10 py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors shadow-md uppercase tracking-wide"
                  >
                    Learn More About Free For Charity
                  </a>
                </div>

                {/* Remaining Content */}
                <div 
                  className="prose prose-lg max-w-none text-gray-700 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-800 [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:space-y-2 [&>ul]:my-4 [&>p]:leading-relaxed [&>p]:mb-4"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
              </div>
            ) : (
              <p className="text-gray-600 text-center text-lg">Content coming soon...</p>
            )}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Connect with me</h3>
          <CTAButtons />
        </div>
      </section>
    </>
  );
}