'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

type HamburgerProps = {
  burgerOpen: boolean;
  setBurgerOpen: (open: boolean) => void;
};

const Hamburger = ({ burgerOpen, setBurgerOpen }: HamburgerProps) => {
  return (
    <button
      className="text-white hover:text-[var(--cyber-blue)] focus:outline-none transition-colors duration-300"
      onClick={() => setBurgerOpen(!burgerOpen)}
      aria-label="Toggle Menu"
    >
      {!burgerOpen ? (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div
      className={`absolute top-16 right-4 w-56 origin-top-right transform transition-all duration-300 ease-in-out ${
        isOpen
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
      }`}
    >
      <div className="rounded-md shadow-lg border border-[var(--cyber-blue)] bg-[var(--cyber-darker)] bg-opacity-95 backdrop-blur-sm overflow-hidden shadow-[0_0_10px_rgba(0,255,255,0.3)]">
        <div className="py-2">
          <Link
            href="/"
            onClick={onClose}
            className="block px-4 py-3 text-white hover:text-[var(--cyber-blue)] hover:bg-[rgba(0,255,255,0.1)] transition-all duration-200"
          >
            Home
          </Link>
          <div className="border-t border-[rgba(0,255,255,0.2)]"></div>
          <Link
            href="/projects"
            onClick={onClose}
            className="block px-4 py-3 text-white hover:text-[var(--cyber-blue)] hover:bg-[rgba(0,255,255,0.1)] transition-all duration-200"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (burgerOpen && !target.closest('.mobile-menu-container')) {
        setBurgerOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [burgerOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--cyber-darker)] bg-opacity-80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-[var(--cyber-blue)] font-cyber text-xl neon-blue"
            >
              Oriel Savir
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
            </div>
          </div>
          <div className="md:hidden relative mobile-menu-container">
            <Hamburger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <MobileMenu isOpen={burgerOpen} onClose={() => setBurgerOpen(false)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-[var(--cyber-blue)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-blue"
    >
      {children}
    </Link>
  );
};

export default Navbar;
