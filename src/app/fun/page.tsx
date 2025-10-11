import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';

export default async function FunPage() {
  // Get the basePath for GitHub Pages deployment
  const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';
  
  return (
    <>
      <Navigation />
      
      {/* Hero Section with Family Photo Background */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${basePath}/wp-content/uploads/2020/08/Grand-Canyon-2019-Family-Photo.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        
        {/* Breadcrumb */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-6">
          <div className="text-white text-sm">
            You are here: <Link href="/" className="hover:underline">Home</Link> / Fun
          </div>
        </div>
        
        {/* Hero Title */}
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-shadow-lg">Fun</h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Intro Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                An Assortment of Other Fun Things I am Working On
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Reach out to me if you have any questions on any topic.
              </p>
              <a
                href="https://www.linkedin.com/in/clarkemoyer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-colors uppercase text-lg"
              >
                Reach out to me on LinkedIn
              </a>
            </div>

            {/* Four Column Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              
              {/* Cooking Card */}
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cooking</h3>
                <p className="text-gray-700 mb-6">
                  My wife is a trained chef but she does not have a website! This is where I keep my &lsquo;World Famous&rsquo; recipes.
                </p>
                <a
                  href="/cooking/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Cooking Homepage
                </a>
              </div>

              {/* Books & Reading Card */}
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Books &amp; Reading</h3>
                <p className="text-gray-700 mb-6">
                  I don&rsquo;t read many books but when I do I sometimes add them here.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Books &amp; Reading Homepage
                </a>
              </div>

              {/* Travel & Events Card */}
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Travel &amp; Events</h3>
                <p className="text-gray-700 mb-6">
                  We love to travel and do local things. I will try and list them here.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Travel &amp; Events homepage
                </a>
              </div>

              {/* Speaking & Publishing Card */}
              <div className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Speaking &amp; Publishing</h3>
                <p className="text-gray-700 mb-6">
                  I am always looking for speaking and publishing opportunities. If I get them I post them here.
                </p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition-colors"
                >
                  Speaking &amp; Publishing Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Start a Dialogue Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6 text-gray-900">Let&apos;s Start a Dialogue</h3>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At the basic level I am a Husband and Father, a DoD Contractor, a Charity Supporter, and an Education Supporter. I am seeking to expand upon my existing experiences and relationships by representing what I am involved in and taking inputs from the greater community. Please contact me if you see some common ground.
          </p>
          <a
            href="https://www.linkedin.com/in/clarkemoyer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand hover:bg-brand-hover text-white font-semibold px-8 py-3 rounded transition-colors uppercase"
          >
            Connect Today
          </a>
        </div>
      </section>

      {/* WGU Referral Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Click for a WGU Referral</h3>
          <a 
            href="https://mbsy.co/3ff2tz"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-12 text-center hover:shadow-xl transition-shadow">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={`${basePath}/images/wgu-logo.jpg`}
                  alt="Western Governors University Logo"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div className="text-yellow-400 text-4xl font-bold mb-2">PROUD</div>
              <div className="text-yellow-400 text-3xl font-bold">WGU GRAD!</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}