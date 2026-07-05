import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soongshaozhi.com'),
  title: 'Shao Zhi — Applied ML & AI Infra',
  description:
    'Shao Zhi works on AI agents, inference, and model performance. Third-year Computer Science at NUS; incoming Applied ML Engineer at Fireworks AI.',
  keywords: ['Shao Zhi', 'Applied ML', 'AI Infrastructure', 'Inference', 'NUS', 'Fireworks AI', 'Machine Learning'],
  authors: [{ name: 'Soong Shao Zhi' }],
  creator: 'Soong Shao Zhi',
  openGraph: {
    title: 'Shao Zhi — Applied ML & AI Infra',
    description: 'AI agents, inference, and model performance. Incoming Applied ML Engineer at Fireworks AI.',
    url: 'https://soongshaozhi.com',
    siteName: 'Shao Zhi',
    type: 'website',
    locale: 'en_SG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shao Zhi — Applied ML & AI Infra',
    description: 'AI agents, inference, and model performance. Incoming Applied ML Engineer at Fireworks AI.',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
