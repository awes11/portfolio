'use client';

import { useRef, useEffect } from 'react';

type Props = {
  text: string;
};

/**
 * "Thanos snap" effect on a word — letters disintegrate into particles on hover.
 * Ported from the original site. Used once in the hero, not more — overuse kills it.
 */
export function SnapText({ text }: Props) {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = wrapperRef.current;
    if (!el) return;

    const letterContainer = el.querySelector('.letter-container') as HTMLElement;
    const particleContainer = el.querySelector('.particle-container') as HTMLElement;
    if (!letterContainer || !particleContainer) return;

    // Split text into letter spans
    letterContainer.innerHTML = '';
    const letters: HTMLSpanElement[] = [];
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'snap-letter';
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      letterContainer.appendChild(span);
      letters.push(span);
    }

    let isSnapped = false;
    let isAnimating = false;
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    const clearAll = () => {
      timeouts.forEach((t) => clearTimeout(t));
      timeouts = [];
    };

    const createParticles = (letterEl: HTMLElement) => {
      const rect = letterEl.getBoundingClientRect();
      const cRect = el.getBoundingClientRect();
      const offsetX = rect.left - cRect.left;
      const offsetY = rect.top - cRect.top;
      const count = 12 + Math.floor(Math.random() * 8);
      const particles: HTMLSpanElement[] = [];
      for (let i = 0; i < count; i++) {
        const p = document.createElement('span');
        p.className = 'particle';
        const x = offsetX + Math.random() * rect.width;
        const y = offsetY + Math.random() * rect.height;
        const size = 0.5 + Math.random();
        const tx = 15 + Math.random() * 40;
        const ty = -20 - Math.random() * 50;
        const rot = Math.random() * 360;
        const delay = Math.random() * 0.15;
        const duration = 0.6 + Math.random() * 0.5;
        p.style.cssText = `
          left:${x}px; top:${y}px; width:${size}px; height:${size}px;
          --tx:${tx}px; --ty:${ty}px; --rot:${rot}deg;
          --delay:${delay}s; --duration:${duration}s;
        `;
        particleContainer.appendChild(p);
        particles.push(p);
      }
      return particles;
    };

    const snap = () => {
      if (isAnimating || isSnapped) return;
      isAnimating = true;
      clearAll();
      const delayBetween = 80;
      for (let i = letters.length - 1; i >= 0; i--) {
        const reverseIndex = letters.length - 1 - i;
        const t = setTimeout(() => {
          letters[i].classList.add('disintegrating');
          const particles = createParticles(letters[i]);
          particles.forEach((p) => p.classList.add('active'));
        }, reverseIndex * delayBetween);
        timeouts.push(t);
      }
      const done = setTimeout(() => {
        isSnapped = true;
        isAnimating = false;
      }, letters.length * delayBetween + 1200);
      timeouts.push(done);
    };

    const reform = () => {
      if (!isSnapped && !isAnimating) return;
      clearAll();
      isAnimating = true;
      const delayBetween = 50;
      letters.forEach((letter, i) => {
        const t = setTimeout(() => {
          letter.classList.remove('disintegrating');
        }, i * delayBetween);
        timeouts.push(t);
      });
      const done = setTimeout(() => {
        particleContainer.innerHTML = '';
        isSnapped = false;
        isAnimating = false;
      }, letters.length * delayBetween + 300);
      timeouts.push(done);
    };

    el.addEventListener('mouseenter', snap);
    el.addEventListener('mouseleave', reform);

    return () => {
      el.removeEventListener('mouseenter', snap);
      el.removeEventListener('mouseleave', reform);
      clearAll();
    };
  }, [text]);

  return (
    <>
      <span ref={wrapperRef} className="snap-text">
        <span className="letter-container">{text}</span>
        <span className="particle-container" />
      </span>
      <style jsx global>{`
        .snap-text {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }
        .snap-text .letter-container { display: inline; }
        .snap-text .snap-letter {
          position: relative;
          display: inline-block;
          transition: opacity 0.2s ease;
        }
        .snap-text .snap-letter.disintegrating { opacity: 0; }
        .snap-text .particle-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: visible;
        }
        .snap-text .particle {
          position: absolute;
          background: #8B7355;
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
        }
        .snap-text .particle.active {
          animation: snapDisintegrate var(--duration, 1.2s) var(--delay, 0s) cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes snapDisintegrate {
          0%   { opacity: 1; transform: translate(0, 0) rotate(0deg) scale(1); }
          20%  { opacity: 0.9; }
          100% { opacity: 0; transform: translate(var(--tx, 30px), var(--ty, -50px)) rotate(var(--rot, 180deg)) scale(0.3); }
        }
      `}</style>
    </>
  );
}
