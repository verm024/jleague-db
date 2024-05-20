import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/molecules';
import { Spacer } from '@/components/atoms';
import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('UTC');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'J. League DB',
  description: 'J1 League Database',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Spacer size={48} />
        <div className="container mx-auto">{children}</div>
        <Spacer size={48} />
      </body>
    </html>
  );
}
