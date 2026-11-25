import { ArrowRight, Check, Layers, Printer, Wrench } from 'lucide-react';
import { SERVICES } from '../data/siteContent';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICE_ICONS = [Printer, Wrench, Layers];

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="servicios" className="border-b border-slate-200 bg-white py-12 text-[#0c131f] sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <span className="inline-block rounded-full bg-[#284069]/10 px-3 py-1 text-xs font-bold tracking-wider text-[#284069] uppercase">
                Servicios &amp; Renta Empresarial
              </span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#0c131f] sm:text-4xl">
                Todo lo que tu oficina necesita para imprimir sin fricciones.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Ya sea que busques rentar multifuncionales sin descapitalizarte, mantener tu flota
                actual o surtir tóner de alto rendimiento, nos encargamos de la operación completa.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-md shadow-slate-200/60">
                <img
                  src="/services-office.jpg"
                  alt="Equipo de oficina revisando documentos junto a multifuncional"
                  className="h-52 w-full object-cover object-center"
                />
                <div className="bg-gradient-to-r from-[#0c131f] to-[#284069] px-5 py-4 text-white">
                  <p className="text-xs font-bold tracking-wider text-[#8ba5d2] uppercase">
                    Garantía de continuidad
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#d1dbed]">
                    Atención técnica remota y presencial en menos de 4 horas sin costo adicional.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Numbered Cards */}
          <div className="space-y-4 lg:col-span-7">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx] ?? Printer;
              return (
                <article
                  key={service.id}
                  className="group rounded-2xl border border-slate-200 bg-[#f8fafd] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8ba5d2] hover:bg-white hover:shadow-lg hover:shadow-[#284069]/8 sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#284069] text-white shadow-xs transition-colors group-hover:bg-[#0c131f]">
                        <Icon className="h-5 w-5 text-[#8ba5d2]" />
                      </div>
                      <div>
                        <span className="font-heading text-xs font-bold tracking-wider text-[#284069] uppercase">
                          0{idx + 1} · {service.badge}
                        </span>
                        <h3 className="font-heading text-xl font-bold text-[#0c131f]">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-[#284069]">{service.subtitle}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-slate-200/80 pt-4 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-xs font-medium text-slate-700 sm:text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#398261]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    {service.scrollToId ? (
                      <a
                        href={`#${service.scrollToId}`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#284069] px-5 py-2 text-xs font-bold tracking-wider text-[#284069] uppercase transition-colors hover:bg-[#284069] hover:text-white"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <a
                        href="#cotizar"
                        onClick={() => onSelectService(service.serviceKey)}
                        className="inline-flex items-center gap-2 rounded-full bg-[#0c131f] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-[#284069]"
                      >
                        <span>{service.cta}</span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#8ba5d2]" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
