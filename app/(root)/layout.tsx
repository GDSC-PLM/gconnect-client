import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'G-Connect',
  description:
    "G-Connect is a platform that helps you find someone to study with, whether you're looking for someone to help you with a specific course or just someone to motivate you to stay on track and study together! 📚",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
