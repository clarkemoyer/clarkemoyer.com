'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function YoutubeEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [active, setActive] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  useEffect(() => {
    if (active) {
      iframeRef.current?.focus();
    }
  }, [active]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {active ? (
        <iframe
          ref={iframeRef}
          className="absolute inset-0 w-full h-full rounded"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          sandbox="allow-scripts allow-same-origin allow-presentation"
          tabIndex={0}
        />
      ) : (
        <button
          type="button"
          className="absolute inset-0 w-full h-full rounded overflow-hidden group"
          onClick={() => setActive(true)}
          aria-label={`Play ${title}`}
        >
          <Image src={thumbnail} alt={title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
    </div>
  );
}
