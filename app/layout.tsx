import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Webhook Delivery Monitor — Debug Failures Instantly',
  description: 'Track webhook delivery attempts, retry patterns, and failure reasons. Debug webhook endpoints with ease.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="82d54e25-38d7-42ba-80e3-687fa1df0574"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
