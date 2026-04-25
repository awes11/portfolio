'use client';

/**
 * Diagram for the IR Connect case study.
 *
 * Visual thesis: one tablet-friendly workspace, seven task-shaped tabs.
 * The UI shape IS the insight — officers think in tasks, not tables.
 *
 * Renders a tablet frame containing the 7 named tabs along the top
 * (Dashboard, Universities, Portal, Contracts, Follow-ups, Contacts,
 * Settings) with a preview of the Contracts tab showing a list of active
 * contracts, a small attention badge (the proactive reminder system), and
 * a hint of the compass mascot in the corner.
 */

export function IRConnectDiagram() {
  const TABS = [
    'Dashboard',
    'Universities',
    'Portal',
    'Contracts',
    'Follow-ups',
    'Contacts',
    'Settings',
  ];

  return (
    <figure className="diagram-frame">
      <svg
        viewBox="0 0 1100 560"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram: tablet workspace showing the seven task-oriented tabs of IR Connect"
      >
        <defs>
          <filter id="rough-ir" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="7" />
            <feDisplacementMap in="SourceGraphic" scale="1.3" />
          </filter>
        </defs>

        {/* ── Tablet body (landscape) ── */}
        <g transform="translate(60, 40)">
          {/* Outer tablet frame (dark) */}
          <rect x="0" y="0" width="980" height="480" rx="20" fill="#2D3A4A" />
          {/* Camera dot */}
          <circle cx="490" cy="10" r="3" fill="#1A1F28" />
          <circle cx="490" cy="10" r="1" fill="#4A5568" />

          {/* Inner screen (cream paper bg) */}
          <rect x="18" y="22" width="944" height="436" rx="4" fill="#F5F4F1" filter="url(#rough-ir)" />

          {/* ── Top tab bar ── */}
          <g transform="translate(18, 22)">
            {/* App title + tab bar background */}
            <rect x="0" y="0" width="944" height="44" fill="#FAF6EE" stroke="#D4D0C8" strokeWidth="0.8" />

            {/* App name */}
            <text x="20" y="28" className="ir-app-title">IR Connect</text>

            {/* 7 tab chips */}
            <g transform="translate(140, 10)">
              {TABS.map((tab, i) => {
                const x = i * 112;
                const isActive = tab === 'Contracts';
                return (
                  <g key={tab} transform={`translate(${x}, 0)`}>
                    <rect
                      x="0" y="0" width="100" height="24" rx="12"
                      fill={isActive ? '#8B7355' : 'transparent'}
                      stroke={isActive ? '#8B7355' : '#D4D0C8'}
                      strokeWidth="1"
                    />
                    <text
                      x="50" y="16" textAnchor="middle"
                      className={isActive ? 'ir-tab-active' : 'ir-tab'}
                    >
                      {tab}
                    </text>
                  </g>
                );
              })}
            </g>
          </g>

          {/* ── Main content: Contracts view ── */}
          <g transform="translate(36, 84)">
            {/* Section header */}
            <text x="0" y="16" className="ir-section-title">Active contracts</text>
            <text x="900" y="16" textAnchor="end" className="ir-meta">
              124 total · 8 countries
            </text>
            <line x1="0" y1="26" x2="908" y2="26" stroke="#D4D0C8" strokeWidth="0.8" />

            {/* Attention banner — the proactive reminder system */}
            <g transform="translate(0, 40)">
              <rect width="908" height="44" fill="#F8EBD8" stroke="#D4943A" strokeWidth="1" rx="4" />
              <circle cx="22" cy="22" r="7" fill="#D4943A" />
              <text x="22" y="26" textAnchor="middle" className="ir-badge-num">3</text>
              <text x="42" y="20" className="ir-alert-title">
                3 contracts need attention this week
              </text>
              <text x="42" y="34" className="ir-alert-sub">
                Kingston (expires in 6 days) · Coventry (no contact 90d) · Monash (MoU pending)
              </text>
              <text x="890" y="27" textAnchor="end" className="ir-alert-cta">Review →</text>
            </g>

            {/* Contract rows */}
            <g transform="translate(0, 104)">
              {[
                { uni: 'University of Leeds',        country: 'UK',          expires: '2026-09-14', stat: 'Active',  flag: '🇬🇧' },
                { uni: 'Coventry University',        country: 'UK',          expires: '2026-07-02', stat: 'Active',  flag: '🇬🇧' },
                { uni: 'Monash University',          country: 'Australia',   expires: '2026-12-01', stat: 'Pending', flag: '🇦🇺' },
                { uni: 'University of Waikato',      country: 'New Zealand', expires: '2027-03-22', stat: 'Active',  flag: '🇳🇿' },
                { uni: 'Humber College',             country: 'Canada',      expires: '2026-06-10', stat: 'Expires', flag: '🇨🇦' },
                { uni: 'Asia Pacific University',    country: 'Malaysia',    expires: '2027-01-05', stat: 'Active',  flag: '🇲🇾' },
              ].map((c, i) => (
                <g key={c.uni} transform={`translate(0, ${i * 42})`}>
                  <rect x="0" y="0" width="908" height="36" fill="#FFFFFF" stroke="#ECEAE6" strokeWidth="0.8" rx="3" />

                  {/* University name */}
                  <text x="16" y="16" className="ir-row-uni">{c.uni}</text>
                  <text x="16" y="28" className="ir-row-country">{c.country}</text>

                  {/* Expiry */}
                  <text x="440" y="16" className="ir-row-label">Expires</text>
                  <text x="440" y="28" className="ir-row-val">{c.expires}</text>

                  {/* Status chip */}
                  <rect
                    x="640" y="10" width="64" height="18" rx="9"
                    fill={c.stat === 'Expires' ? '#F8E3E1' : c.stat === 'Pending' ? '#F8EBD8' : '#E8F0E4'}
                  />
                  <text
                    x="672" y="22" textAnchor="middle"
                    className={`ir-status ir-status-${c.stat.toLowerCase()}`}
                  >
                    {c.stat}
                  </text>

                  {/* Action */}
                  <text x="890" y="22" textAnchor="end" className="ir-row-action">Open →</text>
                </g>
              ))}
            </g>
          </g>

          {/* ── Mini compass in the corner (the mascot lives here) ── */}
          <g transform="translate(900, 410)">
            <circle cx="20" cy="20" r="18" fill="#FFFCF5" stroke="#D4943A" strokeWidth="1.5" />
            <polygon points="20,7 17,20 23,20" fill="#C9544D" />
            <polygon points="20,33 17,20 23,20" fill="#A0ADA0" />
            <circle cx="20" cy="20" r="2" fill="#D4943A" />
            <circle cx="14" cy="18" r="1.2" fill="#2D3A4A" />
            <circle cx="26" cy="18" r="1.2" fill="#2D3A4A" />
            <path d="M16,25 Q20,28 24,25" fill="none" stroke="#2D3A4A" strokeWidth="0.8" strokeLinecap="round" />
          </g>
        </g>

        <style>{`
          .ir-app-title {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 14px;
            fill: #1A1A1A;
            font-weight: 500;
            letter-spacing: -0.01em;
          }
          .ir-tab {
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            fill: #5C5C5C;
          }
          .ir-tab-active {
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            fill: #FFFFFF;
            font-weight: 500;
          }
          .ir-section-title {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 13px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .ir-meta {
            font-family: "DM Sans", sans-serif;
            font-size: 9px;
            fill: #5C5C5C;
          }
          .ir-badge-num {
            font-family: "DM Sans", sans-serif;
            font-size: 10px;
            fill: #FFFFFF;
            font-weight: 700;
          }
          .ir-alert-title {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 11px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .ir-alert-sub {
            font-family: "DM Sans", sans-serif;
            font-size: 8.5px;
            fill: #5C5C5C;
          }
          .ir-alert-cta {
            font-family: "DM Sans", sans-serif;
            font-size: 9px;
            fill: #8B7355;
            font-weight: 500;
          }
          .ir-row-uni {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 11px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .ir-row-country {
            font-family: "DM Sans", sans-serif;
            font-size: 8px;
            fill: #8B7355;
            letter-spacing: 0.05em;
          }
          .ir-row-label {
            font-family: "DM Sans", sans-serif;
            font-size: 7.5px;
            fill: #8B7355;
            text-transform: uppercase;
            letter-spacing: 0.08em;
          }
          .ir-row-val {
            font-family: "DM Sans", sans-serif;
            font-size: 9px;
            fill: #5C5C5C;
          }
          .ir-status {
            font-family: "DM Sans", sans-serif;
            font-size: 7.5px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .ir-status-active { fill: #4A7A3E; }
          .ir-status-pending { fill: #B8802F; }
          .ir-status-expires { fill: #A84740; }
          .ir-row-action {
            font-family: "DM Sans", sans-serif;
            font-size: 9px;
            fill: #8B7355;
          }
        `}</style>
      </svg>

      <figcaption>
        Seven tabs. One per task. A small compass in the corner keeps an eye on what needs attention.
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
          max-height: 600px;
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
