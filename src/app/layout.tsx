import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Layout from './components/layout';

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Bruno Machado | QA Engineer Portfolio',
  description:
    'Explore the professional portfolio of Bruno Machado, a QA Engineer with extensive experience in test automation, accessibility, and Shift Left practices.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
