import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { asset } from '@/lib/asset';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spendii - Snap, Track & Save',
  description: 'Your personal finance companion. Scan payment screenshots, track expenses, manage budgets, and save smarter with Spendii.',
  keywords: ['expense tracker', 'budget planner', 'personal finance', 'money manager', 'spending tracker', 'savings goals'],
  openGraph: {
    title: 'Spendii - Snap, Track & Save',
    description: 'Your personal finance companion. Scan payment screenshots, track expenses, manage budgets, and save smarter.',
    type: 'website',
    images: [asset('/app-icon.png')],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spendii - Snap, Track & Save',
    description: 'Your personal finance companion. Scan payment screenshots, track expenses, manage budgets, and save smarter.',
  },
  icons: {
    icon: asset('/app-icon.png'),
    apple: asset('/app-icon.png'),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
