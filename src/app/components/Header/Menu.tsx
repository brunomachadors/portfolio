'use client';

import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <DesktopMenu />

      {/* Mobile Navigation */}
      <button
        className="lg:hidden flex items-center justify-center text-foreground text-4xl"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        data-testid="menu-toggle"
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {isMenuOpen && <MobileMenu closeMenu={() => setMenuOpen(false)} />}
    </>
  );
}
