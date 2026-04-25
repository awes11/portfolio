'use client';

import { useRef, useEffect, ReactNode, cloneElement, isValidElement } from 'react';

type Props = {
  children: ReactNode;
  /** How aggressively the element pulls toward the cursor. Higher = stronger. */
  strength?: number;
  /** For card-style elements — adds slight perspective tilt */
  tilt?: boolean;
};

/**
 * Wraps a child element and applies a magnetic hover with spring-bounce release.
 * Physics parameters are tuned for subtlety — too much magnet effect feels gimmicky.
 */
export function Magnetic({ children, strength = 20, tilt = false }: Props) {
  const wrapperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = wrapperRef.current;
    if (!el) return;

    // State
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let velocityX = 0, velocityY = 0;
    let currentTiltX = 0, currentTiltY = 0;
    let targetTiltX = 0, targetTiltY = 0;
    let strengthMul = 0;
    let isHovered = false;
    let raf = 0;

    // Physics constants
    const LERP = 0.08;
    const SPRING = 0.05;
    const DAMP = 0.88;
    const FADE_IN = 0.1;
    const FADE_OUT = 0.15;

    const onEnter = () => {
      isHovered = true;
      strengthMul = 0;
      if (!raf) animate();
    };

    const onLeave = () => {
      isHovered = false;
      velocityX = (targetX - currentX) * 0.15;
      velocityY = (targetY - currentY) * 0.15;
      targetX = 0;
      targetY = 0;
      targetTiltX = 0;
      targetTiltY = 0;
    };

    const onMove = (e: MouseEvent) => {
      if (!isHovered) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const maxDist = Math.max(rect.width, rect.height);
      targetX = (dx / maxDist) * strength;
      targetY = (dy / maxDist) * strength;
      if (tilt) {
        targetTiltX = (dy / rect.height) * 4;
        targetTiltY = -(dx / rect.width) * 4;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Strength fade
      if (isHovered && strengthMul < 1) {
        strengthMul = Math.min(1, strengthMul + FADE_IN);
      } else if (!isHovered && strengthMul > 0) {
        strengthMul = Math.max(0, strengthMul - FADE_OUT);
      }

      const effTX = targetX * strengthMul;
      const effTY = targetY * strengthMul;
      const effTiltX = targetTiltX * strengthMul;
      const effTiltY = targetTiltY * strengthMul;

      if (isHovered) {
        currentX = lerp(currentX, effTX, LERP);
        currentY = lerp(currentY, effTY, LERP);
        currentTiltX = lerp(currentTiltX, effTiltX, LERP);
        currentTiltY = lerp(currentTiltY, effTiltY, LERP);
      } else {
        // Spring-bounce return to zero
        velocityX += -currentX * SPRING;
        velocityY += -currentY * SPRING;
        velocityX *= DAMP;
        velocityY *= DAMP;
        currentX += velocityX;
        currentY += velocityY;
        currentTiltX += -currentTiltX * SPRING;
        currentTiltY += -currentTiltY * SPRING;
        currentTiltX *= DAMP;
        currentTiltY *= DAMP;
      }

      const transform = tilt
        ? `translate3d(${currentX}px, ${currentY}px, 0) perspective(1000px) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`
        : `translate3d(${currentX}px, ${currentY}px, 0)`;
      el.style.transform = transform;

      const threshold = 0.005;
      const stillMoving =
        Math.abs(currentX) > threshold ||
        Math.abs(currentY) > threshold ||
        Math.abs(velocityX) > threshold ||
        Math.abs(velocityY) > threshold ||
        strengthMul > 0 ||
        isHovered;

      if (stillMoving) {
        raf = requestAnimationFrame(animate);
      } else {
        el.style.transform = '';
        raf = 0;
      }
    };

    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mousemove', onMove);

    return () => {
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength, tilt]);

  return (
    <span
      ref={wrapperRef}
      className={tilt ? 'magnetic-card' : 'magnetic'}
      style={{ display: 'inline-block', position: 'relative' }}
    >
      {children}
    </span>
  );
}
