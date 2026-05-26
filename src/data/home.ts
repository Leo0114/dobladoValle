// ═══════════════════════════════════════════
// HOME PAGE DATA
// ═══════════════════════════════════════════

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1603751178823-dbb4110907a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ── Hero ──
export const heroData = {
  badge: "Más de 30 años de experiencia",
  title: "Soluciones ferreteras para construcción e industria",
  description:
    "Productos de calidad y asesoría especializada para proyectos domésticos, industriales y comerciales. Su aliado confiable en el ramo ferretero.",
  cta: {
    label: "Ver productos",
    href: "/productos",
  },
  ctaSecondary: {
    label: "Contáctanos",
    href: "/contacto",
  },
  image: PLACEHOLDER_IMAGE,
};

// ── Services ──
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const servicesData = {
  tag: "Servicios",
  title: "Soluciones integrales para tu proyecto",
  description:
    "Ofrecemos servicios especializados que complementan nuestra amplia gama de productos ferreteros.",
  items: [
    {
      icon: "paint",
      title: "Preparación de pinturas",
      description:
        "Mezcla y preparación de pinturas con igualación de colores profesional.",
    },
    {
      icon: "key",
      title: "Duplicado de llaves",
      description:
        "Duplicamos todo tipo de llaves residenciales, automotrices y de seguridad.",
    },
    {
      icon: "thread",
      title: "Elaboración de roscas",
      description:
        "Roscado de tubería y piezas metálicas con maquinaria especializada.",
    },
    {
      icon: "mesh",
      title: "Reparación de mosquiteros",
      description:
        "Reparación y fabricación de telas mosquiteras a la medida.",
    },
    {
      icon: "truck",
      title: "Servicio a domicilio",
      description:
        "Entrega de materiales y productos directamente en tu obra o proyecto.",
    },
  ] as ServiceItem[],
};

// ── Categories ──
export interface CategoryItem {
  name: string;
  image: string;
  href: string;
}

export const categoriesData = {
  tag: "Catálogo",
  title: "Categorías de productos",
  description:
    "Encuentra todo lo que necesitas para tu proyecto en nuestras categorías especializadas.",
  items: [
    { name: "Herramientas", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Pinturas", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Material Eléctrico", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Material de Plomería", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Adhesivos", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Seguridad Industrial", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Iluminación", image: PLACEHOLDER_IMAGE, href: "/productos" },
    { name: "Construcción", image: PLACEHOLDER_IMAGE, href: "/productos" },
  ] as CategoryItem[],
};

// ── Brands ──
export interface BrandItem {
  name: string;
  logo?: string;
}

export const brandsData = {
  tag: "Marcas aliadas",
  title: "Trabajamos con las mejores marcas",
  description:
    "Contamos con productos de las marcas más reconocidas en el ramo ferretero y de construcción.",
  items: [
    { name: "Dewalt" },
    { name: "Makita" },
    { name: "Truper" },
    { name: "Milwaukee" },
    { name: "Sherwin Williams" },
    { name: "Urrea" },
    { name: "3M" },
    { name: "Sika" },
    { name: "Tecnolite" },
    { name: "Stanley" },
    { name: "Bosch" },
    { name: "Comex" },
  ] as BrandItem[],
};

// ── CTA ──
export const ctaData = {
  title: "¿Listo para iniciar tu proyecto?",
  description:
    "Contamos con la experiencia y los productos que necesitas. Solicita tu cotización sin compromiso.",
  cta: {
    label: "Solicitar cotización",
    href: "/contacto",
  },
  image: PLACEHOLDER_IMAGE,
};

// ── Branches ──
export interface BranchItem {
  name: string;
  address: string;
  phone: string;
  schedule: string;
  mapPlaceholder?: string;
}

export const branchesData = {
  tag: "Sucursales",
  title: "Encuéntranos cerca de ti",
  description: "Visítanos en cualquiera de nuestras sucursales.",
  items: [
    {
      name: "Sucursal Centro",
      address: "Av. Ejemplo #123, Col. Centro, Ciudad de México, CP 06000",
      phone: "+52 (555) 123-4567",
      schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
    },
    {
      name: "Sucursal Norte",
      address: "Blvd. Industrial #456, Col. Industrial, Ciudad de México, CP 07000",
      phone: "+52 (555) 987-6543",
      schedule: "Lunes a Sábado: 8:00 AM - 7:00 PM",
    },
  ] as BranchItem[],
};

// ── Quick Contact ──
export const quickContactData = {
  tag: "Contacto",
  title: "Estamos para ayudarte",
  description: "Comunícate con nosotros por el medio que prefieras.",
  items: [
    {
      icon: "whatsapp",
      label: "WhatsApp",
      value: "+52 (555) 123-4567",
      href: "https://wa.me/5551234567",
    },
    {
      icon: "phone",
      label: "Teléfono",
      value: "+52 (555) 123-4567",
      href: "tel:+525551234567",
    },
    {
      icon: "email",
      label: "Email",
      value: "contacto@dobladovalle.com",
      href: "mailto:contacto@dobladovalle.com",
    },
  ],
};
