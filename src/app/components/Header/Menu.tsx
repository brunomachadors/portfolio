'use client';
import { useState } from 'react';

export default function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
      <nav className="hidden sm:flex gap-4">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-foreground  text-xl uppercase hover:text-yellow-500 transform transition duration-300 hover:scale-105"
          >
            {item.name}
          </a>
        ))}
      </nav>

      <button
        className="sm:hidden flex items-center justify-center text-foreground text-4xl"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
      >
        {isMenuOpen ? '✖' : '☰'}
      </button>

      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full h-full p-4 flex flex-col items-start gap-4 sm:hidden bg-background">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground  text-xl uppercase rounded  transition duration-300 hover:scale-105"
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
