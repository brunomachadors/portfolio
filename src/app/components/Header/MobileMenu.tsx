'use client';

import { usePathname } from 'next/navigation';
import { MenuItem } from './MenuItem';

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resume', href: '/resume' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
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
      className="absolute top-16 left-0 w-full h-full p-6 flex flex-col items-start gap-4 lg:hidden bg-background"
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
