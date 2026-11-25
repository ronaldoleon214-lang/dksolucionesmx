export const BRAND = {
  name: 'DK Soluciones',
  legalName: 'Distribuidora de Kopiadoras de Tabasco S.A.S. de C.V.',
  tagline: 'Calidad que imprime confianza',
  whatsappNumber: '529932084747',
  whatsappDisplay: '993 208 4747',
  phoneDisplay: '993 658 1877',
  email: 'ventas.mostrador@dksolucionesmx.com',
  address: 'Pagés Llergo 126 Planta Baja (PB), Col. Centro, C.P. 86000, Villahermosa, Tabasco, México',
  logoUrl:
    'https://storage.e.jimdo.com/cdn-cgi/image/quality=85%2Cfit=scale-down%2Cformat=auto%2Ctrim=0;0;0;0%2Cwidth=320%2Cheight=132/image/517499807/6ec5bd76-78b6-4267-9f10-e91f013c6eb7.png',
  heroImageUrl:
    'https://storage.e.jimdo.com/cdn-cgi/image/quality=85%2Cfit=scale-down%2Cformat=auto%2Ctrim=0;679;211;640%2Cwidth=1024%2Cheight=609/image/517381037/3ac5563b-b8d7-4cc0-b8c1-9bfc490167c4.png',
  resultsImageUrl:
    'https://storage.e.jimdo.com/cdn-cgi/image/quality=85%2Cfit=scale-down%2Cformat=auto%2Ctrim=0;0;137;0%2Cwidth=1024%2Cheight=609/image/517385686/c6a81600-f69f-4ed8-8371-b9a7d4f63941.jpg',
  aboutImageUrl:
    'https://storage.e.jimdo.com/cdn-cgi/image/quality=85%2Cfit=scale-down%2Cformat=auto%2Ctrim=0;417;0;577%2Cwidth=878%2Cheight=1024/image/518000009/ba8e9a59-59fd-4f05-8bd9-2874bc5818a4.png',
  kpaxGraphicUrl:
    'https://storage.e.jimdo.com/cdn-cgi/image/quality=85%2Cfit=scale-down%2Cformat=auto%2Ctrim=13;0;13;0%2Cwidth=320%2Cheight=107/image/517504175/c2f696b6-6bf4-41a4-a696-f9ab7465de3d.png',
  officePrintUrl:
    'https://storage.e.jimdo.com/cdn-cgi/image/quality=85%2Cfit=scale-down%2Cformat=auto%2Ctrim=91;0;144;0%2Cwidth=640%2Cheight=222/image/517500510/961efa71-a6b9-445f-81df-35e848c2c9ad.jpg',
};

export function buildWhatsAppUrl(message?: string): string {
  const text =
    message ??
    'Hola DK Soluciones, me interesa obtener información y cotización sobre sus servicios de impresión.';
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const METRICS = [
  {
    value: 'Hasta 40%',
    label: 'Ahorro en insumos',
    detail: 'Con consumibles compatibles y originales Katun Arivia de alto rendimiento.',
  },
  {
    value: '< 4 horas',
    label: 'Respuesta técnica',
    detail: 'Atención remota y presencial sin costo adicional en tu póliza.',
  },
  {
    value: '+150',
    label: 'Equipos en renta activa',
    detail: 'Operando en empresas privadas e instituciones públicas.',
  },
  {
    value: '+15 años',
    label: 'De experiencia',
    detail: 'Respaldo comprobado en Tabasco y todo el sureste mexicano.',
  },
];

export const SERVICES = [
  {
    id: 'renta',
    serviceKey: 'Renta de equipos multifuncionales',
    badge: 'Más solicitado',
    title: 'Renta de Equipos y Soluciones Integrales',
    subtitle: 'Equipo + insumos + mantenimiento + soporte técnico en una sola cuota mensual.',
    description:
      'Olvídate de inversiones iniciales altas o fallas inesperadas. Configuramos un plan a la medida de tu volumen de impresión sin letras chiquitas.',
    bullets: [
      'Planes flexibles según tu volumen mensual',
      'Consumibles y refacciones incluidos en tu renta',
      'Soporte remoto y presencial en menos de 4 horas',
      'Capacitación y seguimiento continuo para tu equipo',
    ],
    cta: 'Cotizar renta de equipos',
  },
  {
    id: 'mantenimiento',
    serviceKey: 'Mantenimiento y reparación',
    badge: 'Continuidad operativa',
    title: 'Mantenimiento Preventivo y Correctivo',
    subtitle: 'Diagnóstico y reparación especializada para que tu operación nunca se detenga.',
    description:
      'Prolongamos la vida útil de tus multifuncionales propios o en flota con refacciones certificadas y reportes técnicos por equipo.',
    bullets: [
      'Limpieza preventiva y calibración profesional',
      'Cambio de fusores, tambores, rodillos y reveladores',
      'Reportes de diagnóstico y seguimiento por equipo',
      'Atención urgente presencial o remota',
    ],
    cta: 'Solicitar servicio técnico',
  },
  {
    id: 'venta',
    serviceKey: 'Venta de equipos y consumibles Arivia',
    badge: 'Catálogo Katun Arivia',
    title: 'Venta de Equipos y Consumibles',
    subtitle: 'Multifuncionales Katun Arivia de alta velocidad y tóner de alto rendimiento.',
    description:
      'Adquiere equipos robustos con SSD, resolución 1,200 x 2,400 DPI y garantiza el abasto de cartuchos, unidades de revelado y fusores.',
    bullets: [
      'Equipos Arivia C3135 (35 PPM) y C4165 (65 PPM)',
      'Tóner de hasta 52,000 páginas de rendimiento',
      'Unidades de revelado y fusor con entrega inmediata',
      'Asesoría para elegir el equipo ideal por volumen',
    ],
    cta: 'Ver catálogo Arivia',
    scrollToId: 'catalogo',
  },
];

export const KPAX_FEATURES = [
  {
    title: 'Monitoreo inteligente con KPAX',
    description:
      'Vigilamos tus equipos en tiempo real: consumo de tóner y papel, alertas tempranas de fallas técnicas y estadísticas de eficiencia de toda tu flota.',
  },
  {
    title: 'Abasto automático de consumibles',
    description:
      'Nos anticipamos a tus necesidades. Cuando el nivel de tóner baja, programamos el envío antes de que te quedes sin imprimir.',
  },
  {
    title: 'Mantenimiento y soporte completo',
    description:
      'Preventivo, correctivo, refacciones y calibraciones incluidos para garantizar la continuidad operativa de tu oficina.',
  },
  {
    title: 'Descuentos exclusivos del 15%',
    description:
      'Los miembros activos de Soluciones DK obtienen hasta 15% de descuento en consumibles y tarifas preferenciales en servicios.',
  },
];
