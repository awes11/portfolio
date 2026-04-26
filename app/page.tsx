import Link from 'next/link';
import { PhotoSlideshow } from '@/components/PhotoSlideshow';
import { Navigation } from '@/components/Navigation';
import { Magnetic } from '@/components/Magnetic';
import { SideEffectsRow } from '@/components/SideEffectsRow';

const CASE_STUDIES = [
  {
    slug: 'ir-connect',
    label: 'MIS',
    title: 'IR Connect — International Relations MIS',
    blurb:
      'A tablet-first MIS that replaced a spreadsheet nobody could trust anymore — 100+ university contracts across 8+ countries, contract expiry tracking, territory tagging, role-based access, and notifications.',
    stack: 'React 18 · TypeScript · Node · Express · Prisma · PostgreSQL · Google OAuth',
  },
  {
    slug: 'student-analytics',
    label: 'Analytics',
    title: 'Student Analytics Dashboard',
    blurb:
      'Live analytics across two branches without taking anyone\u2019s spreadsheet away. A mapping layer reads each counsellor\u2019s Google Sheet in the format they already use — and produces one unified live dataset for leadership.',
    stack: 'Python 3.11 · Flask · MSAL + PyJWT · gspread · pandas · Windows Server + IIS',
  },
  {
    slug: 'lead-management',
    label: 'Admin Dashboard',
    title: 'Lead Management Analytics Dashboard',
    blurb:
      'A custom admin-scoped analytics layer sitting alongside the vendor MIS — six modules so far, each one closing a specific reporting or visibility gap leadership had been working around manually. New modules added as new gaps surface.',
    stack: 'Flask · PostgreSQL (CTEs, timestamptz, ROW_NUMBER) · Microsoft SSO · SheetJS',
  },
];

const SKILL_GROUPS: { title: string; items: string[] }[] = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    items: ['Flask', 'Node.js', 'Express', 'Prisma', 'REST APIs', 'Google Apps Script'],
  },
  {
    title: 'Frontend',
    items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Vanilla JS (IIFE modular)', 'Chart.js'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL (CTEs, timestamptz)', 'MySQL', 'Google Sheets API'],
  },
  {
    title: 'Auth & Security',
    items: ['Microsoft SSO (MSAL)', 'Google OAuth 2.0', 'PyJWT', 'Role-Based Access Control'],
  },
  {
    title: 'Deployment & DevOps',
    items: ['Windows Server 2019', 'IIS', 'Cloudflare Tunnel', 'PM2', 'Waitress', 'cron', 'Render', 'DigitalOcean'],
  },
  {
    title: 'Data & Tooling',
    items: ['Pandas', 'gspread', 'openpyxl', 'SheetJS', 'Git/GitHub', 'Power BI'],
  },
];

export default function HomePage() {
  return (
    <>
      <PhotoSlideshow />
      <Navigation />

      <main className="main-content">
        {/* ───────── HERO ───────── */}
        <section className="hero">
          <div className="container-reading">
            <div className="hero-content">
              <h1 className="hero-h1 animate-in">
                I build internal tools <br className="line-break" />
                people <em>actually open</em> every morning.
              </h1>
              <p className="hero-subtitle animate-in delay-1">
                Full-stack developer in Kathmandu. I ship end-to-end — database, backend,
                frontend, auth, deployment. Three production systems at a multi-branch education
                company. Open to remote roles worldwide.
              </p>

              <div className="hero-services animate-in delay-2">
                {['Internal Tools', 'Full-Stack Development', 'Data Systems'].map((s) => (
                  <Magnetic key={s} strength={20}>
                    <span className="service-chip">{s}</span>
                  </Magnetic>
                ))}
              </div>

              {/* Side effects — the Thanos snap lives here. Hover makes
                  the whole row (label + effects) disintegrate, implying
                  "no side effects" with this approach. */}
              <SideEffectsRow className="animate-in delay-2" />

              <div className="cta-group animate-in delay-3">
                <Magnetic strength={12}>
                  <Link href="#work" className="btn btn-primary">See the work</Link>
                </Magnetic>
                <Magnetic strength={12}>
                  <Link href="#contact" className="btn btn-secondary">Get in touch</Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── ABOUT ───────── */}
        <section id="about" className="about">
          <div className="container-reading">
            <div className="section-header">
              <p className="section-label">About</p>
              <h2 className="section-title">How I got here</h2>
            </div>

            <div className="prose-editorial about-content">
              <p>
                I came into development from a data analyst background. I spent two years
                cleaning messy datasets, writing SQL and Python, and making dashboards for teams
                that didn&apos;t have a technical person in the room. That&apos;s where I learned the hardest
                part of a data system isn&apos;t the code — it&apos;s understanding what people actually do
                with their data.
              </p>
              <p>
                Since February 2025 I&apos;ve been the sole developer at a multi-branch education
                company in Kathmandu that processes around fifteen thousand student leads a year.
                Three production systems so far — database, backend, frontend, auth, deployment,
                all of it. The analysis work hasn&apos;t stopped either. Alongside the builds, I still
                run company-wide Power BI reporting and cross-branch data cleanup for teams that
                still don&apos;t have a technical person in the room.
              </p>
              <p>
                The thing that separates tools people use from tools they ignore isn&apos;t the code.
                It&apos;s whether you understood the workflow before you started building. The system
                I&apos;m most proud of isn&apos;t the most complex one. It&apos;s the one people open every morning
                because it solved a problem they&apos;d given up complaining about.
              </p>
              <p className="about-footer">
                BSc in Computing, Leeds Beckett University. IBM Data Analyst Professional
                Certificate. Based in Kathmandu (UTC&nbsp;+5:45).
              </p>
            </div>
          </div>
        </section>

        {/* ───────── WORK ───────── */}
        <section id="work" className="work">
          <div className="container-reading">
            <div className="section-header">
              <p className="section-label">Selected Work</p>
              <h2 className="section-title">Three production systems</h2>
            </div>

            <div className="work-grid">
              {CASE_STUDIES.map((cs) => (
                <Magnetic key={cs.slug} strength={6} tilt>
                  <Link href={`/work/${cs.slug}`} className="case-study">
                    <div className="case-study-header">
                      <span className="case-study-type">{cs.label}</span>
                      <span className="case-study-arrow" aria-hidden="true">→</span>
                    </div>
                    <h3 className="case-study-title">{cs.title}</h3>
                    <p className="case-study-desc">{cs.blurb}</p>
                    <p className="case-study-stack">{cs.stack}</p>
                    <span className="case-study-cta">Read the case study</span>
                  </Link>
                </Magnetic>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── PROCESS ───────── */}
        <section id="process" className="process">
          <div className="container-reading">
            <div className="section-header">
              <p className="section-label">How I Work</p>
              <h2 className="section-title">Understand first. Build once.</h2>
            </div>
            <div className="process-grid">
              <div className="process-step">
                <div className="process-number">01</div>
                <h4>Sit with the problem</h4>
                <p>
                  Shadow the people who&apos;ll use the tool. Ask what&apos;s painful, what they&apos;ve already
                  tried, what they&apos;re quietly working around. The real problem is rarely the one
                  stated in the meeting.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">02</div>
                <h4>Design around the workflow</h4>
                <p>
                  The best system is the one that fits habits people already have. If a
                  spreadsheet works, build around the spreadsheet. If the workflow is broken,
                  redesign it — but do that honestly, not by hiding it behind a new UI.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">03</div>
                <h4>Ship end-to-end</h4>
                <p>
                  Database, backend, frontend, auth, deployment. Owning the whole thing means the
                  seams line up and the decisions are consistent. One person&apos;s context beats five
                  people&apos;s handoffs.
                </p>
              </div>
              <div className="process-step">
                <div className="process-number">04</div>
                <h4>Live with it</h4>
                <p>
                  A tool isn&apos;t done at launch. I stay on it — watching what people actually click,
                  what they ignore, what breaks when data gets weird. That&apos;s where v2 comes from.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── SKILLS ───────── */}
        <section id="skills" className="skills">
          <div className="container-reading">
            <div className="section-header">
              <p className="section-label">Stack</p>
              <h2 className="section-title">What I work with</h2>
            </div>
            <div className="skills-grid">
              {SKILL_GROUPS.map((group) => (
                <div key={group.title} className="skill-group">
                  <h4 className="skill-group-title">{group.title}</h4>
                  <div className="skill-chips">
                    {group.items.map((item) => (
                      <Magnetic key={item} strength={18}>
                        <span className="skill-chip">{item}</span>
                      </Magnetic>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── CONTACT ───────── */}
        <section id="contact" className="contact">
          <div className="container-reading">
            <div className="contact-content">
              <p className="section-label">Contact</p>
              <h2 className="contact-title">
                Currently open to <em>remote roles</em>.
              </h2>
              <p className="contact-sub">
                Full-time or contract. Comfortable with most timezones from Kathmandu (UTC&nbsp;+5:45).
                The fastest way to reach me is email.
              </p>

              <div className="contact-links">
                <Magnetic strength={15}>
                  <a href="mailto:aadarsh.rauniyar11@gmail.com" className="contact-link">
                    <EmailIcon /> aadarsh.rauniyar11@gmail.com
                  </a>
                </Magnetic>
                <Magnetic strength={15}>
                  <a href="https://www.linkedin.com/in/aadarsh-rauniyar/" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <LinkedInIcon /> LinkedIn
                  </a>
                </Magnetic>
                <Magnetic strength={15}>
                  <a href="https://github.com/awes11" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <GitHubIcon /> GitHub
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container-reading">
            <p>© 2026 Aadarsh Kumar Rauniyar · Kathmandu, Nepal</p>
          </div>
        </footer>
      </main>

      {/* ═══════════════ PAGE-SCOPED STYLES ═══════════════ */}
      <style>{`
        .main-content {
          margin-left: var(--photo-width-full);
          min-height: 100vh;
          transition: margin-left 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }
        body.scrolled .main-content {
          margin-left: max(var(--photo-width-collapsed), var(--photo-min-collapsed));
        }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 6rem 0;
        }
        .hero-content { max-width: 640px; }
        .hero-h1 {
          font-family: Newsreader, Georgia, serif;
          font-weight: 400;
          font-size: clamp(2.1rem, 4.4vw, 3.1rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          margin-bottom: 2rem;
          color: #1A1A1A;
        }
        .hero-h1 em {
          font-style: italic;
          color: #8B7355;
          font-weight: 400;
        }
        .line-break { display: none; }
        @media (min-width: 900px) {
          .line-break { display: inline; }
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: #5C5C5C;
          margin-bottom: 4rem;
          max-width: 520px;
          line-height: 1.65;
        }
        .hero-services {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 4rem;
        }
        .service-chip {
          display: inline-block;
          font-size: 0.8rem;
          color: #5C5C5C;
          padding: 0.4rem 0.85rem;
          background: #ECEAE6;
          border-radius: 20px;
          border: 1px solid #D4D0C8;
          transition: all 0.3s ease;
        }
        .service-chip:hover {
          background: #E8E4DD;
          border-color: #8B7355;
          color: #1A1A1A;
        }
        .cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.5rem;
          font-size: 0.87rem;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .btn-primary {
          background: #1A1A1A;
          color: #F5F4F1;
          border: 1px solid #1A1A1A;
        }
        .btn-primary:hover { opacity: 0.88; color: #F5F4F1; }
        .btn-secondary {
          background: transparent;
          color: #1A1A1A;
          border: 1px solid #D4D0C8;
        }
        .btn-secondary:hover { border-color: #1A1A1A; color: #1A1A1A; opacity: 1; }

        /* SECTIONS */
        section { padding: 6rem 0; }
        .section-header { margin-bottom: 4rem; }

        /* ABOUT */
        .about {
          background: #ECEAE6;
          border-top: 1px solid #D4D0C8;
          border-bottom: 1px solid #D4D0C8;
        }
        .about-content :global(p) { color: #1A1A1A; }
        .about-footer {
          font-size: 0.9rem !important;
          color: #5C5C5C !important;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #D4D0C8;
        }

        /* WORK */
        .work-grid {
          display: grid;
          gap: 2rem;
        }
        .case-study {
          display: block;
          background: #ECEAE6;
          border: 1px solid #D4D0C8;
          border-radius: 10px;
          padding: 2rem;
          transition: border-color 0.3s ease, background 0.3s ease;
          text-decoration: none;
          color: inherit;
        }
        .case-study:hover {
          border-color: #8B7355;
          background: #E8E4DD;
        }
        .case-study-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .case-study-type {
          font-size: 0.68rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #8B7355;
          background: #F5F4F1;
          padding: 0.3rem 0.7rem;
          border-radius: 4px;
          border: 1px solid #D4D0C8;
        }
        .case-study-arrow {
          color: #8B7355;
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        .case-study:hover .case-study-arrow { transform: translateX(6px); }
        .case-study-title {
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(1.2rem, 2vw, 1.45rem);
          font-weight: 400;
          margin-bottom: 1rem;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }
        .case-study-desc {
          color: #5C5C5C;
          font-size: 0.95rem;
          margin-bottom: 1rem;
          line-height: 1.65;
        }
        .case-study-stack {
          font-family: 'Courier New', monospace;
          font-size: 0.78rem;
          color: #5C5C5C;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #D4D0C8;
        }
        .case-study-cta {
          display: inline-block;
          font-size: 0.82rem;
          color: #8B7355;
          text-decoration: none;
          position: relative;
        }
        .case-study-cta::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #8B7355;
          transform: scaleX(0.3);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .case-study:hover .case-study-cta::after { transform: scaleX(1); }

        /* PROCESS */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        @media (max-width: 700px) {
          .process-grid { grid-template-columns: 1fr; }
        }
        .process-step {
          padding: 2rem;
          background: #ECEAE6;
          border: 1px solid #D4D0C8;
          border-radius: 8px;
          transition: border-color 0.3s ease;
        }
        .process-step:hover { border-color: #8B7355; }
        .process-number {
          font-family: Newsreader, Georgia, serif;
          font-size: 1.8rem;
          color: #8B7355;
          opacity: 0.4;
          line-height: 1;
          margin-bottom: 1rem;
        }
        .process-step h4 {
          font-family: Newsreader, Georgia, serif;
          font-size: 1.05rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
          color: #1A1A1A;
          letter-spacing: -0.01em;
        }
        .process-step p {
          font-size: 0.9rem;
          color: #5C5C5C;
          line-height: 1.65;
        }

        /* SKILLS */
        .skills {
          background: #ECEAE6;
          border-top: 1px solid #D4D0C8;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 3rem;
        }
        @media (max-width: 700px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
        .skill-group-title {
          font-family: "DM Sans", sans-serif;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #8B7355;
          margin-bottom: 1rem;
          font-weight: 500;
        }
        .skill-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-chip {
          display: inline-block;
          font-size: 0.82rem;
          color: #1A1A1A;
          padding: 0.45rem 0.9rem;
          background: #F5F4F1;
          border: 1px solid #D4D0C8;
          border-radius: 20px;
          transition: border-color 0.3s ease, color 0.3s ease, background 0.3s ease;
          white-space: nowrap;
          cursor: default;
        }
        .skill-chip:hover {
          border-color: #8B7355;
          color: #8B7355;
          background: #FFFFFF;
        }

        /* CONTACT */
        .contact { padding: 8rem 0; }
        .contact-content { max-width: 560px; }
        .contact-title {
          font-family: Newsreader, Georgia, serif;
          font-size: clamp(1.8rem, 3.2vw, 2.4rem);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 1rem;
          color: #1A1A1A;
        }
        .contact-title em { color: #8B7355; font-style: italic; }
        .contact-sub {
          color: #5C5C5C;
          margin-bottom: 2.5rem;
          line-height: 1.65;
        }
        .contact-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.9rem;
          color: #1A1A1A;
          padding: 0.6rem 1.1rem;
          border: 1px solid #D4D0C8;
          border-radius: 6px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .contact-link:hover {
          border-color: #1A1A1A;
          opacity: 1;
        }
        .contact-link :global(svg) {
          width: 16px;
          height: 16px;
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

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .main-content { margin-left: 0; }
          body.scrolled .main-content {
            margin-left: 0;
            margin-top: 60px;
          }
          .hero {
            min-height: auto;
            padding: 4rem 0;
          }
        }
      `}</style>
    </>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
