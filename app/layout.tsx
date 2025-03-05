import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@/components/analytics';
import CookieConsent from '@/components/cookie-consent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TeamKul - Professional Web Development & Digital Services',
  description: 'TeamKul offers professional web development, digital marketing, app development, and IT solutions to help businesses grow in the digital landscape.',
  keywords: 'web development, digital marketing, app development, IT solutions, TeamKul',
  openGraph: {
    title: 'TeamKul - Professional Web Development & Digital Services',
    description: 'TeamKul offers professional web development, digital marketing, app development, and IT solutions to help businesses grow in the digital landscape.',
    url: 'https://teamkul.tech',
    siteName: 'TeamKul',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'TeamKul',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
          <CookieConsent />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}