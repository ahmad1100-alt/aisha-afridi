import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aishaafridi.com'),
  title: 'Aisha Afridi - Pakistani Actress & Digital Creator',
  description: 'Official-style portfolio for Pakistani actress and digital creator Aisha Afridi, featuring selected screen work, gallery, BTS content, brand collaborations, press materials, and booking inquiries.',
  keywords: 'Aisha Afridi actress, Aisha Afridi portfolio, Pakistani actress Aisha Afridi, Aisha Afridi drama, Aisha Afridi Baby Baji Ki Bahuwain',
  openGraph: {
    title: 'Aisha Afridi - Pakistani Actress & Digital Creator',
    description: 'Official-style portfolio for Pakistani actress and digital creator Aisha Afridi, featuring selected screen work, gallery, BTS content, brand collaborations, press materials, and booking inquiries.',
    type: 'website',
    url: 'https://aishaafridi.com',
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
    title: 'Aisha Afridi - Pakistani Actress & Digital Creator',
    description: 'Selected screen work, gallery, BTS content, brand collaborations, press materials, and booking inquiries.',
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
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
