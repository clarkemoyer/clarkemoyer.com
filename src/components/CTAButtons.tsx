import React from 'react';

interface CTAButtonsProps {
  className?: string;
}

export default function CTAButtons({ className = "" }: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href="https://linkedin.com/in/clarkemoyer"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-center"
      >
        Connect on LinkedIn
      </a>
      <a
        href="https://www.arl.army.mil/careers/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-center"
      >
        Apply for Jobs at ARL
      </a>
    </div>
  );
}