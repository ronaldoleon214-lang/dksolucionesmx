import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative bg-[#f5f7fa] pb-4">
      {/* Full-Bleed Widescreen Corporate Banner */}
      <div className="relative min-h-[450px] overflow-hidden bg-[#0c131f] text-white lg:min-h-[490px]">
        <img
          src="/hero-mfp.jpg"
          alt="Equipo multifuncional empresarial Katun Arivia en oficina corporativa"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0c131f]/95 via-[#0c131f]/75 to-[#0c131f]/20"
        />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 pt-14 pb-20 sm:px-6 lg:min-h-[540px] lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.22em] text-[#8ba5d2] uppercase">
              Gestión Documental y Renta de Equipos · Katun Arivia
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.08] font-bold tracking-tight text-white sm:text-5xl lg:text-[54px]">
              Controla tus impresiones. Ahorra hasta 40% en costos.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#d1dbed] sm:text-lg">
              Renta y venta de multifuncionales de alta velocidad, consumibles de máximo rendimiento
              y soporte técnico garantizado para empresas e instituciones.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cotizar"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8ba5d2] px-7 py-3.5 text-xs font-bold tracking-wider text-[#0c131f] uppercase shadow-lg shadow-[#0c131f]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#97aed7]"
              >
                <span>Solicitar propuesta</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-[#0c131f]/40 px-7 py-3.5 text-xs font-bold tracking-wider text-white uppercase backdrop-blur-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Ver equipos y consumibles
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Elevated Proof Strip */}
      <div className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-[#0c131f]/8 sm:grid-cols-4 sm:gap-6 sm:p-6">
          <div>
            <p className="font-heading text-2xl font-bold text-[#284069]">Hasta 40%</p>
            <p className="mt-0.5 text-xs text-slate-600">Ahorro en insumos de impresión</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-[#284069]">&lt; 4 horas</p>
            <p className="mt-0.5 text-xs text-slate-600">Tiempo de respuesta técnica</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-[#284069]">+150</p>
            <p className="mt-0.5 text-xs text-slate-600">Equipos en renta activa</p>
          </div>
          <div>
            <p className="font-heading text-2xl font-bold text-[#284069]">+15 años</p>
            <p className="mt-0.5 text-xs text-slate-600">Experiencia en Tabasco y sureste</p>
          </div>
        </div>
      </div>
      {/* Kinetic Brand & Capability Marquee */}
      <div className="mt-6 overflow-hidden border-y border-slate-200 bg-white py-3">
        <div className="animate-marquee gap-8 text-xs font-bold tracking-[0.2em] text-[#284069] uppercase">
          {[
            'KATUN ARIVIA C3135 & C4165',
            '•',
            'RENTA SIN DESCAPITALIZACIÓN',
            '•',
            'MONITOREO INTELIGENTE KPAX',
            '•',
            'RESPUESTA TÉCNICA < 4 HORAS',
            '•',
            'HASTA 40% DE AHORRO',
            '•',
            'VILLAHERMOSA & SURESTE',
            '•',
            'KATUN ARIVIA C3135 & C4165',
            '•',
            'RENTA SIN DESCAPITALIZACIÓN',
            '•',
            'MONITOREO INTELIGENTE KPAX',
            '•',
            'RESPUESTA TÉCNICA < 4 HORAS',
            '•',
            'HASTA 40% DE AHORRO',
            '•',
            'VILLAHERMOSA & SURESTE',
            '•',
          ].map((text, i) => (
            <span
              key={i}
              className={text === '•' ? 'text-[#8ba5d2]' : 'whitespace-nowrap'}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
