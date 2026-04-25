'use client';

import { useRef, useEffect } from 'react';

/**
 * SideEffectsRow — the Thanos snap moment on the hero.
 *
 * The thesis: when my approach to problem-solving works, there are no side
 * effects. Hover the row, the entire thing — label and all three items —
 * disintegrates to particles and vanishes. Clean empty space. No jitter,
 * no layout collapse; the row preserves its height so the payoff is the
 * EMPTY area where something used to be.
 *
 * The side effects named are the real painful things my actual work makes
 * go away:
 *   - Monday reporting drills → Lead Dashboard
 *   - missed contract expiries → IR Connect
 *   - spreadsheet sprawl → Student Analytics
 *
 * Each word gets its own letter-split so particles can pop from exact
 * positions. On hover, letters disintegrate in a staggered left-to-right
 * sweep. On leave, they reform.
 */

type Props = { className?: string };

// The three words to snap, plus the label that also snaps
const LABEL = 'Side effects:';
const ITEMS = [
  'Monday reporting drills',
  'missed contract expiries',
  'spreadsheet sprawl',
];
// Items separated visually by a small ·
const SEPARATOR = ' · ';

export function SideEffectsRow({ className = '' }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const itemsRef = useRef<HTMLSpanElement>(null);
  const particleLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = rootRef.current;
    const particleLayer = particleLayerRef.current;
    if (!root || !particleLayer) return;

    // Collect every letter span from both label and items
    const allLetters = Array.from(
      root.querySelectorAll<HTMLSpanElement>('.se-letter')
    );
    if (allLetters.length === 0) return;

    let isSnapped = false;
    let isAnimating = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const clearAll = () => {
      timeouts.forEach((t) => clearTimeout(t));
      timeouts = [];
    };

    const createParticles = (letter: HTMLElement) => {
      const letterRect = letter.getBoundingClientRect();
      const rootRect = root.getBoundingClientRect();
      const offsetX = letterRect.left - rootRect.left;
      const offsetY = letterRect.top - rootRect.top;
      const w = letterRect.width;
      const h = letterRect.height;

      // ~8 particles per letter — enough texture, not overwhelming
      const count = 8 + Math.floor(Math.random() * 4);
      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'se-particle';
        const x = offsetX + Math.random() * w;
        const y = offsetY + Math.random() * h;
        const size = 0.5 + Math.random() * 0.8;
        // Drift up and to the right, like the original Thanos effect
        const tx = 10 + Math.random() * 30;
        const ty = -15 - Math.random() * 35;
        const rot = Math.random() * 360;
        const delay = Math.random() * 0.1;
        const duration = 0.6 + Math.random() * 0.4;
        p.style.cssText = `
          left:${x}px; top:${y}px;
          width:${size}px; height:${size}px;
          --tx:${tx}px; --ty:${ty}px; --rot:${rot}deg;
          --delay:${delay}s; --duration:${duration}s;
        `;
        particleLayer.appendChild(p);
        // Trigger animation next frame
        requestAnimationFrame(() => p.classList.add('active'));
      }
    };

    const snap = () => {
      if (isSnapped || isAnimating) return;
      isAnimating = true;
      clearAll();

      // Left-to-right stagger across the WHOLE row (label first, then items)
      const delayStep = 12; // ms between letters — fast total sweep

      allLetters.forEach((letter, i) => {
        const t = setTimeout(() => {
          createParticles(letter);
          letter.classList.add('se-disintegrating');
        }, i * delayStep);
        timeouts.push(t);
      });

      const done = setTimeout(() => {
        isSnapped = true;
        isAnimating = false;
      }, allLetters.length * delayStep + 900);
      timeouts.push(done);
    };

    const reform = () => {
      if (!isSnapped && !isAnimating) return;
      clearAll();
      isAnimating = true;

      const delayStep = 8;
      allLetters.forEach((letter, i) => {
        const t = setTimeout(() => {
          letter.classList.remove('se-disintegrating');
        }, i * delayStep);
        timeouts.push(t);
      });

      const done = setTimeout(() => {
        // Clear lingering particles on full reform
        if (particleLayer) particleLayer.innerHTML = '';
        isSnapped = false;
        isAnimating = false;
      }, allLetters.length * delayStep + 300);
      timeouts.push(done);
    };

    root.addEventListener('mouseenter', snap);
    root.addEventListener('mouseleave', reform);

    return () => {
      root.removeEventListener('mouseenter', snap);
      root.removeEventListener('mouseleave', reform);
      clearAll();
    };
  }, []);

  return (
    <div ref={rootRef} className={`side-effects-row ${className}`}>
      <div ref={particleLayerRef} className="se-particle-layer" aria-hidden="true" />
      <span ref={labelRef} className="se-label">
        {splitLetters(LABEL, 'label')}
      </span>{' '}
      <span ref={itemsRef} className="se-items">
        {ITEMS.map((item, idx) => (
          <span key={idx} className="se-item">
            {splitLetters(item, `item-${idx}`)}
            {idx < ITEMS.length - 1 && splitLetters(SEPARATOR, `sep-${idx}`)}
          </span>
        ))}
      </span>

      <style jsx>{`
        .side-effects-row {
          position: relative;
          display: inline-block;
          margin-bottom: 3rem;
          padding: 0.4rem 0;
          cursor: default;
          /* Reserve the row's height so snap leaves clean empty space
             instead of collapsing. Content below doesn't jump. */
          min-height: 2rem;
        }

        .se-label {
          font-family: 'Newsreader', Georgia, serif;
          font-style: italic;
          font-size: 0.88rem;
          color: #8B7355;
          letter-spacing: 0.01em;
        }

        .se-items {
          font-family: 'Newsreader', Georgia, serif;
          font-style: italic;
          font-size: 0.88rem;
          color: #5C5C5C;
        }

        .side-effects-row :global(.se-letter) {
          display: inline-block;
          transition: opacity 0.2s ease;
          will-change: opacity;
        }

        .side-effects-row :global(.se-letter.se-disintegrating) {
          opacity: 0;
        }

        .se-particle-layer {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: visible;
        }

        .side-effects-row :global(.se-particle) {
          position: absolute;
          background: #8B7355;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }

        .side-effects-row :global(.se-particle.active) {
          animation: se-drift var(--duration, 0.9s) var(--delay, 0s) cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes se-drift {
          0%   { opacity: 1; transform: translate(0, 0) rotate(0deg) scale(1); }
          15%  { opacity: 0.9; }
          100% { opacity: 0;
                 transform: translate(var(--tx, 20px), var(--ty, -30px)) rotate(var(--rot, 180deg)) scale(0.25); }
        }

        @media (prefers-reduced-motion: reduce) {
          .side-effects-row :global(.se-letter) {
            transition: none;
          }
        }

        @media (max-width: 600px) {
          .se-label,
          .se-items {
            font-size: 0.82rem;
          }
        }
      `}</style>
    </div>
  );
}

/**
 * Split a string into individual letter spans so each one can
 * disintegrate independently. Spaces become non-breaking so the
 * layout doesn't reflow.
 */
function splitLetters(text: string, keyPrefix: string) {
  return text.split('').map((ch, i) => (
    <span key={`${keyPrefix}-${i}`} className="se-letter">
      {ch === ' ' ? '\u00A0' : ch}
    </span>
  ));
}
