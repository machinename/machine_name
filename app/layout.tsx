import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import AppBar from './components/AppBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MACHINE NAME",
  description:
    "Welcome to Kendrick Lawton's portfolio."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <ThemeProvider> 
          <AppBar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}