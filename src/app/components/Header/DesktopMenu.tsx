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

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex gap-12" aria-label="Desktop Navigation">
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          href={item.href}
          isActive={pathname === item.href}
          dataTestId={`menu-link-${item.name.toLowerCase()}`}
        />
      ))}
    </nav>
  );
}
