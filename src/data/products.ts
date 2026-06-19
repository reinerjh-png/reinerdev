import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'dental',
    slug: 'dental',
    name: 'Sistema Odontológico',
    category: 'Salud & Clínicas',
    description: 'Gestión completa para clínicas dentales. Agendas, historias clínicas, presupuestos y control de pagos en un solo lugar.',
    features: [
      { id: 'f1', name: 'Gestión de pacientes' },
      { id: 'f2', name: 'Agenda de citas' },
      { id: 'f3', name: 'Historial clínico' },
      { id: 'f4', name: 'Usuarios y permisos' },
    ],
    icon: '🦷',
    iconBg: 'rgba(37, 99, 235, 0.1)',
    iconBorder: 'rgba(37, 99, 235, 0.25)',
    themeColor: '#2563eb',
    mockupConfig: {
      bgColor: '#1e3a8a', // Dark blue
      dotColors: ['#ef4444', '#fbbf24', '#22c55e'],
      url: 'dental.reinerdev.com',
      rows: [
        { id: 'r1', avatarColor: 'linear-gradient(135deg, #60a5fa, #3b82f6)', statusText: 'Confirmada', statusBg: 'rgba(34,197,94,0.15)', statusColor: '#4ade80' },
        { id: 'r2', avatarColor: 'linear-gradient(135deg, #f472b6, #ec4899)', statusText: 'En sala', statusBg: 'rgba(59,130,246,0.15)', statusColor: '#60a5fa' },
        { id: 'r3', avatarColor: 'linear-gradient(135deg, #34d399, #10b981)', statusText: 'Pendiente', statusBg: 'rgba(251,191,36,0.15)', statusColor: '#fbbf24' }
      ]
    }
  },
  {
    id: 'restaurant',
    slug: 'restaurant',
    name: 'Sistema Restaurante',
    category: 'Gastronomía',
    description: 'Controla mesas, pedidos, inventario y facturación. Cocina y sala siempre sincronizadas.',
    features: [
      { id: 'f1', name: 'Gestión de pedidos' },
      { id: 'f2', name: 'Control de mesas' },
      { id: 'f3', name: 'Módulo cocina' },
      { id: 'f4', name: 'Reportes de ventas' },
    ],
    icon: '🍽️',
    iconBg: 'rgba(249, 115, 22, 0.1)',
    iconBorder: 'rgba(249, 115, 22, 0.25)',
    themeColor: '#f97316',
    mockupConfig: {
      bgColor: '#7c2d12', // Dark orange
      dotColors: ['#ef4444', '#fbbf24', '#22c55e'],
      url: 'resto.reinerdev.com/mesas',
      rows: [
        { id: 'r1', avatarColor: '#22c55e', statusText: 'Servido', statusBg: '', statusColor: '' },
        { id: 'r2', avatarColor: '#f97316', statusText: 'Preparando', statusBg: '', statusColor: '' },
        { id: 'r3', avatarColor: '#3b82f6', statusText: 'Libre', statusBg: '', statusColor: '' }
      ]
    }
  },
  {
    id: 'gym',
    slug: 'gym',
    name: 'Sistema para Gimnasios',
    category: 'Sector Fitness',
    description: 'Administra clientes, membresías, planes y pagos de forma eficiente. Control total de asistencia en tiempo real.',
    features: [
      { id: 'f1', name: 'Membresías' },
      { id: 'f2', name: 'Control de acceso' },
      { id: 'f3', name: 'Planes recurrentes' },
      { id: 'f4', name: 'App para clientes' },
    ],
    icon: '💪',
    iconBg: 'rgba(34, 197, 94, 0.1)',
    iconBorder: 'rgba(34, 197, 94, 0.25)',
    themeColor: '#22c55e',
    mockupConfig: {
      bgColor: '#14532d', // Dark green
      dotColors: ['#ef4444', '#fbbf24', '#22c55e'],
      url: 'gym.reinerdev.com/miembros',
      rows: [
        { id: 'r1', avatarColor: '#4ade80', statusText: 'Premium', statusBg: 'rgba(34,197,94,0.15)', statusColor: '#4ade80' },
        { id: 'r2', avatarColor: '#84cc16', statusText: 'Básico', statusBg: 'rgba(251,191,36,0.15)', statusColor: '#fbbf24' },
        { id: 'r3', avatarColor: '#06b6d4', statusText: 'Activo', statusBg: 'rgba(34,197,94,0.15)', statusColor: '#4ade80' }
      ]
    }
  },
  {
    id: 'pharmacy',
    slug: 'pharmacy',
    name: 'Sistema Farmacéutico',
    category: 'Farmacia & Retail',
    description: 'Optimiza inventario, ventas y gestión de productos. Alertas de stock, reportes de ventas y control total de tu farmacia.',
    features: [
      { id: 'f1', name: 'Inventario en vivo' },
      { id: 'f2', name: 'Alertas de stock' },
      { id: 'f3', name: 'Punto de venta' },
      { id: 'f4', name: 'Lotes y vencimientos' },
    ],
    icon: '💊',
    iconBg: 'rgba(168, 85, 247, 0.1)',
    iconBorder: 'rgba(168, 85, 247, 0.25)',
    themeColor: '#a855f7',
    mockupConfig: {
      bgColor: '#4c1d95', // Dark purple
      dotColors: ['#ef4444', '#fbbf24', '#22c55e'],
      url: 'pharmacy.reinerdev.com/inventario',
      rows: [
        { id: 'r1', avatarColor: '#a855f7', statusText: 'Stock: 248', statusBg: 'rgba(34,197,94,0.15)', statusColor: '#4ade80' },
        { id: 'r2', avatarColor: '#ec4899', statusText: 'Stock bajo', statusBg: 'rgba(239,68,68,0.15)', statusColor: '#f87171' },
        { id: 'r3', avatarColor: '#8b5cf6', statusText: 'Disponible', statusBg: 'rgba(34,197,94,0.15)', statusColor: '#4ade80' }
      ]
    }
  }
];
