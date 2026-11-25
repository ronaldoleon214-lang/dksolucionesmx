import { useState } from 'react';
import { ArrowRight, Check, TrendingDown } from 'lucide-react';
import { formatMXN } from '../data/catalog';

interface SavingsCalculatorProps {
  onSelectPlan: (service: string, notes: string) => void;
}

const VOLUME_PRESETS = [
  { label: 'PyME · 3,000', value: 3000 },
  { label: 'Mediana · 8,000', value: 8000 },
  { label: 'Corporativo · 15,000', value: 15000 },
  { label: 'Alto volumen · 30,000', value: 30000 },
];

export function SavingsCalculator({ onSelectPlan }: SavingsCalculatorProps) {
  const [monthlyPages, setMonthlyPages] = useState(8000);
  const [printMode, setPrintMode] = useState<'mixto' | 'bn'>('mixto');

  const traditionalCostPerPage = printMode === 'mixto' ? 1.45 : 0.65;
  const dkCostPerPage = traditionalCostPerPage * 0.6;

  const monthlyTraditional = monthlyPages * traditionalCostPerPage;
  const monthlyDk = monthlyPages * dkCostPerPage;
  const annualSavings = (monthlyTraditional - monthlyDk) * 12;

  // Mismo criterio que el catálogo y que Victoria (agente de chat):
  // C3135 hasta 7,000 págs/mes, C4165 hasta 15,000; arriba de eso, varias C4165.
  const c4165Units = Math.ceil(monthlyPages / 15000);
  const recommendedModel =
    monthlyPages <= 7000
      ? { name: 'Katun Arivia C3135 (35 PPM)', sku: '602K1012' }
      : c4165Units === 1
        ? { name: 'Katun Arivia C4165 (65 PPM)', sku: '602K1018' }
        : { name: `${c4165Units} equipos Katun Arivia C4165 (65 PPM)`, sku: '602K1018' };

  function handleApplyRecommendation() {
    onSelectPlan(
      'Renta de equipos multifuncionales',
      `Volumen estimado: ${monthlyPages.toLocaleString('es-MX')} págs/mes (${printMode === 'mixto' ? 'Color + B/N' : 'Solo B/N'}). Equipo sugerido: ${recommendedModel.name}.`
    );
  }

  return (
    <section id="ahorro" className="border-b border-slate-200 bg-[#f5f7fa] pt-2 pb-10 text-[#0c131f] sm:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Unified Split Calculator Card — zero dead space */}
        <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70 lg:grid-cols-12">
          {/* Left: Controls & Visual Bars */}
          <div className="p-6 sm:p-8 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#284069]/10 px-3 py-1 text-xs font-bold text-[#284069]">
                <TrendingDown className="h-3.5 w-3.5" />
                <span>Calculadora de ahorro empresarial</span>
              </div>

              <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setPrintMode('mixto')}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors ${
                    printMode === 'mixto'
                      ? 'bg-[#0c131f] text-white'
                      : 'text-slate-600 hover:text-[#0c131f]'
                  }`}
                >
                  Color + B/N
                </button>
                <button
                  type="button"
                  onClick={() => setPrintMode('bn')}
                  className={`rounded-full px-3.5 py-1 text-xs font-bold transition-colors ${
                    printMode === 'bn'
                      ? 'bg-[#0c131f] text-white'
                      : 'text-slate-600 hover:text-[#0c131f]'
                  }`}
                >
                  Solo B/N
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-heading text-2xl font-bold text-[#0c131f] sm:text-3xl">
                ¿Cuánto imprimes al mes?
              </h2>
              <p className="font-heading text-2xl font-bold text-[#284069] sm:text-3xl">
                {monthlyPages.toLocaleString('es-MX')}{' '}
                <span className="text-sm font-medium text-slate-500">págs/mes</span>
              </p>
            </div>

            {/* Quick Presets */}
            <div className="mt-4 flex flex-wrap gap-2">
              {VOLUME_PRESETS.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setMonthlyPages(preset.value)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    monthlyPages === preset.value
                      ? 'bg-[#284069] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <input
                id="pages-range"
                type="range"
                min={2000}
                max={40000}
                step={1000}
                value={monthlyPages}
                onChange={(e) => setMonthlyPages(Number(e.target.value))}
                className="h-2 w-full cursor-pointer accent-[#284069]"
                aria-label="Volumen mensual de impresión"
              />
            </div>

            {/* Visual Cost Comparison Bars */}
            <div className="mt-5 space-y-3 rounded-xl bg-slate-50 p-4">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600">
                  <span>Gasto mensual sin gestión</span>
                  <span className="font-bold text-slate-800">
                    {formatMXN(monthlyTraditional)}/mes
                  </span>
                </div>
                <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-full rounded-full bg-slate-400" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-medium text-[#284069]">
                  <span>Con DK Soluciones (-40%)</span>
                  <span className="font-bold text-[#398261]">{formatMXN(monthlyDk)}/mes</span>
                </div>
                <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-[60%] rounded-full bg-gradient-to-r from-[#284069] to-[#398261] transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Integrated Dark Navy Result Panel */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-[#0c131f] via-[#14233d] to-[#284069] p-6 text-white sm:p-8 lg:col-span-5">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#8ba5d2] uppercase">
                Ahorro anual estimado
              </p>
              <p className="mt-2 font-heading text-4xl font-bold text-white sm:text-5xl">
                {formatMXN(annualSavings)}
              </p>
              <p className="mt-1 text-xs text-[#d1dbed]">
                Pesos mexicanos ahorrados al año frente a operación sin gestión.
              </p>

              <div className="mt-6 border-t border-white/15 pt-5">
                <p className="text-[11px] font-bold tracking-wider text-[#8ba5d2] uppercase">
                  Equipo ideal recomendado
                </p>
                <p className="mt-1 font-heading text-lg font-bold text-white">
                  {recommendedModel.name}
                </p>
              </div>

              <ul className="mt-4 space-y-2 text-xs text-[#d1dbed]">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#6ee7b7]" />
                  <span>Tóner de alto rendimiento y refacciones incluidas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[#6ee7b7]" />
                  <span>Monitoreo KPAX y soporte técnico &lt; 4 hrs</span>
                </li>
              </ul>
            </div>

            <a
              href="#cotizar"
              onClick={handleApplyRecommendation}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#8ba5d2] px-6 py-3.5 text-xs font-bold tracking-wider text-[#0c131f] uppercase shadow-lg transition-all hover:bg-[#97aed7]"
            >
              <span>Cotizar este plan ahora</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
