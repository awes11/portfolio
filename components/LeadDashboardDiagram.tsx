'use client';

/**
 * Diagram for the Lead Dashboard case study.
 *
 * Visual thesis: the vendor MIS handles data entry; my admin-scoped
 * dashboard sits alongside it as a separate read layer with one module
 * per operational question leadership wants answered. Six modules so
 * far. More to come.
 *
 * Three sections:
 *   1. Vendor MIS (data entry) — what already existed
 *   2. The data layer — shared PostgreSQL, both systems read it,
 *      only the vendor writes
 *   3. Admin dashboard — six labelled module cards, with a placeholder
 *      seventh "..." card hinting at growth
 */

export function LeadDashboardDiagram() {
  return (
    <figure className="diagram-frame">
      <svg
        viewBox="0 0 1100 520"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Diagram: vendor MIS on the left, shared PostgreSQL in the middle, six admin dashboard modules on the right with a seventh placeholder for future growth"
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
          <marker id="arrow-l-dash" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="7" markerHeight="7" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#8B7355" opacity="0.6" />
          </marker>
        </defs>

        {/* ─────────── PANEL 1: Vendor MIS ─────────── */}
        <g transform="translate(20, 0)">
          <text x="120" y="30" textAnchor="middle" className="panel-label-l">
            Vendor MIS
          </text>
          <text x="120" y="48" textAnchor="middle" className="panel-sub-l">
            data entry · system of record
          </text>

          <g transform="translate(20, 70)" filter="url(#rough-l)">
            <rect width="200" height="380" fill="#FFFFFF" stroke="#8B7355" strokeWidth="1.2" rx="4" />
            <rect x="0" y="0" width="200" height="26" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="0.8" />
            <circle cx="10" cy="13" r="2.5" fill="#C9544D" opacity="0.5" />
            <circle cx="20" cy="13" r="2.5" fill="#E8B547" opacity="0.5" />
            <circle cx="30" cy="13" r="2.5" fill="#7FA882" opacity="0.5" />
            <text x="100" y="17" textAnchor="middle" className="mis-title">Lead entry form</text>

            <g transform="translate(14, 42)">
              {['Student name', 'Phone number', 'Email', 'Source', 'Counsellor', 'Course', 'Institution', 'Stage', 'Notes', 'Follow-up'].map((label, i) => (
                <g key={label} transform={`translate(0, ${i * 30})`}>
                  <text x="0" y="8" className="mis-field-label">{label}</text>
                  <rect x="0" y="12" width="172" height="10" fill="#F5F4F1" stroke="#D4D0C8" strokeWidth="0.5" rx="1" />
                  <rect x="2" y="14" width={30 + (i * 9) % 90} height="6" fill="#B0A090" opacity="0.3" />
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* ─────────── PANEL 2: Shared database ─────────── */}
        <g transform="translate(280, 0)">
          <text x="80" y="30" textAnchor="middle" className="panel-label-l">
            Shared PostgreSQL
          </text>
          <text x="80" y="48" textAnchor="middle" className="panel-sub-l">
            one source of truth
          </text>

          {/* Database cylinder */}
          <g transform="translate(20, 130)">
            <ellipse cx="60" cy="10" rx="60" ry="12" fill="#FAF6EE" stroke="#8B7355" strokeWidth="1.2" />
            <path d="M 0 10 L 0 180 A 60 12 0 0 0 120 180 L 120 10" fill="#FAF6EE" stroke="#8B7355" strokeWidth="1.2" />
            <ellipse cx="60" cy="10" rx="60" ry="12" fill="#FAF6EE" stroke="#8B7355" strokeWidth="1.2" />
            {/* Inner rings to suggest a cylinder */}
            <ellipse cx="60" cy="60" rx="60" ry="12" fill="none" stroke="#D4C8B0" strokeWidth="0.5" />
            <ellipse cx="60" cy="120" rx="60" ry="12" fill="none" stroke="#D4C8B0" strokeWidth="0.5" />
            {/* Labels */}
            <text x="60" y="40" textAnchor="middle" className="db-table-label">leads</text>
            <text x="60" y="100" textAnchor="middle" className="db-table-label">remarks</text>
            <text x="60" y="160" textAnchor="middle" className="db-table-label">visits · followers</text>
          </g>

          {/* Read-only annotation on the dashboard side */}
          <text x="80" y="430" textAnchor="middle" className="panel-sub-l" fill="#8B7355">
            dashboard reads only
          </text>
        </g>

        {/* Arrow: vendor → DB (write) */}
        <g>
          <path d="M 240 230 Q 280 230 305 220" fill="none"
            stroke="#8B7355" strokeWidth="1.4" markerEnd="url(#arrow-l)" />
          <text x="270" y="215" textAnchor="middle" className="connector-label-l">writes</text>
        </g>

        {/* Arrow: DB → dashboard (read) — dashed */}
        <g>
          <path d="M 425 220 Q 470 220 510 210" fill="none"
            stroke="#8B7355" strokeWidth="1.3" strokeDasharray="3 3"
            markerEnd="url(#arrow-l-dash)" opacity="0.7" />
          <path d="M 425 240 Q 470 240 510 250" fill="none"
            stroke="#8B7355" strokeWidth="1.3" strokeDasharray="3 3"
            markerEnd="url(#arrow-l-dash)" opacity="0.7" />
          <text x="470" y="208" textAnchor="middle" className="connector-label-l">reads</text>
        </g>

        {/* ─────────── PANEL 3: Admin dashboard with 6 module cards + 1 placeholder ─────────── */}
        <g transform="translate(530, 0)">
          <text x="280" y="30" textAnchor="middle" className="panel-label-l">
            Admin dashboard
          </text>
          <text x="280" y="48" textAnchor="middle" className="panel-sub-l">
            six modules so far · admin-scoped
          </text>

          {(() => {
            const modules = [
              { code: 'ul-', name: 'User Lead Stages',     desc: 'Lead pipeline by user × stage' },
              { code: 'ls-', name: 'Lead Search',          desc: 'Lookup by name · phone · ID' },
              { code: 'ut-', name: 'Usage Tracker',        desc: 'Weighted activity scoring' },
              { code: 'ur-', name: 'User Remarks',         desc: 'Audit assigned vs unassigned' },
              { code: 'tv-', name: 'Telecaller Visits',    desc: 'First-visit attribution (CTE)' },
              { code: 'cr-', name: 'Counsellor Referrals', desc: 'Handoff tracking · Excel export' },
            ];
            // 4 columns × 2 rows grid; 7th cell is the "+ more" placeholder
            const cols = 4;
            const cardW = 130;
            const cardH = 90;
            const gapX = 10;
            const gapY = 14;
            return (
              <g transform="translate(0, 70)">
                {modules.map((m, i) => {
                  const col = i % cols;
                  const row = Math.floor(i / cols);
                  const x = col * (cardW + gapX);
                  const y = row * (cardH + gapY);
                  return (
                    <g key={m.code} transform={`translate(${x}, ${y})`}>
                      <rect width={cardW} height={cardH} fill="#FFFFFF"
                        stroke="#8B7355" strokeWidth="0.8" rx="4" />
                      {/* Code chip */}
                      <rect x="8" y="8" width="26" height="14" fill="#8B7355" rx="3" />
                      <text x="21" y="18" textAnchor="middle" className="mod-code">{m.code}</text>
                      {/* Name */}
                      <text x="8" y="44" className="mod-name">{m.name}</text>
                      {/* Desc — wraps via tspan */}
                      <text x="8" y="62" className="mod-desc">{m.desc}</text>
                    </g>
                  );
                })}
                {/* Placeholder 7th card */}
                {(() => {
                  const i = 6;
                  const col = i % cols;
                  const row = Math.floor(i / cols);
                  const x = col * (cardW + gapX);
                  const y = row * (cardH + gapY);
                  return (
                    <g transform={`translate(${x}, ${y})`}>
                      <rect width={cardW} height={cardH} fill="transparent"
                        stroke="#8B7355" strokeWidth="0.8" strokeDasharray="4 3" rx="4" opacity="0.6" />
                      <text x={cardW / 2} y={cardH / 2 - 2} textAnchor="middle" className="mod-more-label">
                        + module 7
                      </text>
                      <text x={cardW / 2} y={cardH / 2 + 14} textAnchor="middle" className="mod-more-sub">
                        when the next gap shows up
                      </text>
                    </g>
                  );
                })()}
              </g>
            );
          })()}
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
            font-size: 10.5px;
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
          .db-table-label {
            font-family: 'Courier New', monospace;
            font-size: 10px;
            fill: #8B7355;
            font-weight: 600;
          }
          .mod-code {
            font-family: 'Courier New', monospace;
            font-size: 8px;
            fill: #FFFFFF;
            font-weight: 700;
          }
          .mod-name {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 11px;
            fill: #1A1A1A;
            font-weight: 500;
          }
          .mod-desc {
            font-family: "DM Sans", sans-serif;
            font-size: 8.5px;
            fill: #5C5C5C;
          }
          .mod-more-label {
            font-family: 'Newsreader', Georgia, serif;
            font-size: 11px;
            font-style: italic;
            fill: #8B7355;
          }
          .mod-more-sub {
            font-family: "DM Sans", sans-serif;
            font-size: 8px;
            fill: #8B7355;
            opacity: 0.75;
          }
        `}</style>
      </svg>

      <figcaption>
        The vendor MIS holds the data. The admin dashboard reads it, one focused module at a time.
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
          max-height: 540px;
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