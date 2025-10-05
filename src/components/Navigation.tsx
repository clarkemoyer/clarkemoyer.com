import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Search Icon */}
            <div className="flex items-center">
              <button className="text-white hover:text-gray-300 transition-colors" aria-label="Search">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium tracking-wider">SEARCH</span>
              </button>
            </div>

            {/* Center - Brand */}
            <div className="text-center">
              <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                <h1 className="text-xl font-bold tracking-widest leading-tight">
                  CLARKE MOYER
                </h1>
              </Link>
            </div>

            {/* Right - Menu Button */}
            <div className="flex items-center">
              <button className="text-white hover:text-gray-300 transition-colors flex items-center" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span className="ml-2 text-sm font-medium tracking-wider">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="hidden lg:block bg-black/30 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 h-14">
            <Link href="/" className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors">
              HOME
            </Link>
            <Link href="/fun" className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors">
              FUN
            </Link>
            <Link href="/certification" className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors">
              CERTIFICATION GUIDES
            </Link>
            <Link href="/wgu-referral" className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors">
              WGU REFERRAL PROGRAM
            </Link>
            <Link href="/resume" className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors">
              PSU-ARL REFERRAL PROGRAM
            </Link>
            <Link href="/charity" className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors">
              FREE FOR CHARITY
            </Link>
          </div>
        </div>
      </div>

      {/* Subtitle Bar */}
      <div className="hidden lg:block bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-12">
            <Link href="/certification" className="text-white hover:text-gray-300 text-xs font-medium tracking-widest transition-colors">
              CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}