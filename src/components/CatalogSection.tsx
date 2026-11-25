import { useMemo, useState } from 'react';
import {
  Check,
  ChevronRight,
  MessageCircle,
  Plus,
  Printer,
  Search,
  ShoppingBag,
  X,
} from 'lucide-react';
import {
  KATUN_CATALOG,
  formatMXN,
  type CatalogProduct,
  type ProductCategory,
  type TonerColor,
} from '../data/catalog';
import { buildWhatsAppUrl } from '../data/siteContent';

interface CatalogSectionProps {
  selectedSkus: Record<string, number>;
  onAddProduct: (product: CatalogProduct) => void;
}

const COLOR_SWATCH: Record<TonerColor, { bg: string; label: string }> = {
  K: { bg: 'bg-neutral-900', label: 'Negro' },
  C: { bg: 'bg-cyan-500', label: 'Cian' },
  M: { bg: 'bg-fuchsia-600', label: 'Magenta' },
  Y: { bg: 'bg-amber-400', label: 'Amarillo' },
  'N/A': { bg: 'bg-[#284069]', label: 'Refacción' },
};

const CONSUMABLE_GROUPS = [
  {
    id: 'toner-3100' as ProductCategory,
    title: 'Tóner Serie Arivia C3135 – C4165',
    subtitle: 'Alto rendimiento: hasta 52,000 páginas en negro y 26,000 en color.',
    priceFrom: 'Desde $2,255 MXN',
    count: '4 SKUs (K, C, M, Y)',
    image: '/arivia-toner.jpg',
  },
  {
    id: 'toner-2100' as ProductCategory,
    title: 'Tóner Serie Arivia C2125 / C2130',
    subtitle: 'Rendimiento de 30,000 páginas negro y 22,000 páginas en color.',
    priceFrom: 'Desde $1,565 MXN',
    count: '4 SKUs (K, C, M, Y)',
    image: '/arivia-toner.jpg',
  },
  {
    id: 'revelado' as ProductCategory,
    title: 'Unidades de Revelado y Fusor',
    subtitle: 'Refacciones originales para máxima nitidez y continuidad operativa.',
    priceFrom: 'Desde $2,551 MXN',
    count: '5 SKUs disponibles',
    image: '/arivia-part.jpg',
  },
];

export function CatalogSection({ selectedSkus, onAddProduct }: CatalogSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all');
  const [search, setSearch] = useState('');

  const machines = useMemo(
    () => KATUN_CATALOG.filter((item) => item.category === 'equipos'),
    []
  );

  const modalProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    return KATUN_CATALOG.filter((item) => {
      const matchesCat = activeCategory === 'all' || item.category === activeCategory;
      const matchesQuery =
        query === '' ||
        item.name.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.compatibility.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });
  }, [activeCategory, search]);

  const totalSelectedItems = Object.values(selectedSkus).reduce((acc, qty) => acc + qty, 0);

  function openGroupModal(cat: ProductCategory) {
    setActiveCategory(cat);
    setSearch('');
    setModalOpen(true);
  }

  return (
    <section id="catalogo" className="bg-[#f5f7fa] py-12 text-[#0c131f] sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] text-[#284069] uppercase">
              Línea Katun Arivia
            </p>
            <h2 className="mt-1.5 font-heading text-3xl font-bold tracking-tight text-[#0c131f] sm:text-4xl">
              Equipos Multifuncionales y Consumibles
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearch('');
                setModalOpen(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-[#284069] px-5 py-2.5 text-xs font-bold tracking-wider text-[#284069] uppercase transition-colors hover:bg-[#284069] hover:text-white"
            >
              <span>Ver catálogo completo (15 SKUs)</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            {totalSelectedItems > 0 && (
              <a
                href="#cotizar"
                className="inline-flex items-center gap-2 rounded-full bg-[#0c131f] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#284069]"
              >
                <ShoppingBag className="h-4 w-4 text-[#8ba5d2]" />
                <span>Cotización ({totalSelectedItems})</span>
              </a>
            )}
          </div>
        </div>

        {/* Flagship Machines Showcase */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {machines.map((machine, idx) => {
            const qty = selectedSkus[machine.sku] ?? 0;
            const isHighVolume = idx === 1;
            const ppm = isHighVolume ? '65 PPM' : '35 PPM';
            const duty = isHighVolume ? '15,000 págs/mes' : '7,000 págs/mes';
            const machineImg = isHighVolume ? '/arivia-c4165.jpg' : '/arivia-c3135.jpg';

            return (
              <article
                key={machine.sku}
                className={`grid overflow-hidden rounded-2xl border shadow-sm sm:grid-cols-12 ${
                  isHighVolume
                    ? 'border-[#0c131f] bg-[#0c131f] text-white'
                    : 'border-slate-200 bg-white text-[#0c131f]'
                }`}
              >
                <div className="relative bg-[#e6e9ee] sm:col-span-5">
                  <img
                    src={machineImg}
                    alt={machine.name}
                    className="h-48 w-full object-cover object-center sm:h-full"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-[#0c131f]/85 px-2.5 py-1 text-[11px] font-bold tracking-wider text-white uppercase backdrop-blur-xs">
                    {ppm} · Color
                  </span>
                </div>

                <div className="flex flex-col justify-between p-5 sm:col-span-7 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`font-mono text-[11px] font-bold ${
                          isHighVolume ? 'text-[#8ba5d2]' : 'text-[#284069]'
                        }`}
                      >
                        SKU: {machine.sku}
                      </span>
                      <span
                        className={`text-[11px] font-semibold ${
                          isHighVolume ? 'text-[#9ea1a5]' : 'text-slate-500'
                        }`}
                      >
                        {duty}
                      </span>
                    </div>

                    <div className="mt-2 flex items-center gap-2">
                      <Printer
                        className={`h-4 w-4 shrink-0 ${
                          isHighVolume ? 'text-[#8ba5d2]' : 'text-[#284069]'
                        }`}
                      />
                      <h3 className="font-heading text-xl font-bold">{machine.shortName}</h3>
                    </div>

                    <p
                      className={`mt-2 text-xs leading-relaxed ${
                        isHighVolume ? 'text-[#d1dbed]' : 'text-slate-600'
                      }`}
                    >
                      {machine.specs}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-current/10 pt-4">
                    <div>
                      <span
                        className={`block text-[11px] ${
                          isHighVolume ? 'text-[#9ea1a5]' : 'text-slate-500'
                        }`}
                      >
                        Venta · Disponible en renta
                      </span>
                      <p className="font-heading text-2xl font-bold">
                        {formatMXN(machine.price)}{' '}
                        <span className="text-[11px] font-normal opacity-75">MXN</span>
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => onAddProduct(machine)}
                        className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-xs font-bold tracking-wider uppercase transition-colors ${
                          qty > 0
                            ? 'bg-[#398261] text-white'
                            : isHighVolume
                              ? 'bg-[#8ba5d2] text-[#0c131f] hover:bg-[#97aed7]'
                              : 'bg-[#0c131f] text-white hover:bg-[#284069]'
                        }`}
                      >
                        {qty > 0 ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                        <span>{qty > 0 ? `(${qty})` : 'Cotizar'}</span>
                      </button>
                      <a
                        href={buildWhatsAppUrl(
                          `Hola DK Soluciones, me interesa el equipo ${machine.shortName} (SKU: ${machine.sku}) en venta o renta.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center rounded-full border p-2 text-xs font-bold transition-colors ${
                          isHighVolume
                            ? 'border-white/25 text-white hover:bg-white/10'
                            : 'border-slate-300 text-[#0c131f] hover:bg-slate-100'
                        }`}
                        aria-label={`Consultar ${machine.shortName} por WhatsApp`}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Clean 3-Card Consumables Summary (keeps Landing clean, opens Modal for full SKU list) */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {CONSUMABLE_GROUPS.map((group) => (
            <div
              key={group.id}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-[#284069]/50 hover:shadow-md"
            >
              <img
                src={group.image}
                alt={group.title}
                className="h-20 w-20 shrink-0 rounded-xl border border-slate-100 bg-white object-contain p-1.5"
              />
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-bold text-[#284069] uppercase">
                  {group.count}
                </span>
                <h3 className="mt-0.5 font-heading text-sm font-bold text-[#0c131f]">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-[#398261]">{group.priceFrom}</p>
                <button
                  type="button"
                  onClick={() => openGroupModal(group.id)}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#0c131f] underline decoration-[#8ba5d2] decoration-2 underline-offset-4 hover:text-[#284069]"
                >
                  <span>Ver SKUs y precios</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full SKU & Price List Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-label="Catálogo completo Katun Arivia"
        >
          <div className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white text-[#0c131f] shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h3 className="font-heading text-lg font-bold text-[#0c131f]">
                  Catálogo de Precios y SKUs Katun Arivia
                </h3>
                <p className="text-xs text-slate-500">
                  Agrega los artículos que necesites para armar tu cotización en 1 clic.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-[#0c131f]"
                aria-label="Cerrar catálogo"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col justify-between gap-3 border-b border-slate-200 bg-slate-50 px-6 py-3 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all' as const, label: 'Todos (15)' },
                  { id: 'equipos' as const, label: 'Equipos (2)' },
                  { id: 'toner-3100' as const, label: 'Tóner C3135–C4165' },
                  { id: 'toner-2100' as const, label: 'Tóner C2125/C2130' },
                  { id: 'revelado' as const, label: 'Reveladores' },
                  { id: 'fusor' as const, label: 'Fusor' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full px-3 py-1 text-xs font-bold transition-colors ${
                      activeCategory === cat.id
                        ? 'bg-[#0c131f] text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <div className="relative w-full shrink-0 sm:w-44">
                <Search className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar SKU..."
                  className="w-full rounded-full border border-slate-200 bg-white py-1.5 pr-3 pl-8 text-xs text-[#0c131f] focus:border-[#284069] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto bg-[#f8fafd] p-5 sm:p-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {modalProducts.map((item) => {
                  const swatch = COLOR_SWATCH[item.color];
                  const qty = selectedSkus[item.sku] ?? 0;
                  const isMachine = item.category === 'equipos';
                  const isPart = item.category === 'revelado' || item.category === 'fusor';
                  const thumb =
                    item.sku === '602K1012'
                      ? '/arivia-c3135.jpg'
                      : item.sku === '602K1018'
                        ? '/arivia-c4165.jpg'
                        : isPart
                          ? '/arivia-part.jpg'
                          : null;

                  return (
                    <div
                      key={item.sku}
                      className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-2xs transition-colors hover:border-[#8ba5d2]"
                    >
                      <div className="flex items-start gap-3">
                        {thumb ? (
                          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-1">
                            <img
                              src={thumb}
                              alt={item.shortName}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50">
                            <span
                              className={`h-5 w-5 rounded-full border border-black/10 shadow-xs ${swatch.bg}`}
                            />
                            <span className="mt-1 text-[10px] font-bold text-slate-600">
                              {item.color}
                            </span>
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-[#284069]">
                              {item.sku}
                            </span>
                            {isMachine && (
                              <span className="rounded bg-[#284069]/10 px-1.5 py-0.5 text-[10px] font-bold text-[#284069]">
                                MFP
                              </span>
                            )}
                          </div>
                          <p className="mt-1 font-heading text-sm font-bold text-[#0c131f]">
                            {item.shortName}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {item.compatibility} · {item.specs}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3">
                        <p className="font-heading text-base font-bold text-[#0c131f]">
                          {formatMXN(item.price)}{' '}
                          <span className="text-[11px] font-normal text-slate-400">MXN</span>
                        </p>
                        <button
                          type="button"
                          onClick={() => onAddProduct(item)}
                          className={`inline-flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${
                            qty > 0
                              ? 'bg-[#398261] text-white'
                              : 'bg-[#0c131f] text-white hover:bg-[#284069]'
                          }`}
                        >
                          {qty > 0 ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                          <span>{qty > 0 ? `Agregado (${qty})` : 'Cotizar'}</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3.5">
              <span className="text-xs font-medium text-slate-600">
                Artículos en tu cotización: <strong>{totalSelectedItems}</strong>
              </span>
              <a
                href="#cotizar"
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-[#284069] px-5 py-2 text-xs font-bold text-white uppercase hover:bg-[#0c131f]"
              >
                Ir al cotizador
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
