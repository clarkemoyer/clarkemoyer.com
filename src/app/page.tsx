import Navigation from '@/components/Navigation';
import CTAButtons from '@/components/CTAButtons';
import ContentSection from '@/components/ContentSection';
import { getContentFile } from '@/lib/content';

export default async function Home() {
  // Load content for all sections
  const aboutContent = await getContentFile('about');
  const familyContent = await getContentFile('family');
  const charityContent = await getContentFile('charity');
  const educationContent = await getContentFile('education');
  const certificationContent = await getContentFile('certification');

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Clarke Moyer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Professional Profile & Personal Journey
          </p>
          <CTAButtons />
        </div>
      </section>

      {/* Content Sections */}
      <ContentSection 
        id="about" 
        title="About" 
        content={aboutContent} 
      />
      
      <ContentSection 
        id="family" 
        title="Family" 
        content={familyContent} 
        showReadMore={true} 
      />
      
      <ContentSection 
        id="charity" 
        title="Charity" 
        content={charityContent} 
        showReadMore={true} 
      />
      
      <ContentSection 
        id="education" 
        title="Education" 
        content={educationContent} 
        showReadMore={true} 
      />
      
      <ContentSection 
        id="certification" 
        title="Certification" 
        content={certificationContent} 
        showReadMore={true} 
      />

      {/* Footer with CTA */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
          <CTAButtons className="justify-center" />
          <p className="mt-8 text-gray-400">
            © {new Date().getFullYear()} Clarke Moyer. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}