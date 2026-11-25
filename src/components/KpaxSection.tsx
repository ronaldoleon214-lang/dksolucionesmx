import { ArrowRight, BellRing, Percent, RefreshCw, ShieldCheck } from 'lucide-react';

export function KpaxSection() {
  return (
    <section id="kpax" className="relative overflow-hidden bg-[#0c131f] py-10 text-white sm:py-12">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-[#8ba5d2] uppercase">
              Programa Soluciones DK · Gestión = Ahorro
            </p>
            <h2 className="mt-1.5 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Monitoreo KPAX: tu flota de impresión en piloto automático.
            </h2>
          </div>
          <a
            href="#cotizar"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#8ba5d2] px-6 py-3 text-xs font-bold tracking-wider text-[#0c131f] uppercase transition-all hover:bg-[#97aed7]"
          >
            <span>Activar Soluciones DK</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Compact Bento Grid — Zero empty voids inside cards */}
        <div className="mt-7 grid gap-4 md:grid-cols-12">
          {/* Photo Tile */}
          <div className="relative overflow-hidden rounded-2xl border border-white/15 md:col-span-5">
            <img
              src="/kpax-monitoring.jpg"
              alt="Especialista monitoreando flota de impresión con KPAX"
              className="h-64 w-full object-cover object-center md:h-full md:min-h-[260px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0c131f] via-[#0c131f]/75 to-transparent p-5">
              <p className="font-heading text-base font-bold text-white">
                Visibilidad total en tiempo real
              </p>
              <p className="mt-1 text-xs text-[#d1dbed]">
                Control de consumo de tóner, papel y alertas preventivas por equipo.
              </p>
            </div>
          </div>

          {/* Right Compact Feature Tiles */}
          <div className="grid gap-4 sm:grid-cols-2 md:col-span-7">
            <div className="rounded-2xl border border-[#8ba5d2]/35 bg-gradient-to-br from-[#284069] to-[#131e30] p-5">
              <div className="flex items-center justify-between">
                <span className="font-heading text-3xl font-bold text-white">15%</span>
                <Percent className="h-6 w-6 text-[#8ba5d2]" />
              </div>
              <p className="mt-2 font-heading text-sm font-bold text-[#8ba5d2]">
                Descuento exclusivo en consumibles
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#d1dbed]">
                Tarifas preferenciales en tóner y refacciones para miembros activos del programa.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#131e30] p-5 transition-colors hover:border-[#8ba5d2]/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <RefreshCw className="h-5 w-5" />
              </div>
              <p className="mt-3 font-heading text-sm font-bold text-white">
                Abasto automático de tóner
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#9ea1a5]">
                Nos anticipamos a tus necesidades. Antes de que se agote tu cartucho, ya va en
                camino.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#131e30] p-5 transition-colors hover:border-[#8ba5d2]/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-fuchsia-400/15 text-fuchsia-400">
                <BellRing className="h-5 w-5" />
              </div>
              <p className="mt-3 font-heading text-sm font-bold text-white">
                Alertas tempranas de fallas
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#9ea1a5]">
                Detectamos códigos de error y desgaste de piezas antes de que detengan tu oficina.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#131e30] p-5 transition-colors hover:border-[#8ba5d2]/40">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#398261]/20 text-[#6ee7b7]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="mt-3 font-heading text-sm font-bold text-white">
                Equipos propios o en renta
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#9ea1a5]">
                Compatible con impresoras pequeñas y multifuncionales en red de tu empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
