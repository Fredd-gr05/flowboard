import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flowboard - Canvas Project Management',
  description: 'Infinite canvas for project management with tldraw and AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  )
}
