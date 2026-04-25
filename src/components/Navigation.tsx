'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type NavChild = { id: string; href: string; label: string };
type NavLink = { id: string; href: string | null; label: string; children?: NavChild[] };

const navLinks: NavLink[] = [
  { id: 'home', href: '/', label: 'HOME' },
  {
    id: 'about',
    href: null,
    label: 'ABOUT',
    children: [
      { id: 'about-who-i-am', href: '/who-i-am', label: 'WHO I AM' },
      { id: 'about-resume', href: '/it-project-management-resume-of-clarke-moyer', label: 'RESUME' },
      { id: 'about-ppm', href: '/personal-project-manager', label: 'PERSONAL PROJECT MANAGER' },
    ],
  },
  {
    id: 'fun',
    href: '/fun',
    label: 'FUN',
    children: [
      { id: 'fun-cooking', href: '/cooking', label: 'COOKING' },
      { id: 'fun-quotes', href: '/quotes', label: 'QUOTES' },
      { id: 'fun-conferences', href: '/industry-conferences', label: 'INDUSTRY CONFERENCES' },
    ],
  },
  { id: 'certification-guides', href: '/certification-guides', label: 'CERTIFICATION GUIDES' },
  { id: 'wgu-referral', href: '/wgu-referral-program', label: 'WGU REFERRAL PROGRAM' },
  { id: 'psu-arl-referral', href: '/psu-arl-referral-program', label: 'PSU-ARL REFERRAL PROGRAM' },
  { id: 'free-for-charity', href: '/free-for-charity', label: 'FREE FOR CHARITY' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      {/* Top Header Bar */}
      <div className="bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Search Icon */}
            <div className="flex items-center">
              <a
                href="https://duckduckgo.com/?q=site%3Aclarkemoyer.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors flex items-center"
                aria-label="Search this site (opens in new tab)"
              >
                <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium tracking-wider">SEARCH</span>
              </a>
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
              <button
                className="text-white hover:text-gray-300 transition-colors flex items-center"
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
                <span className="ml-2 text-sm font-medium tracking-wider">MENU</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-1">
            {navLinks.map((link) => (
              <React.Fragment key={link.id}>
                {link.href ? (
                  <Link
                    href={link.href}
                    className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors py-2 border-b border-white/10"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span className="text-white text-sm font-semibold tracking-wider py-2 border-b border-white/10 cursor-default">
                    {link.label}
                  </span>
                )}
                {link.children?.map((child) => (
                  <Link
                    key={child.id}
                    href={child.href}
                    className="text-gray-300 hover:text-white text-xs font-medium tracking-wider transition-colors py-1 pl-4 border-b border-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    — {child.label}
                  </Link>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {/* Main Navigation Menu (desktop) */}
      <div className="hidden lg:block bg-black/40 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-8 h-12">
            {navLinks.map((link) => (
              link.children ? (
                <div
                  key={link.id}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onFocusCapture={() => setOpenDropdown(link.id)}
                  onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpenDropdown(null); }}
                  onKeyDownCapture={(e) => {
                    if (e.key === 'Escape') {
                      setOpenDropdown(null);
                      if (document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                      }
                    }
                  }}
                >
                  <button
                    type="button"
                    className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-0 p-0"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.id}
                    onClick={() => setOpenDropdown(openDropdown === link.id ? null : link.id)}
                  >
                    {link.label}
                    <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.id && (
                    <ul
                      className="absolute top-full left-0 mt-0 bg-black/90 backdrop-blur-sm border border-white/20 rounded-b min-w-[140px] z-50 list-none m-0 p-0"
                    >
                      {link.href && (
                        <li key={`${link.id}-self`}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-white hover:bg-white/10 text-sm font-medium tracking-wider transition-colors whitespace-nowrap"
                          >
                            {link.label}
                          </Link>
                        </li>
                      )}
                      {link.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-white hover:bg-white/10 text-sm font-medium tracking-wider transition-colors whitespace-nowrap"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                link.href ? (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="text-white hover:text-gray-300 text-sm font-semibold tracking-wider transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <span key={link.id} className="text-white text-sm font-semibold tracking-wider cursor-default">
                    {link.label}
                  </span>
                )
              )
            ))}
          </div>
        </div>
      </div>

      {/* Subtitle Bar */}
      <div className="hidden lg:block bg-black/40 backdrop-blur-sm border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-10">
            <Link href="/clarke-moyer-cissp-certification-passing-guide" className="text-white hover:text-gray-300 text-xs font-medium tracking-widest transition-colors">
              CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
