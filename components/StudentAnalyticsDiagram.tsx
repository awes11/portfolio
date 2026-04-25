'use client';

/**
 * Visual for the Student Analytics case study.
 * Three-panel narrative: the mess → the mapping insight → the unified dashboard.
 *
 * Line-art style, accent brown (#8B7355), warm cream background — matches site aesthetic.
 * Intentionally looks a bit hand-drawn rather than polished Figma.
 */

export function StudentAnalyticsDiagram() {
  return (
    <figure className="diagram-frame">
      <svg
        viewBox="0 0 1100 420"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram: messy per-user spreadsheets, a mapping layer, and a unified live dashboard"
      >
        <defs>
          <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3" />
            <feDisplacementMap in="SourceGraphic" scale="1.5" />
          </filter>

          {/* Arrow marker in accent brown */}
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="8" markerHeight="8" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B7355" />
          </marker>
        </defs>

        {/* ───────── Panel 1: the mess ───────── */}
        <g className="panel" transform="translate(0, 0)">
          <text x="150" y="30" textAnchor="middle" className="panel-label">
            Five counsellors, five formats
          </text>

          {/* Messy spreadsheet stack — offset and rotated for personality */}
          <g filter="url(#rough)">
            {/* Sheet 1 */}
            <g transform="translate(40, 60) rotate(-4)">
              <rect width="180" height="110" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="2" />
              <line x1="0" y1="22" x2="180" y2="22" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="60" y1="0" x2="60" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="120" y1="0" x2="120" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <text x="8" y="15" className="sheet-col">student name</text>
              <text x="68" y="15" className="sheet-col">dob</text>
              <text x="128" y="15" className="sheet-col">status_2024</text>
              {[38, 52, 66, 80, 94].map((y, i) => (
                <g key={i}>
                  <rect x="8" y={y - 9} width="44" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="68" y={y - 9} width="40" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="128" y={y - 9} width="36" height="3" fill="#5C5C5C" opacity="0.5" />
                </g>
              ))}
            </g>

            {/* Sheet 2 */}
            <g transform="translate(80, 100) rotate(2)">
              <rect width="180" height="110" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="2" />
              <line x1="0" y1="22" x2="180" y2="22" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="50" y1="0" x2="50" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="115" y1="0" x2="115" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <text x="8" y="15" className="sheet-col">Name</text>
              <text x="58" y="15" className="sheet-col">Phone #</text>
              <text x="123" y="15" className="sheet-col">Application</text>
              {[38, 52, 66, 80, 94].map((y, i) => (
                <g key={i}>
                  <rect x="8" y={y - 9} width="34" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="58" y={y - 9} width="48" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="123" y={y - 9} width="32" height="3" fill="#5C5C5C" opacity="0.5" />
                </g>
              ))}
            </g>

            {/* Sheet 3 */}
            <g transform="translate(20, 180) rotate(-1)">
              <rect width="180" height="110" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="2" />
              <line x1="0" y1="22" x2="180" y2="22" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="70" y1="0" x2="70" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="130" y1="0" x2="130" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <text x="8" y="15" className="sheet-col">FULL NAME</text>
              <text x="78" y="15" className="sheet-col">CNTCT</text>
              <text x="138" y="15" className="sheet-col">stat.</text>
              {[38, 52, 66, 80, 94].map((y, i) => (
                <g key={i}>
                  <rect x="8" y={y - 9} width="52" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="78" y={y - 9} width="44" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="138" y={y - 9} width="30" height="3" fill="#5C5C5C" opacity="0.5" />
                </g>
              ))}
            </g>

            {/* Sheet 4 */}
            <g transform="translate(120, 230) rotate(3)">
              <rect width="180" height="110" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="2" />
              <line x1="0" y1="22" x2="180" y2="22" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="65" y1="0" x2="65" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <line x1="125" y1="0" x2="125" y2="110" stroke="#D4D0C8" strokeWidth="0.8" />
              <text x="8" y="15" className="sheet-col">applicant</text>
              <text x="73" y="15" className="sheet-col">course</text>
              <text x="133" y="15" className="sheet-col">stage</text>
              {[38, 52, 66, 80, 94].map((y, i) => (
                <g key={i}>
                  <rect x="8" y={y - 9} width="42" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="73" y={y - 9} width="40" height="3" fill="#5C5C5C" opacity="0.5" />
                  <rect x="133" y={y - 9} width="30" height="3" fill="#5C5C5C" opacity="0.5" />
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* Arrow to panel 2 */}
        <line x1="320" y1="210" x2="395" y2="210" stroke="#8B7355"
          strokeWidth="1.4" markerEnd="url(#arrow)" />

        {/* ───────── Panel 2: the mapping layer (the insight) ───────── */}
        <g className="panel" transform="translate(410, 0)">
          <text x="170" y="30" textAnchor="middle" className="panel-label">
            A mapping layer per sheet
          </text>

          <g transform="translate(20, 70)">
            {/* Each row is: source column name → standard field */}
            {[
              { src: '"student name"',     tgt: 'full_name' },
              { src: '"Name"',             tgt: 'full_name' },
              { src: '"FULL NAME"',        tgt: 'full_name' },
              { src: '"applicant"',        tgt: 'full_name' },
              { src: '—',                  tgt: '—' },
              { src: '"status_2024"',      tgt: 'stage' },
              { src: '"Application"',      tgt: 'stage' },
              { src: '"stat."',            tgt: 'stage' },
              { src: '"stage"',            tgt: 'stage' },
            ].map((row, i) => {
              const y = i * 28;
              if (row.src === '—') {
                return <line key={i} x1="0" y1={y + 10} x2="300" y2={y + 10}
                  stroke="#D4D0C8" strokeWidth="0.6" strokeDasharray="3 3" />;
              }
              return (
                <g key={i}>
                  <text x="0" y={y + 14} className="map-src">{row.src}</text>
                  <path d={`M 125 ${y + 10} L 175 ${y + 10}`}
                    stroke="#8B7355" strokeWidth="1" markerEnd="url(#arrow)" />
                  <text x="185" y={y + 14} className="map-tgt">{row.tgt}</text>
                </g>
              );
            })}
          </g>

          <text x="170" y="395" textAnchor="middle" className="panel-sub">
            formats don&apos;t change — so the mapping stays valid
          </text>
        </g>

        {/* Arrow to panel 3 */}
        <line x1="770" y1="210" x2="845" y2="210" stroke="#8B7355"
          strokeWidth="1.4" markerEnd="url(#arrow)" />

        {/* ───────── Panel 3: the unified dashboard ───────── */}
        <g className="panel" transform="translate(860, 0)">
          <text x="120" y="30" textAnchor="middle" className="panel-label">
            One live dashboard
          </text>

          <g transform="translate(20, 70)" filter="url(#rough)">
            <rect width="200" height="280" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="4" />
            {/* Header */}
            <rect x="0" y="0" width="200" height="26" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="0.8" />
            <circle cx="10" cy="13" r="2.5" fill="#8B7355" opacity="0.6" />
            <text x="22" y="17" className="dash-title">Lead conversion</text>

            {/* KPI row */}
            <g transform="translate(12, 38)">
              <text x="0" y="10" className="kpi-label">Total</text>
              <text x="0" y="26" className="kpi-value">1,284</text>
              <text x="60" y="10" className="kpi-label">Converted</text>
              <text x="60" y="26" className="kpi-value">312</text>
              <text x="130" y="10" className="kpi-label">Rate</text>
              <text x="130" y="26" className="kpi-value">24.3%</text>
            </g>

            {/* Bar chart */}
            <g transform="translate(12, 90)">
              {[55, 72, 48, 90, 66, 84, 58].map((h, i) => (
                <rect key={i} x={i * 26} y={100 - h} width="18" height={h}
                  fill="#8B7355" opacity={0.55 + i * 0.05} />
              ))}
              <line x1="0" y1="100" x2="176" y2="100" stroke="#5C5C5C" strokeWidth="0.6" />
            </g>

            {/* Footer row */}
            <g transform="translate(12, 222)">
              <text x="0" y="0" className="kpi-label">Counsellor perf.</text>
              <rect x="0" y="8" width="170" height="3" fill="#ECEAE6" />
              <rect x="0" y="8" width="120" height="3" fill="#8B7355" />
              <text x="0" y="28" className="kpi-label">Front-desk KPI</text>
              <rect x="0" y="36" width="170" height="3" fill="#ECEAE6" />
              <rect x="0" y="36" width="90" height="3" fill="#8B7355" />
            </g>
          </g>

          {/* Live indicator */}
          <g transform="translate(155, 80)">
            <circle cx="0" cy="0" r="3" fill="#8B7355">
              <animate attributeName="opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite" />
            </circle>
            <text x="8" y="4" className="live-label">live</text>
          </g>
        </g>

        <style>{`
          .panel-label {
            font-family: Newsreader, Georgia, serif;
            font-size: 14px;
            font-style: italic;
            fill: #1A1A1A;
          }
          .panel-sub {
            font-family: Newsreader, Georgia, serif;
            font-size: 12px;
            font-style: italic;
            fill: #5C5C5C;
          }
          .sheet-col {
            font-family: "DM Sans", sans-serif;
            font-size: 8.5px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .map-src {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            fill: #5C5C5C;
          }
          .map-tgt {
            font-family: 'Courier New', monospace;
            font-size: 11px;
            fill: #8B7355;
            font-weight: bold;
          }
          .dash-title {
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .kpi-label {
            font-family: "DM Sans", sans-serif;
            font-size: 8px;
            fill: #5C5C5C;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .kpi-value {
            font-family: Newsreader, Georgia, serif;
            font-size: 14px;
            fill: #8B7355;
          }
          .live-label {
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            fill: #8B7355;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }
        `}</style>
      </svg>
      <figcaption>
        How messy spreadsheets become one live dataset — without taking anyone&apos;s spreadsheet away.
      </figcaption>

      <style jsx>{`
        .diagram-frame {
          margin: 3rem 0;
          padding: 2rem 1rem 1.5rem;
          background: #ECEAE6;
          border: 1px solid #D4D0C8;
          border-radius: 8px;
        }
        .diagram-frame svg {
          display: block;
          width: 100%;
          height: auto;
          max-height: 460px;
        }
        figcaption {
          margin-top: 1rem;
          text-align: center;
          font-family: Newsreader, Georgia, serif;
          font-style: italic;
          font-size: 0.9rem;
          color: #5C5C5C;
        }
      `}</style>
    </figure>
  );
}
