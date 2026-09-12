import TrackedLink from '@/components/TrackedLink'

interface CTAButtonsProps {
  className?: string
}

export default function CTAButtons({ className = '' }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <TrackedLink
        href="/walk-and-talk/"
        conversionPath="professional_consulting"
        conversionAction="open_walk_and_talk"
        conversionLocation="shared_connect"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Book a Walk and Talk
      </TrackedLink>
      <TrackedLink
        href="https://linkedin.com/in/clarkemoyer"
        conversionPath="professional_consulting"
        conversionAction="open_linkedin"
        conversionLocation="shared_connect"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 border border-blue-600 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
      >
        Connect on LinkedIn
      </TrackedLink>
    </div>
  )
}
