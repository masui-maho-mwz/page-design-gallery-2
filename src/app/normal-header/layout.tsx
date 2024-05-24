import { Footer } from '@/app/normal-header/components/footer';
import { Header } from '@/app/normal-header/components/header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Page Design Gallery',
  description: 'Generated by norlal header',
};

export default function NormalHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
