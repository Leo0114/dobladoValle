import type { ImageMetadata } from "astro";
import {
  sanPedro1,
  sanPedro2,
  sanJemo1,
  sanJemo2,
  treesm,
  argos,
  armor,
  berel,
  biolim,
  byp,
  coflex,
  cuprum,
  dewalt,
  dexter,
  dica,
  doal,
  eagleCooper,
  foset,
  handyHome,
  helvex,
  hermex,
  igesa,
  impac,
  magg,
  makita,
  milwaukee,
  osram,
  phillips,
  rugo,
  sayer,
  squareD,
  tecnolite,
  truper,
  tunix,
  urrea,
  volteck,
  xito,
} from "./proveedores";

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
      "Más de 20 años surtiendo productos de calidad para construcción, reparación y mantenimiento.",
    cta: { label: "Ver productos", href: "/productos" },
    imagePath: "/images/matriz4.avif",
  },
  {
    title: "Las mejores marcas del mercado",
    description:
      "Trabajamos con Dewalt, Makita, Milwaukee, Truper, Urrea y muchas más.",
    cta: { label: "Conocer marcas", href: "/productos" },
    imagePath: "/images/matriz2.avif",
  },
  {
    title: "Dos sucursales para servirte",
    description:
      "Visítanos en nuestras sucursales San Pedro y San Jemo. Atención personalizada garantizada.",
    cta: { label: "Ubicaciones", href: "/contacto" },
    imagePath: "/images/jemo.avif",
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
      description: "Reparación y fabricación de telas mosquiteras a la medida.",
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
  image: ImageMetadata;
}

export const brandsData = {
  tag: "Marcas aliadas",
  title: "Trabajamos con las mejores marcas",
  description:
    "Contamos con productos de las marcas más reconocidas del ramo ferretero.",
  items: [
    { name: "3M", image: treesm },
    { name: "Argos", image: argos },
    { name: "Armor", image: armor },
    { name: "Berel", image: berel },
    { name: "Biolim", image: biolim },
    { name: "ByP", image: byp },
    { name: "Coflex", image: coflex },
    { name: "Cuprum", image: cuprum },
    { name: "Dewalt", image: dewalt },
    { name: "Dexter", image: dexter },
    { name: "Dica", image: dica },
    { name: "Doal", image: doal },
    { name: "Eagle Cooper", image: eagleCooper },
    { name: "Foset", image: foset },
    { name: "Handy Home", image: handyHome },
    { name: "Helvex", image: helvex },
    { name: "Hermex", image: hermex },
    { name: "Igesa", image: igesa },
    { name: "Impac", image: impac },
    { name: "Magg", image: magg },
    { name: "Makita", image: makita },
    { name: "Milwaukee", image: milwaukee },
    { name: "Osram", image: osram },
    { name: "Phillips", image: phillips },
    { name: "Rugo", image: rugo },
    { name: "Sayer", image: sayer },
    { name: "Square D", image: squareD },
    { name: "Tecnolite", image: tecnolite },
    { name: "Truper", image: truper },
    { name: "Tunix", image: tunix },
    { name: "Urrea", image: urrea },
    { name: "Volteck", image: volteck },
    { name: "Éxito", image: xito },
  ] as BrandItem[],
};

// ── Top Products (featured brands for slider) ──
export const topProductsData = {
  tag: "Destacados",
  title: "Productos que marcan la diferencia",
  description: "Las marcas más solicitadas por nuestros clientes.",
  items: [
    { name: "Dewalt", image: dewalt, category: "Herramientas" },
    { name: "Makita", image: makita, category: "Herramientas" },
    { name: "Milwaukee", image: milwaukee, category: "Herramientas" },
    { name: "Truper", image: truper, category: "Herramientas" },
    { name: "Urrea", image: urrea, category: "Herramientas" },
    { name: "Berel", image: berel, category: "Pinturas" },
    { name: "Sayer", image: sayer, category: "Pinturas" },
    { name: "Tecnolite", image: tecnolite, category: "Iluminación" },
    { name: "Helvex", image: helvex, category: "Plomería" },
    { name: "Coflex", image: coflex, category: "Plomería" },
    { name: "Volteck", image: volteck, category: "Eléctrico" },
    { name: "3M", image: treesm, category: "Adhesivos" },
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
  image: sanPedro2,
};

// ── Branches ──
export interface BranchItem {
  name: string;
  address: string;
  schedule: string;
  whatsappHref: string;
  phoneHref: string;
  images: ImageMetadata[];
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
      images: [sanPedro1, sanPedro2],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3930147879655!2d-100.39207569999999!3d25.6582635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bd82d620c2e7%3A0x67ba20f874031afe!2sDoblado%20Valle!5e0!3m2!1ses-419!2smx!4v1779838839762!5m2!1ses-419!2smx",
    },
    {
      name: "Sucursal San Jemo",
      address: "San Jerónimo, Nuevo León",
      schedule: "Lun - Sáb: 8:00 AM - 7:00 PM",
      whatsappHref: "https://wa.me/5559876543",
      phoneHref: "tel:+525559876543",
      images: [sanJemo1, sanJemo2],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.647718136275!2d-100.3767643163235!3d25.682970119132822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629617f953267f%3A0xbd7c1ca0bb5a85c7!2sDoblado%20Valle!5e0!3m2!1ses-419!2smx!4v1779838936546!5m2!1ses-419!2smx",
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
