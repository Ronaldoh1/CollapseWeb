import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'SunFlow: Reignited',
    template: '%s · SunFlow: Reignited',
  },
  description:
    'Consciousness education through pattern recognition and critical thinking. Every claim cited. Every source searchable. No algorithm between you and the information.',
  keywords: ['consciousness education', 'pattern recognition', 'critical thinking', 'cited research'],
  authors: [{ name: 'SunFlow: Reignited' }],
  openGraph: {
    title: 'SunFlow: Reignited',
    description: 'Everything here is cited. Everything here is searchable.',
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-void text-snow antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
