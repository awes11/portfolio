import type { Metadata } from 'next';
import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Magnetic } from '@/components/Magnetic';
import { IRConnectDiagram } from '@/components/IRConnectDiagram';
import { CompassMascot } from '@/components/CompassMascot';

export const metadata: Metadata = {
  title: 'IR Connect — International Relations MIS',
  description:
    'A tablet-first MIS built around how IR officers actually work — 100+ university contracts across 8+ countries, seven task-shaped tabs, proactive expiry reminders, and a compass mascot.',
  openGraph: {
    title: 'IR Connect — a case study',
    description:
      'A system designed around a user-centric role. Spreadsheets-and-email to one workspace.',
  },
};

const CASE_NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Contact', href: '/#contact' },
];

export default function IRConnectPage() {
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
              IR Connect — International Relations MIS
            </h1>

            <p className="cs-hook">
              A system built <em>around the role</em> — not around the data.
            </p>

            <div className="cs-meta">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>Sole developer and admin — database, backend, frontend, auth, deployment</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>~12 weeks, shipped Q3 2025</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>React 18 / TypeScript · Node.js / Express / Prisma · PostgreSQL · Google OAuth · Windows Server + IIS + Cloudflare Tunnel</dd>
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
                The International Relations team at The Next manages relationships with 100+
                universities across 8+ countries — contracts, MoUs, commission schedules,
                territory assignments, partnership stages, document trails. Before IR Connect,
                all of it ran on shared spreadsheets and email threads.
              </p>
              <p>
                It worked while the rows were short. Once the data grew, the spreadsheet stopped
                being a system and started being a liability. Columns drifted. Colour codes lost
                their meaning. Every new officer inherited the sheet with no context for what
                anything meant. Documents lived in individual inboxes and personal desktops.
              </p>
              <p>
                The real cost wasn&apos;t the messiness. It was that <em>contract expiries slipped</em>.
                With 100+ contracts in flight, a spreadsheet is a passive thing. It doesn&apos;t
                tell you something needs attention. You have to remember to go look — and when
                something gets overlooked, suddenly a renewal is overdue and the team is
                scrambling to save a partnership the week before it lapses.
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
                I spent time with the IR team before writing anything. The thing I kept hearing
                — without anyone saying it directly — is that IR officers don&apos;t think in
                database tables. They think in <em>tasks</em>.
              </p>
              <p>
                &ldquo;Which contracts are expiring this quarter?&rdquo; &ldquo;Which Sri Lankan
                universities haven&apos;t been contacted in three months?&rdquo; &ldquo;Where&apos;s the
                latest MoU for Coventry?&rdquo; Every question starts from what the person is
                trying to <em>do</em>, not from where the data lives.
              </p>

              <blockquote className="pull-insight">
                &ldquo;Design the interface around the day, not the data model.
                One tab per task, not one tab per table.&rdquo;
              </blockquote>

              <p>
                That reframe changed everything downstream. The data model could stay clean —
                twelve normalised relational tables, foreign keys, proper constraints. But the
                UI sitting on top of it would ignore that structure entirely and organise itself
                around the seven things IR officers actually do each day.
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
                A seven-tab tablet-first workspace. Twelve relational tables underneath. About
                fifty React components on top. Every tab is a task, not a table.
              </p>
            </div>

            <IRConnectDiagram />

            <div className="prose-editorial">
              <p>
                <strong>Dashboard</strong>{' '}opens on what needs attention — this week&apos;s expiring
                contracts, overdue follow-ups, new enquiries. <strong>Universities</strong>{' '}is
                the partnership encyclopedia — country, programs, contacts, tier.{' '}
                <strong>Portal</strong>{' '}handles student-facing submissions and the IR side of
                applications. <strong>Contracts</strong>{' '}is the document-and-lifecycle tab —
                every MoU, commission schedule, and renewal timeline lives here.{' '}
                <strong>Follow-ups</strong>{' '}is a task queue. <strong>Contacts</strong>{' '}is the
                university-side people directory. <strong>Settings</strong>{' '}is where roles,
                territories, and reminder cadences get configured.
              </p>
              <p>
                Tablet-first because IR officers don&apos;t live at a desk. They&apos;re in
                partnership meetings, at recruitment fairs, in video calls with university
                counterparts — and they need to pull up a contract or log a conversation without
                opening a laptop. Layout breakpoints start at tablet widths and scale up
                gracefully on desktop.
              </p>
              <p>
                Contract expiry tracking runs on a cron that checks daily. Contracts at 90 / 60
                / 30 days from expiry surface in the Dashboard&apos;s attention banner and
                generate in-app notifications. Territory tagging lets officers filter by region
                with one tap. Three-tier RBAC separates admin, officer, and viewer. Google OAuth
                because the team was already on Workspace.
              </p>
            </div>

            {/* ── THE COMPASS MASCOT CALLOUT ── */}
            <div className="mascot-callout">
              <div className="mascot-visual">
                <CompassMascot size={200} />
              </div>
              <div className="mascot-text">
                <h3>And a small compass in the corner</h3>
                <p>
                  With 100+ contracts in motion, the system has more to notice than any one
                  person can keep track of. IR Connect has a small compass mascot that lives in
                  the corner of every tab. It reacts to what&apos;s happening — happy when
                  everything&apos;s on track, concerned when contracts need attention, celebratory
                  when a big save goes through. It has expressions, it tracks the cursor, it
                  speaks up when something&apos;s overdue.
                </p>
                <p>
                  It started as a joke. It&apos;s the thing people comment on first.
                </p>
                <p className="mascot-note">
                  Built in pure SVG + CSS animations. Five mood states, cursor-tracking pupils
                  and needle, time-of-day accessories, idle behaviour, and proactive tips about
                  items that need attention.
                </p>
              </div>
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
                The headline result: <em>nothing gets overlooked anymore</em>. The
                attention-banner system means contracts that need action surface days before
                they&apos;re urgent — not the week they&apos;re about to lapse. The
                week-before-expiry scramble is gone. Officers notice things in order of
                importance instead of in order of who shouted last.
              </p>
              <p>
                New officers onboard in hours, not weeks. The UI teaches them what IR work
                actually consists of — seven task shapes — rather than dropping them into a
                blank spreadsheet and hoping they figure out which column means what.
              </p>
              <p>
                The whole history of every partnership — contracts, contacts, conversations,
                documents — lives in one place and can be pulled up on a tablet during a
                meeting. The IR team stopped being the custodians of a fragile spreadsheet and
                started being the owners of a system they trust.
              </p>
            </div>

            <div className="outcomes-grid">
              <div className="outcome">
                <div className="outcome-number">100+</div>
                <div className="outcome-label">active contracts managed in one system</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">8+</div>
                <div className="outcome-label">countries, one tablet-friendly workspace</div>
              </div>
              <div className="outcome">
                <div className="outcome-number">0</div>
                <div className="outcome-label">last-minute expiry scrambles since launch</div>
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
                <dt>Frontend</dt>
                <dd>React 18 + TypeScript + Vite. About 50 components organised by tab. Tailwind
                for utility styling. Tablet-first breakpoints. Client-side state with React
                Context.</dd>

                <dt>Backend</dt>
                <dd>Node.js + Express, REST API. Prisma ORM against PostgreSQL. Twelve relational
                tables with proper foreign-key constraints, cascading rules, and timestamptz
                columns for timezone-safe expiry logic.</dd>

                <dt>Auth &amp; RBAC</dt>
                <dd>Google OAuth 2.0 (team was already on Workspace). Three-tier access: admin
                manages the system, officers work in their assigned territories, viewers get
                read-only dashboards.</dd>

                <dt>Notifications</dt>
                <dd>Cron job runs daily, checks contracts at 90 / 60 / 30 day expiry thresholds,
                surfaces them in the Dashboard attention banner and in per-user notification
                lists. Configurable cadence per role.</dd>

                <dt>Compass mascot</dt>
                <dd>Pure SVG + CSS animations. Mood state machine with five expressions,
                cursor-tracked pupils and needle via rAF, time-of-day accessories, speech
                bubbles, and idle tips that surface real data (expiring contracts, items needing
                attention). Built to be loved, not tolerated.</dd>

                <dt>Deployment</dt>
                <dd>Windows Server 2019. IIS reverse-proxy fronting a Node process managed by
                PM2. Cloudflare Tunnel for public egress. Coexists on the same server as
                Student Analytics and Lead Dashboard.</dd>

                <dt>What I&apos;d do differently</dt>
                <dd>The attention banner started as one banner showing top three alerts. It
                should have been a feed from day one — users asked for one within a week. Ship
                the feed first next time.</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* ───────── NEXT / PREV ───────── */}
        <section className="cs-nav-section">
          <div className="container-reading">
            <div className="cs-nav-grid">
              <Magnetic strength={6} tilt>
                <Link href="/work/lead-management" className="cs-nav-card prev">
                  <span className="cs-nav-label">← Previous</span>
                  <span className="cs-nav-title">Lead Management</span>
                  <span className="cs-nav-blurb">Filling the gaps in a vendor MIS</span>
                </Link>
              </Magnetic>
              <Magnetic strength={6} tilt>
                <Link href="/work/student-analytics" className="cs-nav-card next">
                  <span className="cs-nav-label">Next →</span>
                  <span className="cs-nav-title">Student Analytics</span>
                  <span className="cs-nav-blurb">Live analytics without taking spreadsheets away</span>
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

      {/* ═══════════════ STYLES (shared shape with student-analytics page) ═══════════════ */}
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

        /* ── Mascot callout block ── */
        .mascot-callout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 3rem;
          align-items: center;
          margin-top: 4rem;
          padding: 2.5rem;
          background: #FAF6EE;
          border: 1px solid #E8DCC8;
          border-radius: 10px;
        }
        @media (max-width: 700px) {
          .mascot-callout {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 2rem 1.5rem;
          }
        }
        .mascot-visual { display: flex; justify-content: center; }
        .mascot-text h3 {
          font-family: 'Newsreader', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #1A1A1A;
          margin: 0 0 1rem;
          letter-spacing: -0.01em;
        }
        .mascot-text p {
          font-size: 0.95rem;
          color: #5C5C5C;
          line-height: 1.65;
          margin-bottom: 1rem;
          max-width: 56ch;
        }
        .mascot-text p:last-child { margin-bottom: 0; }
        .mascot-note {
          font-family: 'Newsreader', Georgia, serif;
          font-style: italic;
          font-size: 0.85rem !important;
          color: #8B7355 !important;
          padding-top: 1rem;
          border-top: 1px solid #E8DCC8;
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
