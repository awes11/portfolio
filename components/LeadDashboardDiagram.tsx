'use client';

/**
 * Diagram for the Lead Dashboard case study.
 *
 * Visual thesis: the vendor-built MIS handles data entry; my dashboard
 * sits alongside it and fills the gaps — analytics, smart search, usage
 * tracking. Not a replacement. A complement.
 *
 * Three panels:
 *   1. Vendor MIS (data entry) — what already existed
 *   2. The gaps — analytics, search UX, engagement — surfaced between them
 *   3. My admin dashboard — the gap-filler
 */

export function LeadDashboardDiagram() {
  return (
    <figure className="diagram-frame">
      <svg
        viewBox="0 0 1100 440"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram: vendor MIS on the left, three gap cards in the middle, admin dashboard on the right"
      >
        <defs>
          <filter id="rough-l" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="5" />
            <feDisplacementMap in="SourceGraphic" scale="1.3" />
          </filter>
          <marker id="arrow-l" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="8" markerHeight="8" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B7355" />
          </marker>
          {/* Dashed connector style */}
          <marker id="arrow-l-dash" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B7355" opacity="0.6" />
          </marker>
        </defs>

        {/* ─────────── PANEL 1: Vendor MIS ─────────── */}
        <g transform="translate(30, 0)">
          <text x="140" y="30" textAnchor="middle" className="panel-label-l">
            Vendor MIS (data entry)
          </text>

          <g transform="translate(20, 60)" filter="url(#rough-l)">
            <rect width="240" height="320" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="4" />
            {/* Toolbar */}
            <rect x="0" y="0" width="240" height="26" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="0.8" />
            <circle cx="10" cy="13" r="2.5" fill="#C9544D" opacity="0.5" />
            <circle cx="20" cy="13" r="2.5" fill="#E8B547" opacity="0.5" />
            <circle cx="30" cy="13" r="2.5" fill="#7FA882" opacity="0.5" />
            <text x="120" y="17" textAnchor="middle" className="mis-title">Lead entry form</text>

            {/* Form fields — lots of them, crowded */}
            <g transform="translate(16, 44)">
              {['Student name', 'Phone number', 'Email', 'Source', 'Counsellor', 'Course', 'Institution', 'Stage', 'Notes', 'Follow-up date'].map((label, i) => (
                <g key={label} transform={`translate(0, ${i * 25})`}>
                  <text x="0" y="8" className="mis-field-label">{label}</text>
                  <rect x="0" y="12" width="208" height="9" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="0.5" rx="1" />
                  <rect x="2" y="14" width={30 + (i * 7) % 90} height="5" fill="#B0A090" opacity="0.3" />
                </g>
              ))}
            </g>
          </g>
          <text x="140" y="400" textAnchor="middle" className="panel-sub-l">
            where the data lives
          </text>
        </g>

        {/* ─────────── CONNECTOR: data flows OUT to fill gaps ─────────── */}
        <g>
          <path d="M 320 220 Q 360 220 395 200" fill="none"
            stroke="#8B7355" strokeWidth="1.3" strokeDasharray="3 3"
            markerEnd="url(#arrow-l-dash)" opacity="0.7" />
          <path d="M 320 240 Q 360 260 395 260" fill="none"
            stroke="#8B7355" strokeWidth="1.3" strokeDasharray="3 3"
            markerEnd="url(#arrow-l-dash)" opacity="0.7" />
          <text x="360" y="200" textAnchor="middle" className="connector-label-l">
            read
          </text>
        </g>

        {/* ─────────── PANEL 2: THE GAPS (what vendor MIS didn't do) ─────────── */}
        <g transform="translate(400, 60)">
          <text x="150" y="-10" textAnchor="middle" className="panel-label-l">
            The gaps
          </text>

          {/* Gap card 1: Analytics */}
          <g transform="translate(0, 20)">
            <rect width="300" height="80" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="1" strokeDasharray="4 3" rx="4" />
            <text x="15" y="22" className="gap-title">No pipeline analytics</text>
            <text x="15" y="40" className="gap-desc">50+ people compile reports by hand, weekly.</text>
            <text x="15" y="58" className="gap-desc">Leadership sees numbers after they&apos;re stale.</text>
          </g>

          {/* Gap card 2: Search */}
          <g transform="translate(0, 115)">
            <rect width="300" height="80" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="1" strokeDasharray="4 3" rx="4" />
            <text x="15" y="22" className="gap-title">Lead search is a form wall</text>
            <text x="15" y="40" className="gap-desc">Counsellors hunt through 40-field records to find</text>
            <text x="15" y="58" className="gap-desc">the three things that matter: name, stage, next touch.</text>
          </g>

          {/* Gap card 3: Engagement */}
          <g transform="translate(0, 210)">
            <rect width="300" height="80" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="1" strokeDasharray="4 3" rx="4" />
            <text x="15" y="22" className="gap-title">No incentive to use the system well</text>
            <text x="15" y="40" className="gap-desc">Data entry feels like a tax. Adoption is uneven.</text>
            <text x="15" y="58" className="gap-desc">The people doing it right get nothing for it.</text>
          </g>
        </g>

        {/* ─────────── CONNECTOR: gaps feed into dashboard ─────────── */}
        <g>
          <path d="M 710 110 L 770 170" fill="none"
            stroke="#8B7355" strokeWidth="1.4" markerEnd="url(#arrow-l)" />
          <path d="M 710 205 L 770 205" fill="none"
            stroke="#8B7355" strokeWidth="1.4" markerEnd="url(#arrow-l)" />
          <path d="M 710 300 L 770 240" fill="none"
            stroke="#8B7355" strokeWidth="1.4" markerEnd="url(#arrow-l)" />
        </g>

        {/* ─────────── PANEL 3: Admin Dashboard (the gap-filler) ─────────── */}
        <g transform="translate(780, 0)">
          <text x="145" y="30" textAnchor="middle" className="panel-label-l">
            Admin dashboard (complement)
          </text>

          <g transform="translate(20, 60)" filter="url(#rough-l)">
            <rect width="250" height="320" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="4" />
            {/* Header */}
            <rect x="0" y="0" width="250" height="26" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="0.8" />
            <circle cx="10" cy="13" r="2.5" fill="#8B7355" opacity="0.7" />
            <text x="22" y="17" className="dash-title-l">Admin</text>
            <text x="230" y="17" textAnchor="end" className="live-dot-l">● live</text>

            {/* Pipeline chart — the analytics gap, filled */}
            <g transform="translate(12, 38)">
              <text x="0" y="10" className="dash-module-label">Pipeline analytics</text>
              {[60, 78, 55, 92, 70, 88].map((h, i) => (
                <rect key={i} x={i * 36} y={60 - h * 0.5} width="28" height={h * 0.5}
                  fill="#8B7355" opacity={0.55 + i * 0.05} />
              ))}
              <line x1="0" y1="60" x2="216" y2="60" stroke="#5C5C5C" strokeWidth="0.5" />
            </g>

            {/* Smart lead card — the search gap, filled */}
            <g transform="translate(12, 125)">
              <text x="0" y="10" className="dash-module-label">Smart lead search</text>
              <rect x="0" y="16" width="226" height="48" fill="#FAF6EE" stroke="#D4D0C8" strokeWidth="0.6" rx="4" />
              <text x="8" y="30" className="card-name">Aarav Sharma</text>
              <rect x="8" y="36" width="50" height="8" fill="#8B7355" rx="2" />
              <text x="11" y="43" className="card-stage">APPLICATION</text>
              <text x="65" y="43" className="card-meta">· follow-up: tomorrow</text>
              <text x="8" y="57" className="card-meta-sub">last touch 3d ago · Coventry · B.Eng CS</text>
            </g>

            {/* Gamification — the engagement gap, filled */}
            <g transform="translate(12, 200)">
              <text x="0" y="10" className="dash-module-label">Usage tracker</text>
              {[
                { name: 'Priya', pts: 420, w: 160 },
                { name: 'Rohan', pts: 380, w: 144 },
                { name: 'You', pts: 310, w: 118 },
              ].map((u, i) => (
                <g key={u.name} transform={`translate(0, ${i * 24 + 20})`}>
                  <text x="0" y="9" className="card-name-sm">{i + 1}. {u.name}</text>
                  <rect x="48" y="3" width="180" height="6" fill="#ECEAE6" rx="3" />
                  <rect x="48" y="3" width={u.w} height="6" fill="#8B7355" rx="3" />
                  <text x="232" y="9" textAnchor="end" className="card-meta-sub">{u.pts} pts</text>
                </g>
              ))}
            </g>
          </g>
          <text x="145" y="400" textAnchor="middle" className="panel-sub-l">
            where the data becomes useful
          </text>
        </g>

        <style>{`
          .panel-label-l {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 14px;
            font-style: italic;
            fill: #1A1A1A;
          }
          .panel-sub-l {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 11px;
            font-style: italic;
            fill: #5C5C5C;
          }
          .connector-label-l {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 10px;
            font-style: italic;
            fill: #5C5C5C;
          }
          .mis-title {
            font-family: "DM Sans", sans-serif;
            font-size: 9px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .mis-field-label {
            font-family: "DM Sans", sans-serif;
            font-size: 7px;
            fill: #5C5C5C;
          }
          .gap-title {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 13px;
            font-weight: 500;
            fill: #8B7355;
          }
          .gap-desc {
            font-family: "DM Sans", sans-serif;
            font-size: 9px;
            fill: #5C5C5C;
          }
          .dash-title-l {
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .live-dot-l {
            font-family: "DM Sans", sans-serif;
            font-size: 8px;
            fill: #8B7355;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .dash-module-label {
            font-family: "DM Sans", sans-serif;
            font-size: 8px;
            fill: #5C5C5C;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 500;
          }
          .card-name {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 11px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .card-name-sm {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 10px;
            fill: #1A1A1A;
          }
          .card-stage {
            font-family: "DM Sans", sans-serif;
            font-size: 6px;
            fill: #FFFFFF;
            font-weight: 600;
            letter-spacing: 0.05em;
          }
          .card-meta {
            font-family: "DM Sans", sans-serif;
            font-size: 8px;
            fill: #5C5C5C;
          }
          .card-meta-sub {
            font-family: "DM Sans", sans-serif;
            font-size: 7.5px;
            fill: #8B7355;
          }
        `}</style>
      </svg>

      <figcaption>
        The vendor MIS holds the data. My admin dashboard turns it into something leadership can use.
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
          max-height: 480px;
        }
        figcaption {
          margin-top: 1rem;
          text-align: center;
          font-family: 'Newsreader', Georgia, serif;
          font-style: italic;
          font-size: 0.9rem;
          color: #5C5C5C;
        }
      `}</style>
    </figure>
  );
}
