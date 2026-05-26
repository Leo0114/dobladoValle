// HOME PAGE DATA

// ── Hero Slides ──
export interface HeroSlide {
  title: string;
  description: string;
  cta: { label: string; href: string };
  imagePath: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: "Tu ferretería de confianza",
    description:
      "Más de 30 años surtiendo productos de calidad para construcción, reparación y mantenimiento.",
    cta: { label: "Ver productos", href: "/productos" },
    imagePath: "/src/assets/images/sanPedro/Mostrador matriz 1.avif",
  },
  {
    title: "Las mejores marcas del mercado",
    description:
      "Trabajamos con Dewalt, Makita, Milwaukee, Truper, Urrea y muchas más.",
    cta: { label: "Conocer marcas", href: "/productos" },
    imagePath: "/src/assets/images/sanPedro/Mostrador matriz 2.avif",
  },
  {
    title: "Dos sucursales para servirte",
    description:
      "Visítanos en nuestras sucursales San Pedro y San Jemo. Atención personalizada garantizada.",
    cta: { label: "Ubicaciones", href: "/contacto" },
    imagePath: "/src/assets/images/sanJemo/Sucursal San Jemo.avif",
  },
];

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
  href: string;
}

export const categoriesData = {
  tag: "Catálogo",
  title: "Categorías de productos",
  description:
    "Encuentra todo lo que necesitas para tu proyecto en nuestras categorías especializadas.",
  items: [
    { name: "Herramientas", href: "/productos" },
    { name: "Pinturas", href: "/productos" },
    { name: "Material Eléctrico", href: "/productos" },
    { name: "Material de Plomería", href: "/productos" },
    { name: "Adhesivos", href: "/productos" },
    { name: "Seguridad Industrial", href: "/productos" },
    { name: "Iluminación", href: "/productos" },
    { name: "Construcción", href: "/productos" },
    { name: "Abrasivos", href: "/productos" },
    { name: "Impermeabilizantes", href: "/productos" },
  ] as CategoryItem[],
};

// ── Brands (real image files) ──
export interface BrandItem {
  name: string;
  image: string;
}

export const brandsData = {
  tag: "Marcas aliadas",
  title: "Trabajamos con las mejores marcas",
  description:
    "Contamos con productos de las marcas más reconocidas del ramo ferretero.",
  items: [
    { name: "3M", image: "3M.jpg" },
    { name: "Argos", image: "Argos.jpg" },
    { name: "Armor", image: "Armor.jpg" },
    { name: "Berel", image: "Berel.jpg" },
    { name: "Biolim", image: "Biolim.jpg" },
    { name: "ByP", image: "ByP.jpg" },
    { name: "Coflex", image: "Coflex.jpg" },
    { name: "Cuprum", image: "Cuprum.jpg" },
    { name: "Dewalt", image: "Dewalt.jpg" },
    { name: "Dexter", image: "Dexter.jpg" },
    { name: "Dica", image: "Dica.jpg" },
    { name: "Doal", image: "Doal.jpg" },
    { name: "Eagle Cooper", image: "Eagle-Cooper.jpg" },
    { name: "Foset", image: "Foset.jpg" },
    { name: "Handy Home", image: "Handy Home.jpg" },
    { name: "Helvex", image: "Helvex.jpg" },
    { name: "Hermex", image: "Hermex.jpg" },
    { name: "Igesa", image: "Igesa.jpg" },
    { name: "Impac", image: "Impac.jpg" },
    { name: "Magg", image: "Magg.jpg" },
    { name: "Makita", image: "Makita.jpg" },
    { name: "Milwaukee", image: "Milwaukee.jpg" },
    { name: "Osram", image: "Osram.jpg" },
    { name: "Phillips", image: "Phillips.jpg" },
    { name: "Rugo", image: "Rugo.jpg" },
    { name: "Sayer", image: "Sayer.jpg" },
    { name: "Square D", image: "Square D.jpg" },
    { name: "Tecnolite", image: "Tecnolite.jpg" },
    { name: "Truper", image: "Truper.jpg" },
    { name: "Tunix", image: "Tunix.jpg" },
    { name: "Urrea", image: "Urrea.jpg" },
    { name: "Volteck", image: "Volteck.jpg" },
    { name: "Xito", image: "xito.jpg" },
  ] as BrandItem[],
};

// ── Top Products (featured brands for slider) ──
export const topProductsData = {
  tag: "Destacados",
  title: "Productos que marcan la diferencia",
  description: "Las marcas más solicitadas por nuestros clientes.",
  items: [
    { name: "Dewalt", image: "Dewalt.jpg", category: "Herramientas" },
    { name: "Makita", image: "Makita.jpg", category: "Herramientas" },
    { name: "Milwaukee", image: "Milwaukee.jpg", category: "Herramientas" },
    { name: "Truper", image: "Truper.jpg", category: "Herramientas" },
    { name: "Urrea", image: "Urrea.jpg", category: "Herramientas" },
    { name: "Berel", image: "Berel.jpg", category: "Pinturas" },
    { name: "Sayer", image: "Sayer.jpg", category: "Pinturas" },
    { name: "Tecnolite", image: "Tecnolite.jpg", category: "Iluminación" },
    { name: "Helvex", image: "Helvex.jpg", category: "Plomería" },
    { name: "Coflex", image: "Coflex.jpg", category: "Plomería" },
    { name: "Volteck", image: "Volteck.jpg", category: "Eléctrico" },
    { name: "3M", image: "3M.jpg", category: "Adhesivos" },
  ],
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
};

// ── Branches ──
export interface BranchItem {
  name: string;
  address: string;
  schedule: string;
  whatsappHref: string;
  phoneHref: string;
  images: string[];
  mapEmbedUrl?: string;
}

export const branchesData = {
  tag: "Sucursales",
  title: "Encuéntranos cerca de ti",
  description: "Visítanos en cualquiera de nuestras sucursales.",
  items: [
    {
      name: "Matriz San Pedro",
      address: "San Pedro, Nuevo León",
      schedule: "Lun - Sáb: 8:00 AM - 7:00 PM",
      whatsappHref: "https://wa.me/5551234567",
      phoneHref: "tel:+525551234567",
      images: [
        "/src/assets/images/sanPedro/Matriz San Pedro.avif",
        "/src/assets/images/sanPedro/Mostrador matriz 1.avif",
      ],
      mapEmbedUrl: "",
    },
    {
      name: "Sucursal San Jemo",
      address: "San Jerónimo, Nuevo León",
      schedule: "Lun - Sáb: 8:00 AM - 7:00 PM",
      whatsappHref: "https://wa.me/5559876543",
      phoneHref: "tel:+525559876543",
      images: [
        "/src/assets/images/sanJemo/Sucursal San Jemo.avif",
        "/src/assets/images/sanJemo/Mostrador San Jemo 2.avif",
      ],
      mapEmbedUrl: "",
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
      action: "Escríbenos ahora",
      href: "https://wa.me/5551234567",
    },
    {
      icon: "phone",
      label: "Llamar",
      action: "Habla con un asesor",
      href: "tel:+525551234567",
    },
    {
      icon: "email",
      label: "Email",
      action: "Envíanos un correo",
      href: "mailto:contacto@dobladovalle.com",
    },
  ],
};
