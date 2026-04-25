import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Magnetic } from '@/components/Magnetic';
import { LeadDashboardDiagram } from '@/components/LeadDashboardDiagram';

export const metadata: Metadata = {
  title: 'Lead Management Analytics Dashboard',
  description:
    'An admin dashboard built to complement a vendor MIS — filling the analytics, search, and engagement gaps without replacing what already worked.',
  openGraph: {
    title: 'Lead Management Dashboard — a case study',
    description:
      'Filling the gaps in a vendor-built MIS. Flask + PostgreSQL, six modules, zero manual compile cycles.',
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
              Sometimes the best solution isn&apos;t replacing the existing system.
              It&apos;s <em>filling the gaps</em> with exactly what&apos;s missing.
            </p>

            <div className="cs-meta">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>Operations Officer &amp; Core Data Analyst — sole developer of the admin dashboard</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>~10 weeks, shipped Q2 2025</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>Flask · PostgreSQL · JavaScript · Microsoft SSO · Chart.js · Windows Server + IIS + Waitress + PM2</dd>
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
                The consultancy already had an MIS. It was custom-built by an external vendor.
                It handled the thing every MIS handles — data entry. Counsellors logged student
                leads, marked stages, updated follow-up dates. That part worked.
              </p>
              <p>
                The rest didn&apos;t. There were three gaps the vendor system wasn&apos;t built to close.
              </p>
              <p>
                First, <strong>no pipeline analytics</strong>. If leadership wanted to know how
                conversions looked this week versus last week, the answer came from 50+
                counsellors and officers compiling reports by hand every Monday, branch heads
                consolidating those, and senior management reading the final numbers on Tuesday
                — already stale.
              </p>
              <p>
                Second, <strong>lead search was a form wall</strong>. Finding a student in the
                vendor MIS meant scanning through a 40-field record layout to spot the three
                things that actually matter in the moment: name, stage, next follow-up.
                Counsellors had adapted by keeping their own side-spreadsheets. Which defeats
                the point of having an MIS.
              </p>
              <p>
                Third, <strong>no incentive to use the system well</strong>. Data entry felt
                like a tax. The counsellors who were diligent about it got nothing for their
                effort. The ones who cut corners faced no consequences. Adoption was uneven,
                and the data quality suffered.
              </p>
              <p>
                The obvious solution was to replace the vendor system with something better. It
                was the wrong solution — the vendor system was already doing the data-entry job
                competently, the team had learned it, and replacing it would have been a large
                disruption for three fixable gaps.
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
                game. I need to build what it doesn&apos;t do — on top of the data it already
                collects.
              </p>

              <blockquote className="pull-insight">
                &ldquo;Sometimes the best solutions aren&apos;t replacing existing systems.
                They&apos;re filling the gaps with exactly what&apos;s needed.&rdquo;
              </blockquote>

              <p>
                A companion admin dashboard, reading from the same database, scoped tightly to
                the three gaps. Analytics the vendor doesn&apos;t produce. A search experience
                that prioritises what counsellors actually look at. A gamified usage tracker
                that rewards the people doing it right.
              </p>
              <p>
                Two systems, one source of truth. The vendor MIS stays the system of record.
                Mine becomes the system of use.
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
                the same database. Six modules, Microsoft SSO for auth (everyone was already on
                Microsoft 365), and three headline features that mapped directly to the three
                gaps.
              </p>
            </div>

            <LeadDashboardDiagram />

            <div className="prose-editorial">
              <p>
                <strong>Pipeline analytics.</strong> Real-time conversion rates by source,
                counsellor, course, branch, week. What used to take fifty people a Monday
                morning to compile now renders in half a second off a PostgreSQL query. The
                Monday compile cycle is gone. Leadership looks at current numbers, not
                last-week&apos;s numbers.
              </p>
              <p>
                <strong>Smart lead search — card-style, essentials first.</strong> Instead of a
                40-field record, each lead shows as a small card: name, current stage, next
                follow-up, last touch, assigned counsellor, institution, course. The things
                counsellors actually need to see in the moment. Full record available one click
                away for when they need it. Search is fuzzy, ranked, fast.
              </p>
              <p>
                <strong>Gamified usage tracker.</strong> A points-based system that tracks MIS
                hygiene — timely follow-ups, complete records, accurate stage transitions. Top
                contributors show up on a leaderboard. It sounds small. It changed MIS adoption
                overnight. Turns out people want to be recognised for doing the boring part
                right; nobody had ever given them a way to be.
              </p>
              <p>
                The dashboard runs behind Microsoft SSO with role-based access. Admin sees
                everything. Branch heads see their branch. Counsellors see their own pipeline
                and their own position on the leaderboard. Deployed to the same Windows Server
                stack as the other two production systems — IIS reverse-proxy to Waitress,
                process-managed by PM2, Cloudflare Tunnel for public access.
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
                The Monday reporting drill stopped existing. Fifty-plus people got their Monday
                mornings back. Branch heads stopped aggregating spreadsheets. Senior management
                started the week looking at live numbers instead of week-old ones.
              </p>
              <p>
                Counsellors stopped keeping side-spreadsheets. The smart search made the vendor
                MIS useful in the moment instead of just useful for compliance. Data quality
                improved because now every field mattered — the dashboard exposed missing data
                in ways the vendor system never did.
              </p>
              <p>
                The gamification was the surprise. I expected it to work a little. It worked
                more than a little. Once people could see their ranking, MIS hygiene became
                competitive. Logged follow-ups jumped. Stage transitions got updated promptly.
                The data got cleaner because the people closest to it finally had a reason to
                care.
              </p>
            </div>

            <div className="outcomes-grid">
              <div className="outcome">
                <div className="outcome-number">6</div>
                <div className="outcome-label">modules complementing the vendor MIS</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">50+</div>
                <div className="outcome-label">people off the Monday compile cycle</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">real-time</div>
                <div className="outcome-label">replaces weekly, stale reporting</div>
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
                vendor MIS also writes to. Heavy use of CTEs and window functions for the
                analytics queries — faster and cleaner than aggregating in Python.</dd>

                <dt>Database</dt>
                <dd>PostgreSQL. Proper use of timestamptz for everything time-related (Kathmandu
                is UTC+5:45, not a time zone that tolerates naive datetimes). Read-only access
                from the dashboard side — only the vendor system writes to the core tables.</dd>

                <dt>Frontend</dt>
                <dd>Vanilla JavaScript in an IIFE-modular pattern, Chart.js for the analytics
                views. No framework — the dashboard renders server-side with Flask templates and
                progressively enhances on the client. Simple, fast, reliable.</dd>

                <dt>Auth</dt>
                <dd>Microsoft SSO via MSAL. The whole org was already on Microsoft 365, so SSO
                was the natural choice. Three-tier RBAC: admin, branch head, counsellor.</dd>

                <dt>Gamification</dt>
                <dd>Point logic calculated nightly from MIS activity — complete records, timely
                follow-ups, accurate stage transitions. Leaderboard resets weekly and monthly.
                Per-user view shows rank, points, and what contributed.</dd>

                <dt>Deployment</dt>
                <dd>Windows Server 2019 with IIS reverse-proxy to Waitress WSGI, process-managed
                by PM2. Cloudflare Tunnel for public egress. Same stack as IR Connect and
                Student Analytics — cost-efficient, zero cold-start latency.</dd>

                <dt>What I&apos;d do differently</dt>
                <dd>The gamification launched without an opt-out. A few counsellors found the
                leaderboard stressful rather than motivating. I added a &ldquo;hide my rank&rdquo;
                toggle later, but it should have shipped with one from day one.</dd>
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
        .cs-hook em { color: #8B7355; font-style: italic; margin-right: 0.15em; }

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
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          color: #8B7355;
          font-weight: 400;
          letter-spacing: -0.02em;
          margin-bottom: 0.5rem;
          line-height: 1;
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
