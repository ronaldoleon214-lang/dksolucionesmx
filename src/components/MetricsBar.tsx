import { METRICS } from '../data/siteContent';

export function MetricsBar() {
  return (
    <section
      aria-label="Resultados de DK Soluciones"
      className="border-y border-white/10 bg-[#000000] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#8ba5d2] uppercase">
              Resultados que hablan por nosotros
            </p>
            <h2 className="mt-1 font-heading text-2xl font-bold text-white sm:text-3xl">
              Continuidad operativa y ahorro comprobado
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#9ea1a5]">
            Alto nivel de recompra y renovación en empresas privadas e instituciones públicas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-[#0c131f] p-6 transition-colors hover:border-[#8ba5d2]/40"
            >
              <p className="font-heading text-3xl font-bold text-[#8ba5d2]">{item.value}</p>
              <p className="mt-1 font-heading text-base font-semibold text-white">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#9ea1a5]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
