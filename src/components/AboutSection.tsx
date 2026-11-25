import { ArrowRight, Award, Building2, MapPin, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/siteContent';

export function AboutSection() {
  return (
    <section id="nosotros" className="border-b border-slate-200 bg-white py-12 text-[#0c131f] sm:py-14">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
            <img
              src="/about-team.jpg"
              alt="Asesoría especializada y soporte técnico en DK Soluciones"
              className="h-80 w-full object-cover object-center sm:h-[400px]"
            />
            <div className="absolute right-4 bottom-4 left-4 rounded-xl bg-[#0c131f]/90 p-4 text-white backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-[#8ba5d2] uppercase">
                    Oficina Central · Villahermosa
                  </p>
                  <p className="mt-0.5 text-xs text-[#d1dbed]">{BRAND.address}</p>
                </div>
                <MapPin className="h-5 w-5 shrink-0 text-[#8ba5d2]" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="inline-block rounded-full bg-[#284069]/10 px-3 py-1 text-xs font-bold tracking-wider text-[#284069] uppercase">
            Sobre DK Soluciones
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0c131f] sm:text-4xl">
            Más de 15 años respaldando la operación documental en Tabasco y el sureste.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            En <strong className="text-[#0c131f]">DK Soluciones</strong> ({BRAND.legalName}) nos
            especializamos en soluciones integrales de impresión para empresas privadas e
            instituciones públicas.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-[#f8fafd] p-4">
              <Award className="h-5 w-5 text-[#284069]" />
              <p className="mt-2 font-heading text-sm font-bold text-[#0c131f]">+15 años</p>
              <p className="mt-0.5 text-xs text-slate-600">Trayectoria comprobada en el sureste.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafd] p-4">
              <Building2 className="h-5 w-5 text-[#284069]" />
              <p className="mt-2 font-heading text-sm font-bold text-[#0c131f]">Sector Público y Privado</p>
              <p className="mt-0.5 text-xs text-slate-600">Planes a la medida de cada flota.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-[#f8fafd] p-4">
              <ShieldCheck className="h-5 w-5 text-[#284069]" />
              <p className="mt-2 font-heading text-sm font-bold text-[#0c131f]">Soporte Cercano</p>
              <p className="mt-0.5 text-xs text-slate-600">Atención directa en Villahermosa.</p>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="#cotizar"
              className="inline-flex items-center gap-2 rounded-full bg-[#0c131f] px-6 py-3.5 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-[#284069]"
            >
              <span>Solicitar diagnóstico sin costo</span>
              <ArrowRight className="h-4 w-4 text-[#8ba5d2]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
