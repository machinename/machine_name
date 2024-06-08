import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from './contexts/app_provider'
import { Navbar } from "./components/nav";
import { baseUrl } from './sitemap'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Welcome - machinename.dev',
  description: 'machinename.dev',
  openGraph: {
    title: 'machinename.dev',
    description: 'machinename.dev',
    url: baseUrl,
    siteName: 'machinename.dev',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-3xl mx-auto px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
        <main className="flex items-center justify-center flex-col">
          <AppProvider> 
          <Navbar/>
          {children}

          </AppProvider>
        </main>
      </body>
    </html>
  );
}
