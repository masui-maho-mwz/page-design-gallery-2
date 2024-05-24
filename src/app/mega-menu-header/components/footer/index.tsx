import { NavAndSearch } from '@/app/mega-menu-header/components/footer/nav-and-search';
import { navItems1, navItems2 } from '@/app/mega-menu-header/components/footer/nav-and-search/items-data';
import { Options } from '@/app/mega-menu-header/components/footer/options';
import { links } from '@/app/mega-menu-header/components/footer/options/links-data';

export const Footer = () => {
  return (
    <footer>
      <NavAndSearch items={[navItems1, navItems2]} />
      <Options links={links} />
    </footer>
  );
};
