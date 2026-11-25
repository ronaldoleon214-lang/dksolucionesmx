import { X } from 'lucide-react';
import { BRAND } from '../data/siteContent';

export type LegalDocType = 'privacidad' | 'legal' | null;

interface LegalModalProps {
  docType: LegalDocType;
  onClose: () => void;
}

export function LegalModal({ docType, onClose }: LegalModalProps) {
  if (!docType) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0c131f] p-6 text-white shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <h2 id="legal-modal-title" className="font-heading text-xl font-bold text-white">
            {docType === 'privacidad' ? 'Aviso de Privacidad' : 'Aviso Legal'}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#9ea1a5] hover:bg-white/10 hover:text-white"
            aria-label="Cerrar ventana"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#d1dbed]">
          {docType === 'privacidad' ? (
            <>
              <p>
                <strong className="text-white">{BRAND.legalName}</strong> (comercialmente{' '}
                <strong className="text-white">{BRAND.name}</strong>), con domicilio en{' '}
                {BRAND.address}, es responsable del tratamiento de sus datos personales conforme a
                la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
              </p>
              <p>
                Los datos recabados en nuestros formularios de cotización (nombre, empresa, correo
                electrónico, teléfono y requerimientos de impresión) se utilizan exclusivamente para
                elaborar propuestas comerciales, dar seguimiento técnico y brindar atención al
                cliente.
              </p>
              <p>
                Usted puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación u
                Oposición) enviando una solicitud al correo{' '}
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-semibold text-[#8ba5d2] underline"
                >
                  {BRAND.email}
                </a>{' '}
                o comunicándose al teléfono {BRAND.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <p>
                Sitio web operado por <strong className="text-white">{BRAND.legalName}</strong>,
                bajo la marca comercial <strong className="text-white">{BRAND.name}</strong>.
              </p>
              <p>
                <strong className="text-white">Domicilio fiscal y comercial:</strong>{' '}
                {BRAND.address}
              </p>
              <p>
                <strong className="text-white">Contacto oficial:</strong> Tel. {BRAND.phoneDisplay}{' '}
                · WhatsApp {BRAND.whatsappDisplay} · {BRAND.email}
              </p>
              <p>
                Los precios mostrados en el catálogo Katun Arivia están expresados en pesos
                mexicanos (MXN) y pueden estar sujetos a disponibilidad o vigencia. Para
                cotizaciones formales y facturación, contacta a nuestro equipo comercial.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-[#8ba5d2] px-5 py-2 text-sm font-semibold text-[#0c131f] hover:bg-[#97aed7]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
