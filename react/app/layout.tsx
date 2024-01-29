import '@/assets/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/layout/Header';
import ShopifyAppProvider from '@/providers/ShopifyAppProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Synaptiq React Skills App',
  description: 'Demonstrate the mastery of the Front end, it knows no bounds!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <Header />
          <main className="flex flex-1 overflow-y-auto p-5">
            <ShopifyAppProvider>
              {children}
            </ShopifyAppProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
