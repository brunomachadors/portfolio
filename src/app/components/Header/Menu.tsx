'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation'; // Para obter a rota ativa no Next.js

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Obtem a rota ativa

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resume', href: '/resume' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Posts', href: '/posts' },
    { name: 'Contacts', href: '/contacts' },
  ];

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Menu Desktop */}
      <nav className="hidden lg:flex gap-12">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-foreground text-2xl uppercase transform transition duration-300 hover:text-yellow-500 hover:scale-110 ${
              pathname === item.href ? 'border-b-2 border-yellow-500 pb-1' : ''
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Menu Mobile/Tablet */}
      <button
        className="lg:hidden flex items-center justify-center text-foreground text-4xl"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full h-full p-6 flex flex-col items-start gap-4 lg:hidden bg-background">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-foreground text-xl uppercase rounded transition duration-300 hover:scale-105 ${
                pathname === item.href
                  ? 'border-b-2 border-yellow-500 pb-1'
                  : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
