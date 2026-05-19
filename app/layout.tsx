import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aishaafridi.com'),
  title: 'Aisha Afridi - Pakistani Actress & Digital Creator',
  description: 'Official portfolio for Aisha Afridi, Pakistani actress and digital creator known for Guru, Shehzadi House, Baby Baji Ki Bahuwain, and Rasm e Wafa.',
  keywords: 'Aisha Afridi, Pakistani actress, digital creator, Guru, Shehzadi House, Baby Baji Ki Bahuwain, Rasm e Wafa',
  openGraph: {
    title: 'Aisha Afridi - Pakistani Actress & Digital Creator',
    description: 'Official portfolio for Aisha Afridi, Pakistani actress and digital creator.',
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
    description: 'Official portfolio for Aisha Afridi.',
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
