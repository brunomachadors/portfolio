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
  openGraph: {
    title: 'Bruno Machado | QA Engineer Portfolio',
    description:
      'Explore the professional portfolio of Bruno Machado, a QA Engineer with extensive experience in test automation, accessibility, and Shift Left practices.',
    url: 'https://bruno-portfolio-eight.vercel.app/',
    images: [
      {
        url: 'https://res.cloudinary.com/dtglidvcw/image/upload/v1736269422/Portifolio/preview.png',
        width: 1280,
        height: 720,
        alt: 'Bruno Machado | QA Engineer Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bruno Machado | QA Engineer Portfolio',
    description:
      'Explore the professional portfolio of Bruno Machado, a QA Engineer with extensive experience in test automation, accessibility, and Shift Left practices.',
    images: [
      'https://res.cloudinary.com/dtglidvcw/image/upload/v1736269422/Portifolio/preview.png',
    ],
  },
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
