import { Footer } from '@/app/mega-menu-header/components/footer';
import { Header } from '@/app/mega-menu-header/components/header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Design Gallery',
  description: 'Generated by mega menu header',
};

export default function MegaMenuHeaderLayout({
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
