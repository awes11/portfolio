import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://aadarshrauniyar.com.np';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aadarsh Kumar Rauniyar — Full-Stack Developer',
    template: '%s · Aadarsh Kumar Rauniyar',
  },
  description:
    'Full-stack developer in Kathmandu. I build internal tools and data systems end-to-end — React/TypeScript, Node, Flask, PostgreSQL. Available for remote roles worldwide.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'TypeScript',
    'Node.js',
    'Flask',
    'PostgreSQL',
    'Internal Tools',
    'Remote Developer',
    'Kathmandu',
    'Nepal',
  ],
  authors: [{ name: 'Aadarsh Kumar Rauniyar', url: SITE_URL }],
  creator: 'Aadarsh Kumar Rauniyar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Aadarsh Kumar Rauniyar',
    title: 'Aadarsh Kumar Rauniyar — Full-Stack Developer',
    description:
      'I build internal tools people actually open every morning. React, TypeScript, Node, Flask, PostgreSQL. Based in Kathmandu, available for remote roles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aadarsh Kumar Rauniyar — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aadarsh Kumar Rauniyar — Full-Stack Developer',
    description:
      'I build internal tools people actually open every morning. React, TypeScript, Node, Flask.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

// JSON-LD structured data — helps search engines understand the site as a Person profile
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aadarsh Kumar Rauniyar',
  url: SITE_URL,
  image: `${SITE_URL}/portraits/portrait-studio.jpg`,
  jobTitle: 'Full-Stack Developer',
  email: 'aadarsh.rauniyar11@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kathmandu',
    addressCountry: 'Nepal',
  },
  sameAs: [
    'https://www.linkedin.com/in/aadarsh-rauniyar/',
    'https://github.com/awes11',
  ],
  knowsAbout: [
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Flask',
    'PostgreSQL',
    'Internal Tools',
    'Full-Stack Development',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Newsreader:ital,wght@0,400;0,500;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
