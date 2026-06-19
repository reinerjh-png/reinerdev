export interface ProductFeature {
  id: string;
  name: string;
}

export interface MockupConfig {
  bgColor: string;
  dotColors: string[];
  url: string;
  rows: Array<{
    id: string;
    avatarColor: string;
    statusText: string;
    statusBg: string;
    statusColor: string;
  }>;
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
