import { useState } from 'react';
import { Menu, X, Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/siteContent';

interface NavbarProps {
  quoteCount: number;
}

const NAV_LINKS = [
  { label: 'Soluciones', href: '#servicios' },
  { label: 'Equipos y Tóner', href: '#catalogo' },
  { label: 'Calculadora', href: '#ahorro' },
  { label: 'KPAX', href: '#kpax' },
  { label: 'Nosotros', href: '#nosotros' },
];

export function Navbar({ quoteCount }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xs">
      {/* Top Corporate Utility Bar */}
      <div className="hidden border-b border-white/10 bg-[#0c131f] text-[11px] text-[#d1dbed] md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
          <span>
            Distribuidora de Kopiadoras de Tabasco S.A.S. de C.V. · Villahermosa y Sureste de
            México
          </span>
          <div className="flex items-center gap-2.5">
            <a
              href="tel:9936581877"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-0.5 text-[11px] font-semibold text-white transition-colors hover:border-[#8ba5d2] hover:bg-white/10"
            >
              <Phone className="h-3 w-3 text-[#8ba5d2]" />
              <span>Llámanos</span>
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#8ba5d2] px-3 py-0.5 text-[11px] font-bold text-[#0c131f] transition-colors hover:bg-[#97aed7]"
            >
              <MessageCircle className="h-3 w-3" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#inicio"
            className="flex items-center gap-3 focus:outline-none"
            aria-label="DK Soluciones Inicio"
          >
            <img
              src={BRAND.logoUrl}
              alt="DK Soluciones"
              className="h-10 w-auto object-contain sm:h-11"
            />
            <span className="hidden border-l border-slate-300 pl-3 font-heading text-sm font-bold tracking-tight text-[#0c131f] sm:inline-block">
              DK SOLUCIONES
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-[#284069]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {quoteCount > 0 && (
              <a
                href="#cotizar"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-bold tracking-wide text-[#0c131f] uppercase transition-colors hover:border-[#284069]"
              >
                <ShoppingBag className="h-4 w-4 text-[#284069]" />
                <span>Cotización ({quoteCount})</span>
              </a>
            )}
            <a
              href="#cotizar"
              className="rounded-full bg-[#284069] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase shadow-xs transition-all hover:bg-[#0c131f]"
            >
              Solicitar cotización
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {quoteCount > 0 && (
              <a
                href="#cotizar"
                className="inline-flex items-center gap-1 border border-slate-300 px-2.5 py-1.5 text-xs font-bold text-[#0c131f]"
                aria-label="Ir al cotizador"
              >
                <ShoppingBag className="h-4 w-4 text-[#284069]" />
                <span>{quoteCount}</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center border border-slate-300 p-2 text-[#0c131f]"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-2 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0c131f]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cotizar"
              onClick={() => setMobileOpen(false)}
              className="mt-3 block bg-[#284069] px-4 py-3 text-center text-xs font-bold tracking-wider text-white uppercase"
            >
              Solicitar cotización
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
