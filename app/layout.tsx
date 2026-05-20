import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aishaafridi.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aisha Afridi | Official Actor Portfolio',
  description: 'Official portfolio for Pakistani actress and digital creator Aisha Afridi, featuring selected screen work, gallery, featured videos, brand collaborations, press materials, and booking inquiries.',
  keywords: 'Aisha Afridi actress, Aisha Afridi official portfolio, Pakistani actress Aisha Afridi, Aisha Afridi drama, Aisha Afridi Baby Baji Ki Bahuwain, Aisha Afridi Rasm e Wafa, Aisha Afridi Aye Dil Aazma Nahin',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aisha Afridi | Official Actor Portfolio',
    description: 'Official portfolio for Pakistani actress and digital creator Aisha Afridi.',
    type: 'website',
    url: siteUrl,
    siteName: 'Aisha Afridi Official Portfolio',
    images: [
      {
        url: '/aisha-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Aisha Afridi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aisha Afridi | Official Actor Portfolio',
    description: 'Selected screen work, gallery, featured videos, brand collaborations, press materials, and booking inquiries.',
    images: ['/aisha-hero.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#F7F1E8',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aisha Afridi',
    url: siteUrl,
    jobTitle: 'Actress',
    nationality: 'Pakistani',
    sameAs: [
      'https://www.instagram.com/aishaafridi.official/',
      'https://www.youtube.com/@AishaAfridi_vlogs',
    ],
    knowsAbout: [
      'Television drama',
      'Acting',
      'Digital content',
      'Brand collaborations',
    ],
  };

  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
