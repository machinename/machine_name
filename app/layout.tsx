import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { AppProvider } from './contexts/AppProvider'
import AppBar from './components/AppBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "MACHINE NAME",
  description:
    "Machine Name Web App"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <AppProvider> 
          <AppBar/>
            {children}
          <Footer/>
        </AppProvider>
      </body>
    </html>
  )
}