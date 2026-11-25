import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, MessageCircle, Minus, Plus, Send, Sparkles, Trash2 } from 'lucide-react';
import { KATUN_CATALOG, formatMXN } from '../data/catalog';
import { buildWhatsAppUrl } from '../data/siteContent';

interface QuoteSectionProps {
  selectedService: string;
  onChangeService: (service: string) => void;
  prefilledNotes: string;
  selectedSkus: Record<string, number>;
  onUpdateQty: (sku: string, delta: number) => void;
  onClearSkus: () => void;
}

const SERVICE_OPTIONS = [
  'Renta de equipos multifuncionales',
  'Venta de equipos y consumibles Arivia',
  'Consumibles (tóner, reveladores, fusor)',
  'Mantenimiento y reparación',
  'Programa Soluciones DK + KPAX',
];

const VOLUME_OPTIONS = [
  'Menos de 3,000 páginas/mes',
  '3,000 a 10,000 páginas/mes',
  '10,000 a 30,000 páginas/mes',
  'Más de 30,000 páginas/mes',
];

export function QuoteSection({
  selectedService,
  onChangeService,
  prefilledNotes,
  selectedSkus,
  onUpdateQty,
  onClearSkus,
}: QuoteSectionProps) {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState(VOLUME_OPTIONS[1]);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledNotes) {
      setNotes(prefilledNotes);
    }
  }, [prefilledNotes]);

  const selectedItems = Object.entries(selectedSkus)
    .filter(([, qty]) => qty > 0)
    .map(([sku, qty]) => {
      const product = KATUN_CATALOG.find((p) => p.sku === sku);
      return product ? { product, qty } : null;
    })
    .filter((item): item is NonNullable<typeof item> => item !== null);

  const estimatedTotal = selectedItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  );

  function buildQuoteMessage() {
    const lines = [
      `Hola DK Soluciones, solicito una cotización:`,
      `• Servicio: ${selectedService}`,
      `• Nombre: ${name || 'Por definir'}`,
      company ? `• Empresa: ${company}` : null,
      email ? `• Email: ${email}` : null,
      phone ? `• Teléfono: ${phone}` : null,
      `• Volumen mensual estimado: ${volume}`,
    ].filter(Boolean);

    if (selectedItems.length > 0) {
      lines.push('', 'Productos Katun Arivia seleccionados:');
      for (const { product, qty } of selectedItems) {
        lines.push(
          `- ${qty}x ${product.shortName} (SKU: ${product.sku}) — ${formatMXN(product.price * qty)}`
        );
      }
      lines.push(`Subtotal estimado de catálogo: ${formatMXN(estimatedTotal)} MXN`);
    }

    if (notes.trim()) {
      lines.push('', `Comentarios: ${notes.trim()}`);
    }

    return lines.join('\n');
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="cotizar"
      className="bg-gradient-to-br from-[#284069] via-[#1f3559] to-[#0c131f] py-12 text-white sm:py-14"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8ba5d2]/40 bg-[#0c131f]/40 px-3.5 py-1 text-xs font-bold text-[#8ba5d2]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Cotización a la medida</span>
          </div>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Comienza a ahorrar en tus impresiones hoy mismo.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#d1dbed]">
            Completa el formulario o envía tu lista de productos Katun Arivia directo por WhatsApp
            al <strong className="text-white">993 208 4747</strong>.
          </p>

          <div className="mt-6 space-y-3 border-t border-white/15 pt-6">
            {[
              {
                step: '1',
                title: 'Propuesta personalizada el mismo día',
                desc: 'Analizamos tu volumen y te enviamos la opción más rentable.',
              },
              {
                step: '2',
                title: 'Diagnóstico sin costo en tu oficina',
                desc: 'Evaluamos tus equipos actuales en Villahermosa y el sureste.',
              },
              {
                step: '3',
                title: 'Instalación, KPAX y capacitación',
                desc: 'Dejamos tu flota operando sin interrupciones desde el día uno.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-3.5 rounded-xl bg-white/10 p-3.5 backdrop-blur-xs"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8ba5d2] font-heading text-xs font-bold text-[#0c131f]">
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-0.5 text-xs text-[#d1dbed]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Crisp White Conversion Card */}
        <div className="overflow-hidden rounded-2xl bg-white text-[#0c131f] shadow-2xl lg:col-span-7">
          <div className="grid h-1.5 w-full grid-cols-4" aria-hidden="true">
            <div className="bg-cyan-400" />
            <div className="bg-fuchsia-500" />
            <div className="bg-amber-400" />
            <div className="bg-[#284069]" />
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#398261] text-white">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-2xl font-bold text-[#0c131f]">
                  ¡Cotización lista para enviar!
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
                  Envía este resumen directamente por WhatsApp a nuestro equipo comercial para
                  recibir tu propuesta formal.
                </p>

                <div className="mx-auto mt-6 max-w-xl rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-xs whitespace-pre-wrap text-slate-700">
                  {buildQuoteMessage()}
                </div>

                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={buildWhatsAppUrl(buildQuoteMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#398261] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#2f6e52]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Enviar por WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-slate-300 px-6 py-3.5 text-xs font-bold tracking-wider text-[#0c131f] uppercase hover:bg-slate-50"
                  >
                    Editar datos
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {selectedItems.length > 0 && (
                  <div className="rounded-2xl border border-[#8ba5d2]/40 bg-[#f5f8fc] p-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                      <h3 className="font-heading text-xs font-bold tracking-wider text-[#284069] uppercase">
                        Artículos Katun Arivia ({selectedItems.length})
                      </h3>
                      <button
                        type="button"
                        onClick={onClearSkus}
                        className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#0c131f]"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Limpiar
                      </button>
                    </div>
                    <ul className="mt-2 divide-y divide-slate-200">
                      {selectedItems.map(({ product, qty }) => (
                        <li
                          key={product.sku}
                          className="flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm"
                        >
                          <div>
                            <p className="font-semibold text-[#0c131f]">{product.shortName}</p>
                            <p className="text-xs text-slate-500">SKU: {product.sku}</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white">
                              <button
                                type="button"
                                onClick={() => onUpdateQty(product.sku, -1)}
                                className="p-1.5 text-slate-600 hover:text-[#0c131f]"
                                aria-label={`Disminuir cantidad de ${product.shortName}`}
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="min-w-7 text-center text-xs font-bold text-[#0c131f]">
                                {qty}
                              </span>
                              <button
                                type="button"
                                onClick={() => onUpdateQty(product.sku, 1)}
                                className="p-1.5 text-slate-600 hover:text-[#0c131f]"
                                aria-label={`Aumentar cantidad de ${product.shortName}`}
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <span className="min-w-24 text-right font-bold text-[#284069]">
                              {formatMXN(product.price * qty)}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-3 text-sm font-bold">
                      <span className="text-slate-600">Subtotal estimado:</span>
                      <span className="text-lg text-[#0c131f]">
                        {formatMXN(estimatedTotal)} MXN
                      </span>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-600 uppercase">
                    1. Elige el servicio que necesitas
                  </label>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {SERVICE_OPTIONS.map((opt) => {
                      const active = selectedService === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => onChangeService(opt)}
                          className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                            active
                              ? 'bg-[#0c131f] text-white shadow-sm'
                              : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-[#284069]'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-name" className="block text-xs font-semibold text-slate-700">
                      Nombre completo *
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Carlos Mendoza"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#0c131f] placeholder-slate-400 focus:border-[#284069] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="quote-company"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Empresa o institución
                    </label>
                    <input
                      id="quote-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Grupo Empresarial del Sureste"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#0c131f] placeholder-slate-400 focus:border-[#284069] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="block text-xs font-semibold text-slate-700">
                      Correo electrónico *
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nombre@empresa.com"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#0c131f] placeholder-slate-400 focus:border-[#284069] focus:bg-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="block text-xs font-semibold text-slate-700">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="993 000 0000"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#0c131f] placeholder-slate-400 focus:border-[#284069] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-volume"
                      className="block text-xs font-semibold text-slate-700"
                    >
                      Volumen mensual estimado
                    </label>
                    <select
                      id="quote-volume"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#0c131f] focus:border-[#284069] focus:bg-white focus:outline-none"
                    >
                      {VOLUME_OPTIONS.map((v) => (
                        <option key={v} value={v}>
                          {v}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-notes" className="block text-xs font-semibold text-slate-700">
                      Comentarios (opcional)
                    </label>
                    <input
                      id="quote-notes"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Requiero 2 equipos en Villahermosa"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm text-[#0c131f] placeholder-slate-400 focus:border-[#284069] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#284069] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase shadow-md transition-all hover:bg-[#0c131f]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Generar cotización</span>
                  </button>
                  <a
                    href={buildWhatsAppUrl(buildQuoteMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold tracking-wider text-[#0c131f] uppercase transition-all hover:border-[#284069] hover:bg-slate-50"
                  >
                    <MessageCircle className="h-4 w-4 text-[#284069]" />
                    <span>WhatsApp directo</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
