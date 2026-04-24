'use client';

import { usePathname } from 'next/navigation';
import { MenuItem } from './MenuItem';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Talks', href: '/talks' },
  { name: 'Posts', href: '/posts' },
  { name: 'Contacts', href: '/contacts' },
];

interface MobileMenuProps {
  closeMenu: () => void;
}

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-0 z-[60] overflow-y-auto bg-black p-6 pt-24 flex flex-col items-start gap-4 lg:hidden"
      aria-label="Mobile Navigation"
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          href={item.href}
          isActive={pathname === item.href}
          dataTestId={`mobile-menu-link-${item.name.toLowerCase()}`}
          onClick={closeMenu}
        />
      ))}
    </nav>
  );
}
