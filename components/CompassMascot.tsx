'use client';

/**
 * CompassMascot — a single-face compass character.
 *
 * Ported from the IR Connect product (where it has multiple moods, cursor
 * tracking, speech bubbles, and a peek-from-footer animation). For the
 * case study we show just the happy resting face with a gentle blink —
 * enough to convey "this is a real character that lives in the app"
 * without importing the full behavior system.
 */

type Props = {
  size?: number;
};

export function CompassMascot({ size = 180 }: Props) {
  return (
    <div className="mascot-wrap" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Compass mascot — the little guide that lives in IR Connect"
        style={{ overflow: 'visible', width: '100%', height: '100%' }}
      >
        {/* Top loop (chain ring) — the compass hangs from a loop */}
        <circle cx="60" cy="6" r="5" fill="none" stroke="#D4943A" strokeWidth="2" />
        <line x1="60" y1="11" x2="60" y2="18" stroke="#D4943A" strokeWidth="1.5" />

        {/* Outer ring */}
        <circle cx="60" cy="65" r="48" fill="#FFFCF5" stroke="#D4943A" strokeWidth="2.5" />

        {/* Inner decorative ring */}
        <circle cx="60" cy="65" r="42" fill="none" stroke="#E8DCC8" strokeWidth="1" />

        {/* Cardinal ticks — N is emphasized, others subtle */}
        <line x1="60" y1="20" x2="60" y2="26" stroke="#D4943A" strokeWidth="1.5" />
        <line x1="60" y1="104" x2="60" y2="110" stroke="#B0A090" strokeWidth="1" />
        <line x1="15" y1="65" x2="21" y2="65" stroke="#B0A090" strokeWidth="1" />
        <line x1="99" y1="65" x2="105" y2="65" stroke="#B0A090" strokeWidth="1" />
        {/* Diagonal ticks */}
        <line x1="28" y1="33" x2="32" y2="37" stroke="#C8BCA8" strokeWidth="0.8" />
        <line x1="88" y1="33" x2="92" y2="37" stroke="#C8BCA8" strokeWidth="0.8" />
        <line x1="28" y1="97" x2="32" y2="93" stroke="#C8BCA8" strokeWidth="0.8" />
        <line x1="88" y1="97" x2="92" y2="93" stroke="#C8BCA8" strokeWidth="0.8" />

        {/* Cardinal letters */}
        <text x="60" y="32" textAnchor="middle" fontSize="8" fontWeight="700" fill="#D4943A" fontFamily="sans-serif">N</text>
        <text x="60" y="106" textAnchor="middle" fontSize="6" fontWeight="600" fill="#B0A090" fontFamily="sans-serif">S</text>
        <text x="24" y="68" textAnchor="middle" fontSize="6" fontWeight="600" fill="#B0A090" fontFamily="sans-serif">W</text>
        <text x="96" y="68" textAnchor="middle" fontSize="6" fontWeight="600" fill="#B0A090" fontFamily="sans-serif">E</text>

        {/* Inner compass rose area — the face lives here */}
        <circle cx="60" cy="65" r="30" fill="#FAF6EE" />

        {/* ── FACE ── happy resting state only */}
        <g className="mascot-blink">
          {/* Left eye */}
          <g>
            <circle cx="48" cy="60" r="4" fill="#2D3A4A" />
            <circle cx="49" cy="59" r="1.5" fill="white" />
          </g>
          {/* Right eye */}
          <g>
            <circle cx="72" cy="60" r="4" fill="#2D3A4A" />
            <circle cx="73" cy="59" r="1.5" fill="white" />
          </g>
        </g>

        {/* Relaxed brows */}
        <path d="M44,53 Q48,51 52,53" fill="none" stroke="#2D3A4A" strokeWidth="1" strokeLinecap="round" />
        <path d="M68,53 Q72,51 76,53" fill="none" stroke="#2D3A4A" strokeWidth="1" strokeLinecap="round" />

        {/* Warm smile */}
        <path d="M51,72 Q60,78 69,72" fill="none" stroke="#2D3A4A" strokeWidth="1.5" strokeLinecap="round" />

        {/* Rosy cheeks */}
        <circle cx="41" cy="68" r="4" fill="#F5C2B8" opacity="0.25" />
        <circle cx="79" cy="68" r="4" fill="#F5C2B8" opacity="0.25" />

        {/* Needle — points North (static, no tracking in the case study) */}
        <g style={{ transformOrigin: '60px 65px' }}>
          {/* North half (coral) */}
          <polygon points="60,36 56,65 64,65" fill="#C9544D" />
          {/* South half (gray) */}
          <polygon points="60,94 56,65 64,65" fill="#A0ADA0" />
        </g>

        {/* Center cap */}
        <circle cx="60" cy="65" r="5" fill="#D4943A" />
        <circle cx="60" cy="65" r="2" fill="white" />
      </svg>

      <style jsx>{`
        .mascot-wrap {
          position: relative;
          display: inline-block;
        }

        /* Gentle blink — eyes close every ~5 seconds for 150ms.
           Uses scaleY so only the eye group squashes, not the whole
           mascot. Pure CSS, runs on GPU. */
        :global(.mascot-blink) {
          transform-origin: center 60px;
          animation: mascot-blink 5s ease-in-out infinite;
        }

        @keyframes mascot-blink {
          0%, 94%, 100% { transform: scaleY(1); }
          97% { transform: scaleY(0.1); }
        }

        @media (prefers-reduced-motion: reduce) {
          :global(.mascot-blink) {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
