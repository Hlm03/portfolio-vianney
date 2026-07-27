import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const BASE_URL = 'https://portfolio-vianney.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'H. Vianney HADONOU — Designer 3D & Animateur | Cotonou, Bénin',
    template: '%s | Vianney HADONOU',
  },
  description:
    'Designer 3D freelance basé à Cotonou (Bénin). Spécialisé en conception 3D, animation publicitaire, VFX & intégration, et visualisation architecturale. 50+ projets livrés, 4,9★ sur Comeup.',
  keywords: [
    'designer 3D', 'animateur 3D', 'freelance Bénin', 'Cotonou',
    'Blender', 'visualisation architecturale', 'animation publicitaire',
    'VFX', 'modélisation 3D', 'Substance 3D', 'Unity', 'SketchUp',
    'design graphique', 'rendu 3D', 'Vianney Hadonou',
  ],
  authors: [{ name: 'H. Vianney HADONOU', url: BASE_URL }],
  creator: 'H. Vianney HADONOU',
  publisher: 'H. Vianney HADONOU',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: BASE_URL,
    siteName: 'Vianney HADONOU — Designer 3D',
    title: 'H. Vianney HADONOU — Designer 3D & Animateur',
    description:
      'Designer 3D freelance basé à Cotonou. Conception 3D, animation publicitaire, VFX et visualisation architecturale. 50+ projets, 4,9★ sur Comeup.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vianney HADONOU — Designer 3D & Animateur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'H. Vianney HADONOU — Designer 3D & Animateur',
    description:
      'Designer 3D freelance basé à Cotonou. Conception 3D, animation publicitaire, VFX et visualisation architecturale.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: BASE_URL },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'H. Vianney HADONOU',
  url: BASE_URL,
  jobTitle: 'Designer 3D & Animateur Freelance',
  description: 'Designer 3D freelance spécialisé en conception 3D, animation publicitaire, VFX et visualisation architecturale.',
  email: 'hadonou03vianney@gmail.com',
  telephone: '+22999695755',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cotonou',
    addressCountry: 'BJ',
  },
  sameAs: ['https://comeup.com/fr/@vianney_hlm'],
  knowsAbout: ['Blender', 'Unity', 'Substance 3D', 'SketchUp', 'Figma', 'Animation 3D', 'Visualisation architecturale', 'VFX', 'Design graphique'],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Designer 3D',
    occupationLocation: { '@type': 'City', name: 'Cotonou' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0D0D1A" />
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
