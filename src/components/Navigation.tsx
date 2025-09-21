import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Clarke Moyer
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#family" className="text-gray-700 hover:text-gray-900">Family</a>
            <a href="#charity" className="text-gray-700 hover:text-gray-900">Charity</a>
            <a href="#education" className="text-gray-700 hover:text-gray-900">Education</a>
            <a href="#certification" className="text-gray-700 hover:text-gray-900">Certification</a>
          </div>
        </div>
      </div>
    </nav>
  );
}