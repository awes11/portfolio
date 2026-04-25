'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Magnetic } from './Magnetic';

type NavItem = { label: string; href: string };

const DEFAULT_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

type Props = {
  items?: NavItem[];
  /** When on a detail page, the logo should link back to / */
  homeHref?: string;
};

export function Navigation({ items = DEFAULT_ITEMS, homeHref = '/' }: Props) {
  // Body.scrolled class drives the photo-sidebar collapse.
  // Set once here so every page uses the same threshold.
  useEffect(() => {
    const threshold = typeof window !== 'undefined' ? window.innerHeight * 0.6 : 500;
    const handle = () => {
      document.body.classList.toggle('scrolled', window.scrollY > threshold);
    };
    handle();
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, []);

  return (
    <nav className="site-nav">
      <div className="nav-top-zone" />
      <div className="nav-middle-zone">
        <div className="nav-strip">
          <div className="nav-logo-section">
            <Magnetic strength={20}>
              <Link href={homeHref} className="logo">
                Aadarsh Rauniyar
              </Link>
            </Magnetic>
          </div>
          <div className="nav-links-section">
            <ul className="nav-links">
              {items.map((item) => (
                <li key={item.href}>
                  <Magnetic strength={15}>
                    <Link href={item.href}>{item.label}</Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-bottom-zone" />

      <style jsx>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }

        .nav-top-zone,
        .nav-bottom-zone {
          height: 20px;
          pointer-events: auto;
        }

        .nav-middle-zone {
          padding: 0 1rem;
          pointer-events: auto;
        }

        .nav-strip {
          display: flex;
          align-items: center;
          background: #F5F4F1;
          border-radius: 8px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
          overflow: visible;
        }

        .nav-logo-section {
          width: var(--photo-width-full);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.85rem 2rem;
          transition: width 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        :global(body.scrolled) .nav-logo-section {
          width: max(var(--photo-width-collapsed), var(--photo-min-collapsed));
        }

        :global(.logo) {
          font-family: Newsreader, Georgia, serif;
          font-size: 1rem;
          font-weight: 500;
          color: #1A1A1A;
          letter-spacing: -0.02em;
          white-space: nowrap;
          text-decoration: none;
          transition: font-size 0.3s ease, opacity 0.2s ease;
        }

        :global(body.scrolled .logo) {
          font-size: 0.85rem;
        }

        .nav-links-section {
          flex: 1;
          display: flex;
          justify-content: center;
          padding: 0.85rem 2rem;
        }

        .nav-links {
          display: flex;
          gap: 4rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links :global(a) {
          font-size: 0.85rem;
          color: #5C5C5C;
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-links :global(a:hover) {
          color: #1A1A1A;
          opacity: 1;
        }

        .nav-links :global(a::after) {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #8B7355;
          border-radius: 50%;
          transform: translateX(-50%) scale(0);
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .nav-links :global(a:hover::after) {
          transform: translateX(-50%) scale(1);
        }

        @media (max-width: 900px) {
          .nav-logo-section {
            width: auto;
            padding: 0.7rem 1rem;
            border-right: 1px solid #D4D0C8;
          }
          :global(body.scrolled) .nav-logo-section {
            width: auto;
          }
          .nav-links-section {
            padding: 0.7rem 1rem;
          }
          .nav-links {
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .nav-strip {
            flex-direction: column;
            padding: 0.5rem 0;
            gap: 0.25rem;
          }
          .nav-logo-section {
            width: 100%;
            justify-content: center;
            border-right: none;
            border-bottom: 1px solid #D4D0C8;
          }
          .nav-links-section {
            width: 100%;
            justify-content: center;
          }
          .nav-links {
            gap: 1rem;
            flex-wrap: wrap;
            justify-content: center;
          }
          .nav-links :global(a) {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </nav>
  );
}
