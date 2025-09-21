import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default async function Home() {
  // Get the basePath for GitHub Pages deployment
  const basePath = process.env.GITHUB_ACTIONS ? '/clarkemoyer.com' : '';
  return (
    <>
      <Navigation />
      
      {/* Hero Section with Family Photo Background */}
      <section 
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${basePath}/wp-content/uploads/2020/08/Grand-Canyon-2019-Family-Photo.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
        
        {/* Mobile Menu Button */}
        <div className="absolute top-6 right-6 lg:hidden">
          <button className="text-white bg-black/20 backdrop-blur-sm rounded px-3 py-2 font-semibold">
            ☰ MENU
          </button>
        </div>
        
        {/* Logo/Brand */}
        <div className="absolute top-6 left-6 text-white">
          <h1 className="text-xl font-bold tracking-widest">
            CLARKE<br />MOYER
          </h1>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center text-white max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Clarke Moyer Projects
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-shadow">
              Thank you for visiting my site. Please scroll down to check out my featured projects below. You can also &quot;Connect on LinkedIn&quot; or to learn more about my family and I click &quot;Get More Info&quot;.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linkedin.com/in/clarkemoyer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                CONNECT ON LINKEDIN
              </a>
              <a 
                href="#projects"
                className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition-colors"
              >
                GET MORE INFO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CM Logo Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-gray-900/20"></div>
            <div className="relative z-10">
              <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-gray-800 text-6xl font-bold">CM</div>
              </div>
              <h3 className="text-3xl font-bold mb-4">CLARKE MOYER</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Main Featured Projects - 2 Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* PSU-ARL Referral Program */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-100 rounded-full flex items-center justify-center">
                  <div className="text-gray-800 text-2xl font-bold">CM</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">PSU-ARL Referral Program</h3>
                <p className="text-gray-600 mb-4">
                  Please connect with me for referrals to work for PSU-ARL. NOTE: I provide referrals only to those that I have personally validated the experience of...
                </p>
                <Link 
                  href="/resume"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                >
                  Continue Reading <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* WGU Referral Program */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-800 to-blue-900 flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-yellow-400 text-4xl font-bold mb-2">🦉</div>
                  <div className="text-yellow-400 text-2xl font-bold">PROUD</div>
                  <div className="text-yellow-400 text-xl font-bold">WGU GRAD!</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">WGU Referral Program</h3>
                <p className="text-gray-600 mb-4">
                  Absolutely free, alumni referral to Western Governors University (WGU). For years now since I started and subsequently graduated from Western Governors University I&apos;ve been referring...
                </p>
                <Link 
                  href="/wgu-referral"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                >
                  Continue Reading <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Projects - 3 Column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Who I Am */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-700"></div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">Who I Am</h3>
                <Link 
                  href="/about"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Free For Charity */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <div className="text-green-600 text-xl font-bold">FFC</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">Free For Charity</h3>
                <Link 
                  href="/charity"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Certification Guides */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
                <div className="text-white text-3xl">🎯</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3">Certification Guides</h3>
                <Link 
                  href="/certification"
                  className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-block bg-gray-100 rounded-lg px-6 py-3">
              <a 
                href="#menu-footer"
                className="text-gray-600 hover:text-gray-800 font-medium"
              >
                Read More Pages
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dialogue Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Let&apos;s Start a Dialogue</h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            At the basic level I am a Husband and Father, a DoD Contractor, a Charity Supporter, and an Education Supporter. I am seeking to expand upon my existing experiences and relationships by representing what I am involved in and taking inputs from the greater community. Please contact me if you see some common ground.
          </p>
          <a 
            href="https://linkedin.com/in/clarkemoyer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition-colors"
          >
            CONNECT TODAY
          </a>
        </div>
      </section>

      {/* WGU Referral CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Click for a WGU Referral</h3>
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg p-8 text-center">
            <div className="text-yellow-400 text-6xl mb-4">🦉</div>
            <div className="text-yellow-400 text-3xl font-bold mb-2">PROUD</div>
            <div className="text-yellow-400 text-2xl font-bold">WGU GRAD!</div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer id="menu-footer" className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-center space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-800 font-medium">HOME</Link>
              <Link href="/fun" className="text-gray-600 hover:text-gray-800 font-medium">FUN</Link>
              <Link href="/certification" className="text-gray-600 hover:text-gray-800 font-medium">CERTIFICATION GUIDES</Link>
              <Link href="/wgu-referral" className="text-gray-600 hover:text-gray-800 font-medium">WGU REFERRAL PROGRAM</Link>
              <Link href="/resume" className="text-gray-600 hover:text-gray-800 font-medium">PSU-ARL REFERRAL PROGRAM</Link>
              <Link href="/charity" className="text-gray-600 hover:text-gray-800 font-medium">FREE FOR CHARITY</Link>
              <Link href="/certification" className="text-gray-600 hover:text-gray-800 font-medium">CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE</Link>
            </div>
          </nav>
          <div className="text-center mt-8 pt-8 border-t text-gray-500">
            <p>Copyright © 2010–2025 Hosted on Free For Charity Hosting · 
              <a href="/wp-login.php" className="text-orange-600 hover:text-orange-700 ml-2">Log out</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}