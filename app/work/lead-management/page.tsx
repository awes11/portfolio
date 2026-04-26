import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Magnetic } from '@/components/Magnetic';
import { LeadDashboardDiagram } from '@/components/LeadDashboardDiagram';

export const metadata: Metadata = {
  title: 'Lead Management Analytics Dashboard',
  description:
    'A custom admin-scoped analytics layer sitting alongside a vendor-built MIS — six modules so far, each one closing a specific reporting or visibility gap leadership had been working around manually.',
  openGraph: {
    title: 'Lead Management Dashboard — a case study',
    description:
      'An admin-scoped analytics layer that grows with the gaps. Flask + PostgreSQL, six modules, designed to keep extending.',
  },
};

const CASE_NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
];

export default function LeadManagementPage() {
  return (
    <>
      <Navigation items={CASE_NAV} />

      <main className="case-study-page">
        {/* ───────── HERO ───────── */}
        <header className="cs-hero">
          <div className="container-reading">
            <Link href="/#work" className="back-link">← Selected Work</Link>

            <p className="section-label" style={{ marginTop: '2.5rem' }}>
              Case Study · Education · 2025
            </p>

            <h1 className="cs-title">
              Filling the Gaps — a Custom Admin Dashboard
            </h1>

            <p className="cs-hook">
              An admin-scoped analytics layer that grows with the gaps —
              <em>built once, extended whenever leadership hits a new wall</em>.
            </p>

            <div className="cs-meta">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>Operations Officer &amp; Core Data Analyst — sole developer of the admin dashboard</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>~10 weeks for the first six modules · ongoing</dd>
                </div>
                <div>
                  <dt>Audience</dt>
                  <dd>Admin-scoped — leadership, branch heads, operations. Counsellors do not access it.</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>Flask · PostgreSQL (CTEs, ROW_NUMBER, timestamptz) · Vanilla JS (IIFE modules) · Microsoft SSO · SheetJS · Windows Server + IIS + Waitress + PM2</dd>
                </div>
              </dl>
            </div>
          </div>
        </header>

        {/* ───────── THE PROBLEM ───────── */}
        <section className="cs-section">
          <div className="container-reading">
            <div className="cs-section-header">
              <span className="cs-step">01</span>
              <h2>The problem</h2>
            </div>

            <div className="prose-editorial">
              <p>
                The consultancy runs on a vendor-built MIS. It handles what every MIS handles —
                data entry, student records, stage tracking. The counsellor-facing side works.
              </p>
              <p>
                The admin side didn&apos;t. Leadership kept hitting the same kind of wall:
                they&apos;d ask a question the vendor MIS couldn&apos;t answer, and the answer
                would come back via a manual exercise. &ldquo;How are this user&apos;s leads
                distributed across application stages?&rdquo; — pulled from the database by
                hand. &ldquo;Who&apos;s actually been active this month?&rdquo; — counted off
                spreadsheets. &ldquo;Which telecaller deserves credit for this lead&apos;s first
                visit?&rdquo; — argued about in meetings.
              </p>
              <p>
                Each one was a real operational question. Each one had a real database underneath
                that could answer it. The vendor MIS just didn&apos;t expose those queries — and
                getting them added to the vendor&apos;s roadmap would have taken months per gap,
                if it happened at all.
              </p>
              <p>
                Replacing the vendor MIS would have been the wrong answer. It does its
                data-entry job, the team has learned it, and the cost of switching would dwarf
                the cost of the gaps. The right answer was to build a separate admin-scoped
                layer that reads from the same database and answers leadership&apos;s questions
                directly — and keeps growing as new questions surface.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── THE INSIGHT ───────── */}
        <section className="cs-section cs-section-alt">
          <div className="container-reading">
            <div className="cs-section-header">
              <span className="cs-step">02</span>
              <h2>The insight</h2>
            </div>

            <div className="prose-editorial">
              <p>
                The vendor MIS is good at what it does. I don&apos;t need to beat it at its own
                game. I need to build what it doesn&apos;t do, scoped tightly to the people who
                actually need it — admin and leadership.
              </p>

              <blockquote className="pull-insight">
                &ldquo;Sometimes the best solution isn&apos;t replacing the existing system.
                It&apos;s building exactly what it&apos;s missing — and leaving room to keep
                building.&rdquo;
              </blockquote>

              <p>
                A separate Flask + PostgreSQL dashboard, behind Microsoft SSO, reading from the
                same database the vendor MIS writes to. Each module is a small focused tool that
                answers one operational question leadership had been asking. Six modules so far.
                More will come — every time leadership hits a new wall the vendor system
                can&apos;t answer, that&apos;s a candidate for module number seven.
              </p>
              <p>
                Two systems, one source of truth. The vendor MIS stays the system of record.
                Mine is the admin&apos;s lens on it.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── THE APPROACH + DIAGRAM ───────── */}
        <section className="cs-section">
          <div className="container-reading">
            <div className="cs-section-header">
              <span className="cs-step">03</span>
              <h2>The approach</h2>
            </div>

            <div className="prose-editorial">
              <p>
                A Flask + PostgreSQL dashboard sitting alongside the vendor MIS, reading from
                the same database. Microsoft SSO for auth. Each module is a self-contained
                vanilla-JS IIFE with its own CSS prefix, so modules can be added without
                touching what already works.
              </p>
            </div>

            <LeadDashboardDiagram />

            <div className="prose-editorial">
              <p>
                Six modules so far, each solving a specific gap leadership had been working
                around manually:
              </p>
              <p>
                <strong>User Lead Stages.</strong> Pick a branch, role, and user; pick a country
                template; see how that staff member&apos;s leads are distributed across the
                application checklist stages. Replaced the &ldquo;can you pull a list of where
                so-and-so&apos;s leads are sitting&rdquo; ad-hoc database query that used to
                land in operations&apos; lap.
              </p>
              <p>
                <strong>Lead Search.</strong> Look up any lead by name, phone, or ID. Returns up
                to 30 ranked results with assigned counsellor, application count, and a full
                profile view — education, test scores, checklist progress, remarks, activity
                history. Replaces the form-wall lookup the vendor MIS forced admins through when
                they needed to investigate a single lead.
              </p>
              <p>
                <strong>Usage Tracker.</strong> Scores staff activity over any date range using
                weighted points — remarks (by character count, so substance counts more than
                clicks), documents uploaded, follow-ups, leads created. Filterable by branch
                and role, searchable, sortable. Gives leadership an honest read on who&apos;s
                actually engaging with the system. Not visible to counsellors — it&apos;s a
                management tool, not a public scoreboard.
              </p>
              <p>
                <strong>User Remarks.</strong> Audits a specific user&apos;s remarks across
                leads, split between assigned and unassigned. Percentage bar visualisation, CSV
                export. Replaces the &ldquo;is this person actually doing the work or just
                logging in&rdquo; question that used to require pulling raw database extracts.
              </p>
              <p>
                <strong>Telecaller Visits.</strong> The hard one. Awards first-visit credit to
                whichever telecaller was last assigned to a lead before the visit happened. Uses
                a PostgreSQL CTE with <code>ROW_NUMBER</code> to find the first-ever visit per
                lead and walk the assignment history backwards. Replaces meetings where people
                argued about who deserved credit.
              </p>
              <p>
                <strong>Counsellor Referrals.</strong> Tracks handoffs — a counsellor earns a
                &ldquo;sent&rdquo; point when another counsellor is assigned to their lead after
                them. Uses a CTE that unions the assigned-user and follower tables. Cascading
                branch → counsellor dropdowns, expandable leaderboard, sent-leads panel,
                multi-sheet Excel export. Replaces the previously invisible reality that
                referrals were happening but nobody could measure them.
              </p>
              <p>
                The whole thing runs behind Microsoft SSO. Admin and leadership see everything;
                role gating keeps the dashboard scoped to people who should have it. Deployed
                on the same Windows Server stack as the other two production systems — IIS
                reverse-proxy to Waitress, process-managed by PM2, Cloudflare Tunnel for public
                access.
              </p>
              <p>
                <em>And it&apos;s designed to keep growing.</em> Every module is built as a
                self-contained JS module with a unique CSS prefix (<code>ul-</code>, <code>ls-</code>,{' '}
                <code>ut-</code>, <code>ur-</code>, <code>tv-</code>, <code>cr-</code>) so new
                modules drop in without touching existing code. Every time leadership hits a new
                wall the vendor MIS can&apos;t answer, that&apos;s the brief for module seven.
              </p>
            </div>
          </div>
        </section>

        {/* ───────── WHAT IT CHANGED ───────── */}
        <section className="cs-section cs-section-alt">
          <div className="container-reading">
            <div className="cs-section-header">
              <span className="cs-step">04</span>
              <h2>What it changed</h2>
            </div>

            <div className="prose-editorial">
              <p>
                Operational questions that used to land in someone&apos;s lap as ad-hoc work
                started getting answered by leadership themselves, on demand. The
                &ldquo;can-you-pull-me-a-list&rdquo; queue shrank to almost nothing.
              </p>
              <p>
                The Usage Tracker changed how leadership sees the team. Engagement was always
                measurable in principle, but never visible in practice — now it is. People
                who&apos;d been quietly doing the work without recognition got noticed.
                Conversely, gaps in coverage that used to hide in the data became obvious.
              </p>
              <p>
                The Telecaller Visits and Counsellor Referrals modules turned out to settle long-running
                disputes about credit. Both used to be argued about in meetings. Both are now
                attributable from the database directly, with the logic visible and the export
                shareable. The arguments stopped.
              </p>
              <p>
                And the dashboard kept growing. It started as four modules. It&apos;s six now.
                The framework — modular JS, CSS-prefixed scopes, PostgreSQL views — means each
                new module ships in days, not weeks. The pattern works.
              </p>
            </div>

            <div className="outcomes-grid">
              <div className="outcome">
                <div className="outcome-number">6</div>
                <div className="outcome-label">modules shipped, more on the way</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">admin-scoped</div>
                <div className="outcome-label">behind Microsoft SSO, leadership-only</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">days, not weeks</div>
                <div className="outcome-label">to ship a new module on this framework</div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── UNDER THE HOOD ───────── */}
        <section className="cs-section">
          <div className="container-reading">
            <div className="cs-section-header">
              <span className="cs-step">05</span>
              <h2>Under the hood</h2>
            </div>

            <div className="tech-notes">
              <dl>
                <dt>Backend</dt>
                <dd>Python + Flask. REST API against the shared PostgreSQL database that the
                vendor MIS writes to. Heavy use of CTEs and window functions (<code>ROW_NUMBER</code>{' '}
                in particular, for the Telecaller Visits attribution logic) — faster and cleaner
                than aggregating in Python.</dd>

                <dt>Database</dt>
                <dd>PostgreSQL. Proper use of timestamptz for everything time-related (Kathmandu
                is UTC+5:45, not a time zone that tolerates naive datetimes). Read-only access
                from the dashboard — only the vendor MIS writes to the core tables.</dd>

                <dt>Frontend architecture</dt>
                <dd>Vanilla JavaScript, no framework. Each module is a self-contained IIFE with
                a unique CSS prefix (<code>ul-</code>, <code>ls-</code>, <code>ut-</code>,{' '}
                <code>ur-</code>, <code>tv-</code>, <code>cr-</code>) so styles and state can&apos;t
                leak between modules. Adding a new module means adding a new file and a new
                prefix — no touching existing code.</dd>

                <dt>Auth &amp; scope</dt>
                <dd>Microsoft SSO via MSAL — the whole org was already on Microsoft 365.
                Admin-scoped: leadership and operations roles only. Counsellors do not have
                access. The dashboard is a management lens, not a counsellor tool.</dd>

                <dt>Exports</dt>
                <dd>SheetJS for Excel/CSV exports across modules. The Counsellor Referrals
                module produces a multi-sheet workbook (summary + per-counsellor breakdown).</dd>

                <dt>Deployment</dt>
                <dd>Windows Server 2019 with IIS reverse-proxy to Waitress WSGI, process-managed
                by PM2. Cloudflare Tunnel for public egress. Same stack as IR Connect and
                Student Analytics.</dd>

                <dt>What I&apos;d do differently</dt>
                <dd>The first module used inline <code>style</code> attributes for layout instead
                of CSS classes. By module four I&apos;d settled on the prefixed-class pattern
                and had to retrofit. Should have started with the convention from day one.</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* ───────── NEXT / PREV ───────── */}
        <section className="cs-nav-section">
          <div className="container-reading">
            <div className="cs-nav-grid">
              <Magnetic strength={6} tilt>
                <Link href="/work/student-analytics" className="cs-nav-card prev">
                  <span className="cs-nav-label">← Previous</span>
                  <span className="cs-nav-title">Student Analytics</span>
                  <span className="cs-nav-blurb">Live analytics without taking spreadsheets away</span>
                </Link>
              </Magnetic>
              <Magnetic strength={6} tilt>
                <Link href="/work/ir-connect" className="cs-nav-card next">
                  <span className="cs-nav-label">Next →</span>
                  <span className="cs-nav-title">IR Connect</span>
                  <span className="cs-nav-blurb">A system built around a role</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </section>

        <footer>
          <div className="container-reading">
            <p>© 2026 Aadarsh Kumar Rauniyar · Kathmandu, Nepal</p>
          </div>
        </footer>
      </main>

      {/* ═══════════════ STYLES (shared shape with other case studies) ═══════════════ */}
      <style>{`
        .case-study-page { padding-top: 100px; min-height: 100vh; }

        .back-link {
          display: inline-block;
          font-size: 0.85rem;
          color: #5C5C5C;
          text-decoration: none;
          padding-bottom: 2px;
          border-bottom: 1px solid transparent;
          transition: all 0.2s ease;
        }
        .back-link:hover {
          color: #8B7355;
          border-bottom-color: #8B7355;
          opacity: 1;
        }

        .cs-hero {
          padding: 4rem 0 6rem;
          border-bottom: 1px solid #D4D0C8;
        }
        .cs-title {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 1rem 0 1.5rem;
          color: #1A1A1A;
        }
        .cs-hook {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(1.2rem, 2.4vw, 1.6rem);
          line-height: 1.45;
          color: #5C5C5C;
          font-style: italic;
          max-width: 58ch;
          margin-bottom: 3.5rem;
        }
        .cs-hook em {
          color: #8B7355;
          font-style: italic;
          margin-right: 0.15em;
        }

        .cs-meta {
          background: #ECEAE6;
          border: 1px solid #D4D0C8;
          border-radius: 8px;
          padding: 2rem;
          max-width: 760px;
        }
        .cs-meta dl { display: grid; gap: 1.25rem; margin: 0; }
        .cs-meta dt {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #8B7355;
          margin-bottom: 0.35rem;
          font-weight: 500;
        }
        .cs-meta dd { font-size: 0.95rem; color: #1A1A1A; margin: 0; }

        .cs-section { padding: 5rem 0; }
        .cs-section-alt {
          background: #ECEAE6;
          border-top: 1px solid #D4D0C8;
          border-bottom: 1px solid #D4D0C8;
        }

        .cs-section-header {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .cs-step {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 1.3rem;
          color: #8B7355;
          opacity: 0.55;
          font-style: italic;
        }
        .cs-section-header h2 {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #1A1A1A;
        }

        code {
          font-family: 'Courier New', monospace;
          font-size: 0.88em;
          color: #8B7355;
          background: #F5F4F1;
          padding: 0.1em 0.35em;
          border-radius: 3px;
          border: 1px solid #D4D0C8;
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }
        @media (max-width: 700px) {
          .outcomes-grid { grid-template-columns: 1fr; }
        }
        .outcome {
          background: #F5F4F1;
          border: 1px solid #D4D0C8;
          border-radius: 8px;
          padding: 2rem;
          text-align: center;
        }
        .outcome-number {
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: #8B7355;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          line-height: 1.1;
        }
        .outcome-label {
          font-size: 0.88rem;
          color: #5C5C5C;
          line-height: 1.4;
        }

        .cs-nav-section {
          padding: 4rem 0 6rem;
          border-top: 1px solid #D4D0C8;
        }
        .cs-nav-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        @media (max-width: 700px) {
          .cs-nav-grid { grid-template-columns: 1fr; }
        }
        .cs-nav-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 2rem;
          background: #ECEAE6;
          border: 1px solid #D4D0C8;
          border-radius: 8px;
          text-decoration: none;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .cs-nav-card.next { text-align: right; align-items: flex-end; }
        .cs-nav-card:hover { border-color: #8B7355; background: #E8E4DD; }
        .cs-nav-label {
          font-size: 0.75rem;
          color: #8B7355;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .cs-nav-title {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 1.2rem;
          color: #1A1A1A;
          letter-spacing: -0.01em;
        }
        .cs-nav-blurb { font-size: 0.85rem; color: #5C5C5C; }

        footer {
          padding: 2rem 0;
          border-top: 1px solid #D4D0C8;
        }
        footer p { font-size: 0.8rem; color: #5C5C5C; }
      `}</style>
    </>
  );
}