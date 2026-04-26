'use client';

import { useEffect, useState, useRef } from 'react';

type Portrait = {
  src: string;
  alt: string;
  // objectPosition lets us fine-tune the crop per-image
  position?: string;
};

const PORTRAITS: Portrait[] = [
  {
    src: '/portraits/portrait-studio.jpg',
    alt: 'Aadarsh Kumar Rauniyar',
    position: 'center 30%',
  },
  {
    src: '/portraits/portrait-trek.jpg',
    alt: 'On a trek in the Nepali highlands',
    position: 'center 35%',
  },
  // Additional portraits can be added here as they come in.
  // Keep orientation consistent (portrait), keep tonal palette coherent.
];

const HOLD_MS = 6000;       // Time each frame is shown
const FADE_MS = 1400;       // Crossfade duration

export function PhotoSlideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Respect reduced-motion: freeze on the first frame
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (prefersReducedMotion || PORTRAITS.length <= 1 || paused) return;

    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % PORTRAITS.length);
    }, HOLD_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, prefersReducedMotion]);

  // Pause rotation when the sidebar has collapsed (body.scrolled) —
  // rotating in a 100px sliver is just visual noise.
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      setPaused(body.classList.contains('scrolled'));
    });
    observer.observe(body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  // Preload all images so crossfades are never caught mid-load
  useEffect(() => {
    PORTRAITS.forEach((p) => {
      const img = new Image();
      img.src = p.src;
    });
  }, []);

  return (
    <aside className="photo-sidebar" aria-hidden="true">
      <div className="photo-stack">
        {PORTRAITS.map((portrait, i) => (
          <img
            key={portrait.src}
            src={portrait.src}
            alt={portrait.alt}
            className={`photo-frame ${i === index ? 'is-active' : ''}`}
            style={{ objectPosition: portrait.position ?? 'center center' }}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding="async"
            width="900"
            height="1600"
          />
        ))}
      </div>

      {/* Progress dots — subtle, bottom-right, only when multiple frames */}
      {PORTRAITS.length > 1 && !prefersReducedMotion && (
        <div className="photo-dots" aria-hidden="true">
          {PORTRAITS.map((_, i) => (
            <span
              key={i}
              className={`photo-dot ${i === index ? 'is-active' : ''}`}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        .photo-sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--photo-width-full);
          height: 100vh;
          z-index: 50;
          overflow: hidden;
          transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        :global(body.scrolled) .photo-sidebar {
          width: max(var(--photo-width-collapsed), var(--photo-min-collapsed));
        }

        .photo-sidebar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background: #D4D0C8;
          pointer-events: none;
          z-index: 2;
        }

        .photo-stack {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .photo-frame {
          position: absolute;
          inset: 0;
          width: var(--photo-width-full);
          height: 100%;
          object-fit: cover;
          filter: grayscale(5%) contrast(1.02);
          opacity: 0;
          transition: opacity ${FADE_MS}ms ease-in-out, filter 0.6s ease;
          will-change: opacity;
        }

        .photo-frame.is-active {
          opacity: 1;
        }

        .photo-sidebar:hover .photo-frame.is-active {
          filter: grayscale(0%) contrast(1);
        }

        .photo-dots {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          gap: 0.4rem;
          z-index: 3;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .photo-sidebar:hover .photo-dots {
          opacity: 1;
        }

        .photo-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(245, 244, 241, 0.5);
          transition: all 0.3s ease;
        }

        .photo-dot.is-active {
          background: rgba(245, 244, 241, 1);
          width: 16px;
          border-radius: 3px;
        }

        /* Collapsed (scrolled) state — dots hidden, no hover reveal */
        :global(body.scrolled) .photo-dots {
          opacity: 0 !important;
        }

        /* Mobile: sidebar becomes a horizontal strip at top of page */
        @media (max-width: 900px) {
          .photo-sidebar {
            position: relative;
            width: 100%;
            height: 50vh;
            min-height: 350px;
          }

          .photo-frame {
            width: 100%;
          }

          :global(body.scrolled) .photo-sidebar {
            position: fixed;
            width: 100%;
            height: 60px;
            min-height: 60px;
          }

          .photo-sidebar::after {
            top: auto;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;
            height: 1px;
          }

          .photo-dots {
            bottom: 1rem;
            right: 1rem;
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .photo-frame {
            transition: none;
          }
        }
      `}</style>
    </aside>
  );
}
