'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { asset } from '@/lib/asset';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Support', href: '/support' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderColor: 'var(--color-border)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <Image src={asset('/app-icon.png')} alt="Spendii" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold gradient-text">Spendii</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
                style={{ color: 'var(--color-muted)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/#download"
            className="hidden md:inline-flex text-sm font-medium text-white px-5 py-2 rounded-full transition-opacity hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
          >
            Download
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg"
            style={{ color: 'var(--color-muted)' }}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t px-4 py-4 space-y-3" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm py-2 transition-colors hover:text-white"
              style={{ color: 'var(--color-muted)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#download"
            onClick={() => setMenuOpen(false)}
            className="block text-center text-sm font-medium text-white px-5 py-2.5 rounded-full mt-2"
            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}
          >
            Download
          </Link>
        </div>
      )}
    </header>
  );
}
