import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BRAND, buildWhatsAppUrl } from '../data/siteContent';
import type { LegalDocType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#000000] pt-12 pb-20 text-sm text-[#9ea1a5] sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <div className="inline-block rounded-lg bg-white px-3 py-1.5">
            <img
              src={BRAND.logoUrl}
              alt="DK Soluciones"
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-xs leading-relaxed text-[#9ea1a5]">
            {BRAND.tagline}. Más de 15 años brindando renta, venta y mantenimiento de equipos
            multifuncionales en Tabasco y México.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold tracking-wider text-white uppercase">
            Contacto directo
          </h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#8ba5d2]" />
              <span>{BRAND.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <a
                href="tel:9936581877"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:border-[#8ba5d2]"
              >
                <Phone className="h-3.5 w-3.5 text-[#8ba5d2]" />
                <span>Llamar a oficina</span>
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#8ba5d2] px-3.5 py-1.5 text-xs font-bold text-[#0c131f] transition-colors hover:bg-[#97aed7]"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Escríbenos</span>
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-[#8ba5d2]" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-white">
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold tracking-wider text-white uppercase">
            Navegación y Legal
          </h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="#servicios" className="hover:text-white">
                Servicios y Renta
              </a>
            </li>
            <li>
              <a href="#catalogo" className="hover:text-white">
                Catálogo Katun Arivia
              </a>
            </li>
            <li>
              <a href="#kpax" className="hover:text-white">
                Programa Soluciones DK (KPAX)
              </a>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenLegal('privacidad')}
                className="hover:text-white"
              >
                Aviso de privacidad
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => onOpenLegal('legal')}
                className="hover:text-white"
              >
                Aviso legal
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-4 pt-6 text-xs text-[#9ea1a5] sm:flex-row sm:px-6 sm:pr-36 lg:px-8 lg:pr-40">
        <p>
          © {new Date().getFullYear()} {BRAND.legalName} — Todos los derechos reservados.
        </p>
        <p>Villahermosa, Tabasco, México.</p>
      </div>
    </footer>
  );
}
