import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/siteContent';

export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos a través de WhatsApp"
      className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-[#0c131f] shadow-xl shadow-black/40 transition-transform hover:scale-105 hover:bg-[#22c35e]"
    >
      <MessageCircle className="h-5 w-5 fill-current" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
