import type { Metadata } from 'next'
import Link from 'next/link'
import CookiePreferencesButton from '@/components/cookie-preferences-button'
import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Clarke Moyer Projects',
  description: 'Homepage of all Clarke Moyer Activities',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Clarke Moyer Projects | Clarke Moyer',
    type: 'website',
    url: '/',
  },
}

const featuredProjects = [
  {
    title: 'PSU-ARL Referral Program',
    category: 'Referral',
    description:
      'Connect for PSU-ARL referrals when I can personally validate your experience and fit for the opportunity.',
    href: '/psu-arl-referral',
    cta: 'View PSU-ARL Referral Details',
    media: 'cm',
  },
  {
    title: 'WGU Referral Program',
    category: 'Education',
    description:
      'Request a free alumni referral to Western Governors University and learn what to expect next.',
    href: '/wgu-referral',
    cta: 'Request a WGU Referral',
    media: 'wgu',
  },
]

const secondaryProjects = [
  {
    title: 'Who I Am',
    category: 'About',
    description:
      'A concise bio covering family, service, education, technology, and community work.',
    href: '/who-i-am',
    cta: 'Read Clarke’s Bio',
    image: '/images/Clarke-Moyer-Bio-Picture-2MP.jpg',
    alt: 'Clarke Moyer Bio Picture',
    imageClass: 'object-cover object-[center_28%]',
  },
  {
    title: 'Free For Charity',
    category: 'Community',
    description: 'Nonprofit technology and business support work connected to Free For Charity.',
    href: '/charity',
    cta: 'View Charity Work',
    image: '/images/ffc-logo.png',
    alt: 'Free For Charity Logo',
    imageClass: 'object-contain p-8 bg-gradient-to-br from-emerald-700 to-emerald-900',
  },
  {
    title: 'Certification Guides',
    category: 'Guides',
    description:
      'Study notes, certification reflections, and practical guide material for IT professionals.',
    href: '/certification',
    cta: 'View Certification Guides',
    image: '/images/certification-exam.png',
    alt: 'Technical Certification Exam',
    imageClass: 'object-cover object-center',
  },
]

export default async function Home() {
  // Get the basePath for GitHub Pages deployment
  // For GitHub Pages subdirectory: USE_BASE_PATH=true
  // For custom domains or local dev: USE_BASE_PATH=false or unset
  const basePath = process.env.USE_BASE_PATH === 'true' ? '/clarkemoyer.com' : ''
  return (
    <>
      {/* Hero Section with Family Photo Background */}
      <section
        className="relative -mt-16 min-h-[88vh] bg-cover bg-[center_34%] bg-no-repeat lg:-mt-40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.46)), url('${basePath}/images/Grand-Canyon-2019-Family-Photo.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[88vh] items-center justify-center px-4 py-24">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-orange-200">
              Personal projects and community work
            </p>
            <h1 className="mb-6 text-4xl font-bold text-shadow-lg md:text-6xl">
              Clarke Moyer Projects
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-shadow md:text-xl">
              Projects, referrals, certification guides, and community initiatives from Clarke
              Moyer.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/walk-and-talk"
                className="rounded-full bg-white px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100"
              >
                Book a Walk and Talk
              </Link>
              <a
                href="https://linkedin.com/in/clarkemoyer"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/70 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="bg-gray-100 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="relative mx-auto h-32 w-32 md:h-44 md:w-44">
            <Image
              src={`${basePath}/images/Clarke-Moyer-CM-Logo-3D-Black-scaled.jpg`}
              alt="Clarke Moyer (CM) Logo 3D Black"
              width={176}
              height={176}
              className="rounded-full object-cover shadow-2xl"
              priority
            />
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Clarke Moyer
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Husband, father, DoD contractor, education supporter, and charity supporter.
            </h2>
            <div className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2 sm:text-base">
              <p>WGU graduate and alumni referral supporter</p>
              <p>PSU-ARL referral contact for personally validated candidates</p>
              <p>Certification guide creator and CISSP holder</p>
              <p>Founder and supporter of Free For Charity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section id="projects" className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Featured paths
            </p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Choose the project or referral path that fits your visit.
            </h2>
          </div>

          <div data-testid="project-grid" className="space-y-6 md:space-y-8">
            {/* Main Featured Projects - 2 Column */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {featuredProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-gray-800 to-gray-950 p-6 sm:h-48">
                    {project.media === 'wgu' ? (
                      <div className="text-center">
                        <div className="relative mx-auto mb-4 h-16 w-16">
                          <Image
                            src={`${basePath}/images/wgu-logo.jpg`}
                            alt="Western Governors University Logo"
                            width={64}
                            height={64}
                            className="object-contain"
                          />
                        </div>
                        <div className="text-2xl font-bold text-yellow-400">PROUD</div>
                        <div className="text-xl font-bold text-yellow-400">WGU GRAD!</div>
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-white/15 bg-white/10 px-8 py-6 text-center text-white">
                        <div className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">
                          Referral
                        </div>
                        <div className="mt-2 text-2xl font-bold">PSU-ARL</div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
                      {project.category}
                    </p>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{project.title}</h3>
                    <p className="mb-5 flex-1 text-gray-600">{project.description}</p>
                    <Link
                      href={project.href}
                      className="inline-flex items-center font-semibold text-brand hover:text-brand-hover"
                    >
                      {project.cta} <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Secondary Projects - 3 Column */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {secondaryProjects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-40 bg-gray-900 sm:h-44">
                    <Image
                      src={`${basePath}${project.image}`}
                      alt={project.alt}
                      fill
                      className={project.imageClass}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
                      {project.category}
                    </p>
                    <h3 className="mb-3 text-lg font-bold text-gray-900">{project.title}</h3>
                    <p className="mb-5 flex-1 text-sm leading-6 text-gray-600">
                      {project.description}
                    </p>
                    <Link
                      href={project.href}
                      className="inline-flex items-center font-semibold text-brand hover:text-brand-hover"
                    >
                      {project.cta} <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-10 text-center sm:mt-12">
            <a
              href="#menu-footer"
              className="inline-flex rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 hover:bg-gray-200 hover:text-gray-900"
            >
              Browse All Pages
            </a>
          </div>
        </div>
      </section>

      {/* Favorite Quotes Section */}
      <section className="bg-gray-100 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-8 text-2xl font-bold text-gray-800 sm:text-3xl">
            Principles I Work By
          </h2>

          <div className="space-y-8">
            <blockquote className="rounded-r-lg border-l-4 border-orange-600 bg-white p-6 shadow-md">
              <p className="mb-4 text-xl italic text-gray-700">
                &ldquo;Always Be Caught Doing the Right Thing&rdquo;
              </p>
              <cite className="font-semibold not-italic text-gray-600">Greg Davis - DoD SME</cite>
            </blockquote>

            <blockquote className="rounded-r-lg border-l-4 border-orange-600 bg-white p-6 shadow-md">
              <p className="mb-4 text-xl italic text-gray-700">
                &ldquo;The Best Way to Win New Work Is to Do a Good Job on Your Current Work&rdquo;
              </p>
              <cite className="font-semibold not-italic text-gray-600">
                Bryan Tebo - Semper Valens VP
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Dialogue Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl">Let&apos;s Start a Dialogue</h3>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-700 sm:text-lg">
            At the basic level I am a Husband and Father, a DoD Contractor, a Charity Supporter, and
            an Education Supporter. I am seeking to expand upon my existing experiences and
            relationships by representing what I am involved in and taking inputs from the greater
            community. Please contact me if you see some common ground.
          </p>
          <a
            href="https://linkedin.com/in/clarkemoyer"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Contact Clarke
          </a>
        </div>
      </section>

      {/* WGU Referral CTA */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h3 className="mb-6 text-2xl font-bold sm:text-3xl">Request a WGU Referral</h3>
          <Link
            href="/wgu-referral"
            className="block rounded-2xl bg-gradient-to-br from-blue-800 to-blue-950 p-8 text-center shadow-lg transition-transform hover:-translate-y-1"
          >
            <div className="relative mx-auto mb-4 h-20 w-20">
              <Image
                src={`${basePath}/images/wgu-logo.jpg`}
                alt="Western Governors University Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="mb-2 text-3xl font-bold text-yellow-400">PROUD</div>
            <div className="text-2xl font-bold text-yellow-400">WGU GRAD!</div>
          </Link>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer id="menu-footer" className="bg-gray-100 py-10 sm:py-12">
        <div className="mx-auto max-w-4xl px-4">
          <nav className="text-center" aria-label="Footer navigation">
            <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900"
              >
                HOME
              </Link>
              <Link
                href="/fun"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900"
              >
                FUN
              </Link>
              <Link
                href="/certification"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900"
              >
                CERTIFICATION GUIDES
              </Link>
              <Link
                href="/wgu-referral"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900"
              >
                WGU REFERRAL PROGRAM
              </Link>
              <Link
                href="/psu-arl-referral"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900"
              >
                PSU-ARL REFERRAL PROGRAM
              </Link>
              <Link
                href="/charity"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900"
              >
                FREE FOR CHARITY
              </Link>
              <Link
                href="/certification"
                className="block rounded-md bg-white/80 px-4 py-3 font-semibold tracking-wide text-gray-700 hover:bg-white hover:text-gray-900 lg:col-span-2"
              >
                CLARKE MOYER CISSP CERTIFICATION PASSING GUIDE
              </Link>
            </div>
          </nav>
          <div className="mt-8 border-t border-gray-300 pt-8 text-center text-gray-700">
            <p className="text-sm sm:text-base">
              Copyright © 2010–2026 Hosted on Free For Charity Hosting
            </p>
            <div className="mt-4 flex flex-col flex-wrap items-center justify-center gap-3 text-sm sm:flex-row sm:gap-x-5 sm:gap-y-2">
              <Link href="/privacy-policy" className="text-gray-700 underline hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-gray-700 underline hover:text-gray-900">
                Cookie Policy
              </Link>
              <Link
                href="/affiliate-disclosure"
                className="text-gray-700 underline hover:text-gray-900"
              >
                Affiliate Disclosure
              </Link>
              <CookiePreferencesButton className="text-sm text-gray-700 underline hover:text-gray-900" />
            </div>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600">
              This site contains affiliate links. As an Amazon Associate I earn from qualifying
              purchases at no extra cost to you.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
