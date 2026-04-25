import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Magnetic } from '@/components/Magnetic';
import { StudentAnalyticsDiagram } from '@/components/StudentAnalyticsDiagram';

export const metadata: Metadata = {
  title: 'Student Analytics Dashboard',
  description:
    'How I built live analytics across two branches at an education company — without making anyone give up their spreadsheet. Flask, pandas, MSAL, and a per-user mapping layer.',
  openGraph: {
    title: 'Student Analytics Dashboard — a case study',
    description:
      'Live analytics across two branches, without making anyone change their spreadsheet.',
  },
};

// Case-study-specific nav items: bring the user back to the home sections
const CASE_NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
];

export default function StudentAnalyticsPage() {
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
              Student Analytics Dashboard
            </h1>

            <p className="cs-hook">
              How I built <em>live analytics</em> across two branches without taking anyone&apos;s
              spreadsheet away.
            </p>

            <div className="cs-meta">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>Sole developer — database, backend, frontend, auth, deployment</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>~8 weeks, shipped Q2 2025</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>Python / Flask · MSAL + PyJWT · gspread · pandas · IIS + Waitress + PM2</dd>
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
                A multi-branch education consultancy. Counsellors, admission officers,
                frontdesk staff — each of them kept their own Google Sheet, in whatever shape
                felt natural. One person called the column <code>student name</code>. Another
                used <code>Name</code>. A third had <code>FULL NAME</code>. Dates were a mess.
                Status values were a mess. Every sheet was its own universe.
              </p>
              <p>
                Leadership wanted unified reporting. Conversion rates, counsellor performance,
                frontdesk KPIs — the usual. And they wanted it live, not on a Monday-morning
                compilation cycle.
              </p>
              <p>
                The obvious answer was to migrate everyone onto a CRM with one clean schema.
                Management had tried. It failed — predictably. People had spent months building
                their sheets. They were fast on them. They had their own colour codes, their own
                notes columns, their own little habits nobody else understood. Asking them to
                abandon it all in favour of a standardised form felt, to them, like being asked
                to work with one hand tied behind their back.
              </p>
              <p>
                So the sheets stayed. And the reporting stayed broken.
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
                I sat with the counsellors for a week before writing a line of code. Watching
                what they did, not what they said they did. Two things stood out.
              </p>
              <p>
                First, nobody was actually using their sheets as free-form documents. Every
                sheet had a fixed structure the person had settled on months earlier, and they
                weren&apos;t changing it. The chaos across sheets masked a lot of internal order
                inside each one.
              </p>
              <p>
                Second, the <em>formats didn&apos;t drift</em>. Once someone had decided their column
                was called <code>stat.</code>, it stayed <code>stat.</code> for good. Changing a
                working spreadsheet is expensive for the person doing the work, so they almost
                never do it.
              </p>

              <blockquote className="pull-insight">
                &ldquo;If the formats don&apos;t change, I don&apos;t need to standardise them upstream.
                I just need to map them once — in code — and read them forever.&rdquo;
              </blockquote>

              <p>
                That was the pivot. Stop trying to change behaviour. Build <em>around</em> it.
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
                A Python service that reads every counsellor&apos;s Google Sheet directly over the
                Sheets API, applies a per-sheet mapping (source column → standard field), joins
                everything into one unified pandas DataFrame server-side, and serves reports off
                that unified dataset. A dashboard on top, with Microsoft SSO so people log in
                with their existing work accounts.
              </p>
            </div>

            <StudentAnalyticsDiagram />

            <div className="prose-editorial">
              <p>
                The mapping layer is the whole trick. Each user&apos;s sheet gets its own mapping
                config — a small YAML-like structure that says &ldquo;this sheet&apos;s <code>stat.</code>
                column means <code>stage</code>, use these regex rules to normalise the values,
                treat blank cells as <code>unassigned</code>&rdquo;. Writing the mapping takes fifteen
                minutes per new user. After that, their sheet is part of the unified dataset and
                they never know.
              </p>
              <p>
                The dashboard runs on Flask, secured behind Azure AD / MSAL SSO with three-tier
                role-based access (admin / branch head / counsellor). A full-dataset caching
                layer sits between the Sheets API and the report queries — this matters because
                drill-downs on bar charts were hammering the Sheets API with redundant reads until
                I added it. Quota issues vanished. Response times dropped.
              </p>
              <p>
                The whole thing runs on a self-hosted Windows Server 2019 stack — IIS reverse-proxy
                to a Waitress WSGI server, kept alive with PM2. Cloudflare Tunnel handles public
                access. No managed PaaS, no cold starts.
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
                Counsellors kept their spreadsheets. That was the non-negotiable and it stayed
                true. Nobody had to relearn a new system, nobody had to re-enter their pipeline
                into a new UI, nobody had their colour codes taken away.
              </p>
              <p>
                Meanwhile, leadership got a single live dashboard — conversion by source, by
                branch, by counsellor. Frontdesk throughput. Admission stage distribution. All of
                it pulled from the same unified dataset, all of it refreshable at any moment.
              </p>
              <p>
                The weekly reporting meeting stopped being a compilation meeting. It became an
                actual discussion meeting. That was the real win.
              </p>
            </div>

            <div className="outcomes-grid">
              <div className="outcome">
                <div className="outcome-number">2</div>
                <div className="outcome-label">branches on live analytics</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">0</div>
                <div className="outcome-label">spreadsheets taken away</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">~15 min</div>
                <div className="outcome-label">to onboard a new sheet</div>
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
                <dd>Python 3.11, Flask, pandas for in-memory joins and aggregations, gspread
                for the Sheets API layer.</dd>

                <dt>Authentication</dt>
                <dd>Azure AD / MSAL with PyJWT token validation. Three-tier RBAC: admin gets
                everything, branch head sees their branch, counsellor sees their own pipeline.</dd>

                <dt>Performance</dt>
                <dd>Full-dataset caching layer invalidated on write. Sheets API quota usage
                dropped sharply once drill-downs stopped triggering redundant reads.</dd>

                <dt>Deployment</dt>
                <dd>Windows Server 2019, IIS reverse-proxy → Waitress WSGI, process-managed by
                PM2. Cloudflare Tunnel for public egress. Same server also hosts IR Connect and
                an existing production app — the migration away from Render + Netlify eliminated
                cold-start latency entirely.</dd>

                <dt>What I&apos;d do differently</dt>
                <dd>Move the mapping configs from files into a small admin UI so branch heads
                could onboard new counsellors without needing me. That&apos;s the v2 I&apos;m scoping now.</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* ───────── NEXT CASE STUDY ───────── */}
        <section className="cs-nav-section">
          <div className="container-reading">
            <div className="cs-nav-grid">
              <Magnetic strength={6} tilt>
                <Link href="/work/ir-connect" className="cs-nav-card prev">
                  <span className="cs-nav-label">← Previous</span>
                  <span className="cs-nav-title">IR Connect</span>
                  <span className="cs-nav-blurb">International Relations MIS</span>
                </Link>
              </Magnetic>
              <Magnetic strength={6} tilt>
                <Link href="/work/lead-management" className="cs-nav-card next">
                  <span className="cs-nav-label">Next →</span>
                  <span className="cs-nav-title">Lead Management</span>
                  <span className="cs-nav-blurb">Analytics Dashboard</span>
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

      {/* ═══════════════ STYLES ═══════════════ */}
      <style>{`
        .case-study-page {
          padding-top: 100px;
          min-height: 100vh;
        }

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

        /* HERO */
        .cs-hero {
          padding: 4rem 0 6rem;
          border-bottom: 1px solid #D4D0C8;
        }
        .cs-title {
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin: 1rem 0 1.5rem;
          color: #1A1A1A;
        }
        .cs-hook {
          font-family: Newsreader, Georgia, serif;
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
          max-width: 700px;
        }
        .cs-meta dl {
          display: grid;
          gap: 1.25rem;
          margin: 0;
        }
        .cs-meta dt {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #8B7355;
          margin-bottom: 0.35rem;
          font-weight: 500;
        }
        .cs-meta dd {
          font-size: 0.95rem;
          color: #1A1A1A;
          margin: 0;
        }

        /* SECTIONS */
        .cs-section {
          padding: 5rem 0;
        }
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
          font-family: Newsreader, Georgia, serif;
          font-size: 1.3rem;
          color: #8B7355;
          opacity: 0.55;
          font-style: italic;
        }
        .cs-section-header h2 {
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 400;
          letter-spacing: -0.02em;
          color: #1A1A1A;
        }

        /* Inline code styling — for column names etc. */
        code {
          font-family: 'Courier New', monospace;
          font-size: 0.88em;
          color: #8B7355;
          background: #F5F4F1;
          padding: 0.1em 0.35em;
          border-radius: 3px;
          border: 1px solid #D4D0C8;
        }
        .cs-section-alt code {
          background: #F5F4F1;
        }

        /* Outcomes grid */
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
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(2rem, 4vw, 2.8rem);
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

        /* Case study navigation */
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
        .cs-nav-card.next {
          text-align: right;
          align-items: flex-end;
        }
        .cs-nav-card:hover {
          border-color: #8B7355;
          background: #E8E4DD;
        }
        .cs-nav-label {
          font-size: 0.75rem;
          color: #8B7355;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }
        .cs-nav-title {
          font-family: Newsreader, Georgia, serif;
          font-size: 1.2rem;
          color: #1A1A1A;
          letter-spacing: -0.01em;
        }
        .cs-nav-blurb {
          font-size: 0.85rem;
          color: #5C5C5C;
        }

        /* FOOTER */
        footer {
          padding: 2rem 0;
          border-top: 1px solid #D4D0C8;
        }
        footer p {
          font-size: 0.8rem;
          color: #5C5C5C;
        }
      `}</style>
    </>
  );
}
