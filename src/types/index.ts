export interface ProductFeature {
  id: string;
  name: string;
  description: string;
}

export interface MockupConfig {
  bgColor: string;
  dotColors: string[];
  url: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  rows: Array<{
    id: string;
    avatarColor: string;
    statusText: string;
    statusBg: string;
    statusColor: string;
  }>;
}

export interface ProductPricingConfig {
  /** 'saas' → "SaaS mensual" | 'one-time' → "Compra única" */
  type: 'saas' | 'one-time';
  /** Texto visible en el badge de tipo */
  badgeLabel: string;
  /** Si es true se muestra el badge "Más popular" y borde acento */
  isMostPopular?: boolean;
  /** Precio sin descuento, ej. "S/. 139" */
  regularPrice: string;
  /** Precio con descuento, ej. "S/. 99" */
  discountPrice: string;
  /** Unidad del precio, ej. "/ mes". Omitir si es compra única. */
  priceUnit?: string;
  /** Porcentaje de ahorro, ej. "-28%" */
  discountPercent: string;
  /** Dominio de la plataforma, ej. "resto.reinerdev.com". Omitir si no aplica. */
  platformUrl?: string;
  /** URL que se muestra en la barra del mockup de precios, ej. "resto.reinerdev.com/mesas" */
  mockupUrl: string;
  /** Lista de ítems incluidos en el precio */
  includes: string[];
  /** Nota al pie del precio */
  priceNote: string;
  /**
   * Ruta a la captura de pantalla real del sistema.
   * Ej: '/images/products/pharmacy-preview.png'
   * Cuando es null se muestra el placeholder con el ícono del producto.
   */
  previewImage: string | null;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  features: ProductFeature[];
  icon: string;
  iconBg: string;
  iconBorder: string;
  themeColor: string;
  mockupConfig?: MockupConfig;
  pricing?: ProductPricingConfig;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  icon: string;
  problem: string;
  solution: string;
  result: string;
  resultBadge: string;
  resultBadgeStyle: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Metric {
  id: string;
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}
