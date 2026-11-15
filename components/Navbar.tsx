'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Audiência', href: '#audiencia' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Parcerias', href: '#parcerias' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#hero"
          onClick={handleLinkClick}
          className="font-serif text-lg sm:text-xl font-semibold tracking-[0.14em] uppercase text-[#070708] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-2"
        >
          CREATOR PRO
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-[13px] font-medium tracking-[0.06em] uppercase text-zinc-600"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#070708] transition-colors duration-200 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#070708] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#contato"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-[0.08em] uppercase bg-[#070708] text-white hover:bg-zinc-800 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-2"
          >
            Solicitar Proposta
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#070708] hover:bg-zinc-100 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708]"
          >
            {mobileOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200 px-5 py-5">
          <nav aria-label="Navegação mobile" className="flex flex-col divide-y divide-zinc-100">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="py-3.5 text-sm font-medium tracking-[0.08em] uppercase text-[#070708] hover:text-zinc-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold tracking-[0.08em] uppercase bg-[#070708] text-white hover:bg-zinc-800 transition-colors"
              >
                Solicitar Proposta
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
