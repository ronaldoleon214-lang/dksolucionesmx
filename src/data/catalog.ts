export type ProductCategory =
  | 'equipos'
  | 'toner-2100'
  | 'toner-3100'
  | 'revelado'
  | 'fusor';

export type TonerColor = 'K' | 'C' | 'M' | 'Y' | 'N/A';

export interface CatalogProduct {
  sku: string;
  name: string;
  shortName: string;
  category: ProductCategory;
  categoryLabel: string;
  compatibility: string;
  specs: string;
  price: number;
  color: TonerColor;
  featured?: boolean;
}

export const CATEGORY_FILTERS: { id: 'all' | ProductCategory; label: string }[] = [
  { id: 'all', label: 'Todos (15)' },
  { id: 'equipos', label: 'Equipos Multifuncionales' },
  { id: 'toner-3100', label: 'Tóner C3135–C4165' },
  { id: 'toner-2100', label: 'Tóner C2125/C2130' },
  { id: 'revelado', label: 'Unidades de Revelado' },
  { id: 'fusor', label: 'Unidad de Fusor' },
];

export const KATUN_CATALOG: CatalogProduct[] = [
  {
    sku: '602K1012',
    name: 'KATUN ARIVIA C3135 — Multifuncional Láser Color 35 PPM',
    shortName: 'Katun Arivia C3135',
    category: 'equipos',
    categoryLabel: 'Equipo Multifuncional',
    compatibility: 'Oficinas medianas · Hasta 7,000 págs/mes',
    specs:
      '35 PPM, 128 GB SSD y 4 GB RAM. Resolución mejorada 1,200 x 2,400 DPI. 4 bandejas de papel + bandeja manual.',
    price: 225000,
    color: 'N/A',
    featured: true,
  },
  {
    sku: '602K1018',
    name: 'KATUN ARIVIA C4165 — Multifuncional Láser Color 65 PPM',
    shortName: 'Katun Arivia C4165',
    category: 'equipos',
    categoryLabel: 'Equipo Multifuncional',
    compatibility: 'Alto volumen · Hasta 15,000 págs/mes',
    specs:
      '65 PPM, 128 GB SSD y 4 GB RAM. Resolución mejorada 1,200 x 2,400 DPI. 4 bandejas de papel + bandeja manual.',
    price: 285000,
    color: 'N/A',
    featured: true,
  },
  {
    sku: '331K1004K',
    name: 'Cartucho Negro Arivia C2125 / C2130',
    shortName: 'Tóner Negro C2125/C2130',
    category: 'toner-2100',
    categoryLabel: 'Tóner C2125/C2130',
    compatibility: 'Arivia C2125 / C2130',
    specs: 'Rendimiento de 30,000 páginas al 5% de cobertura.',
    price: 1565,
    color: 'K',
  },
  {
    sku: '331K1005C',
    name: 'Cartucho Cian Arivia C2125 / C2130',
    shortName: 'Tóner Cian C2125/C2130',
    category: 'toner-2100',
    categoryLabel: 'Tóner C2125/C2130',
    compatibility: 'Arivia C2125 / C2130',
    specs: 'Rendimiento de 22,000 páginas al 5% de cobertura.',
    price: 3011,
    color: 'C',
  },
  {
    sku: '331K1006M',
    name: 'Cartucho Magenta Arivia C2125 / C2130',
    shortName: 'Tóner Magenta C2125/C2130',
    category: 'toner-2100',
    categoryLabel: 'Tóner C2125/C2130',
    compatibility: 'Arivia C2125 / C2130',
    specs: 'Rendimiento de 22,000 páginas al 5% de cobertura.',
    price: 3011,
    color: 'M',
  },
  {
    sku: '331K1007Y',
    name: 'Cartucho Amarillo Arivia C2125 / C2130',
    shortName: 'Tóner Amarillo C2125/C2130',
    category: 'toner-2100',
    categoryLabel: 'Tóner C2125/C2130',
    compatibility: 'Arivia C2125 / C2130',
    specs: 'Rendimiento de 22,000 páginas al 5% de cobertura.',
    price: 3011,
    color: 'Y',
  },
  {
    sku: '331K1009K',
    name: 'Cartucho Negro Arivia C3135 / C3145 / C4155 / C4165',
    shortName: 'Tóner Negro C3135–C4165',
    category: 'toner-3100',
    categoryLabel: 'Tóner C3135–C4165',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Alto rendimiento de 52,000 páginas al 5% de cobertura.',
    price: 2255,
    color: 'K',
  },
  {
    sku: '331K1010C',
    name: 'Cartucho Cian Arivia C3135 / C3145 / C4155 / C4165',
    shortName: 'Tóner Cian C3135–C4165',
    category: 'toner-3100',
    categoryLabel: 'Tóner C3135–C4165',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Rendimiento de 26,000 páginas al 5% de cobertura.',
    price: 3175,
    color: 'C',
  },
  {
    sku: '331K1011M',
    name: 'Cartucho Magenta Arivia C3135 / C3145 / C4155 / C4165',
    shortName: 'Tóner Magenta C3135–C4165',
    category: 'toner-3100',
    categoryLabel: 'Tóner C3135–C4165',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Rendimiento de 26,000 páginas al 5% de cobertura.',
    price: 3175,
    color: 'M',
  },
  {
    sku: '331K1012Y',
    name: 'Cartucho Amarillo Arivia C3135 / C3145 / C4155 / C4165',
    shortName: 'Tóner Amarillo C3135–C4165',
    category: 'toner-3100',
    categoryLabel: 'Tóner C3135–C4165',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Rendimiento de 26,000 páginas al 5% de cobertura.',
    price: 3175,
    color: 'Y',
  },
  {
    sku: '677K02250K',
    name: 'Unidad de Revelado Color Negro para Arivia',
    shortName: 'Unidad Revelado Negro',
    category: 'revelado',
    categoryLabel: 'Unidad de Revelado',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Componente original de revelado para máxima definición en negro.',
    price: 2814,
    color: 'K',
  },
  {
    sku: '677K02260K',
    name: 'Unidad de Revelado Color Cian para Arivia',
    shortName: 'Unidad Revelado Cian',
    category: 'revelado',
    categoryLabel: 'Unidad de Revelado',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Componente original de revelado para tonos cian consistentes.',
    price: 2551,
    color: 'C',
  },
  {
    sku: '677K02270K',
    name: 'Unidad de Revelado Color Magenta para Arivia',
    shortName: 'Unidad Revelado Magenta',
    category: 'revelado',
    categoryLabel: 'Unidad de Revelado',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Componente original de revelado para tonos magenta precisos.',
    price: 2551,
    color: 'M',
  },
  {
    sku: '677K02280K',
    name: 'Unidad de Revelado Color Amarillo para Arivia',
    shortName: 'Unidad Revelado Amarillo',
    category: 'revelado',
    categoryLabel: 'Unidad de Revelado',
    compatibility: 'Arivia C3135 / C3145 / C4155 / C4165',
    specs: 'Componente original de revelado para tonos amarillos vibrantes.',
    price: 2551,
    color: 'Y',
  },
  {
    sku: '126K40316K',
    name: 'Unidad de Fusor para Arivia C4155 / C4165',
    shortName: 'Unidad de Fusor C4155/C4165',
    category: 'fusor',
    categoryLabel: 'Refacción / Fusor',
    compatibility: 'Arivia C4155 / C4165',
    specs: 'Unidad de fijación térmica de larga duración para alto volumen.',
    price: 8769,
    color: 'N/A',
  },
];

export function formatMXN(amount: number): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  }).format(amount);
}
