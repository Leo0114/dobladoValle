// ═══════════════════════════════════════════
// PRODUCTS PAGE DATA
// ═══════════════════════════════════════════

import type { ImageMetadata } from "astro";
import { sanPedro1 } from "./proveedores";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ── Hero ──
export const productsHeroData = {
  tag: "Catálogo",
  title: "Nuestros productos",
  description:
    "Descubre nuestra amplia gama de herramientas, materiales eléctricos, pinturas y soluciones para plomería de las marcas más reconocidas a nivel mundial.",
  image: sanPedro1,
};

// ── Categories ──
export interface ProductCategory {
  name: string;
  description: string;
  image: string;
  itemCount: string;
}

export const productCategoriesData = {
  tag: "Categorías",
  title: "Todo lo que necesitas en un solo lugar",
  description:
    "Desde herramientas profesionales hasta materiales de construcción, tenemos la solución ideal para tu proyecto.",
  items: [
    {
      name: "Herramientas",
      description: "Manuales, eléctricas y neumáticas para todo tipo de trabajo.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+500 productos",
    },
    {
      name: "Pinturas",
      description: "Pinturas vinílicas, esmaltes, aerosoles y accesorios.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+300 productos",
    },
    {
      name: "Material Eléctrico",
      description: "Cables, conectores, centros de carga y más.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+400 productos",
    },
    {
      name: "Material de Plomería",
      description: "Tuberías, conexiones, válvulas y accesorios sanitarios.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+350 productos",
    },
    {
      name: "Adhesivos y Selladores",
      description: "Pegamentos, cintas, silicones y selladores especializados.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+200 productos",
    },
    {
      name: "Seguridad Industrial",
      description: "Equipos de protección personal y señalización.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+150 productos",
    },
    {
      name: "Iluminación",
      description: "Focos LED, luminarias, lámparas y accesorios.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+250 productos",
    },
    {
      name: "Construcción",
      description: "Cemento, varilla, impermeabilizantes y acabados.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+600 productos",
    },
    {
      name: "Abrasivos",
      description: "Discos de corte, lijas, piedras y ruedas abrasivas.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+180 productos",
    },
    {
      name: "Impermeabilizantes",
      description: "Sistemas de impermeabilización para techos y muros.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+100 productos",
    },
    {
      name: "Cerrajería",
      description: "Cerraduras, candados, bisagras y accesorios de seguridad.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+220 productos",
    },
    {
      name: "Jardín y Exteriores",
      description: "Herramientas de jardín, mangueras y accesorios.",
      image: PLACEHOLDER_IMAGE,
      itemCount: "+160 productos",
    },
  ] as ProductCategory[],
};

// ── Brands ──
export const productBrandsData = {
  tag: "Marcas aliadas",
  title: "Respaldados por las mejores marcas",
  description:
    "Trabajamos de la mano con fabricantes de clase mundial para garantizar la calidad de cada producto.",
  items: [
    { name: "Dewalt", tier: "premium" as const },
    { name: "Makita", tier: "premium" as const },
    { name: "Milwaukee", tier: "premium" as const },
    { name: "Bosch", tier: "premium" as const },
    { name: "Truper", tier: "standard" as const },
    { name: "Urrea", tier: "standard" as const },
    { name: "Stanley", tier: "standard" as const },
    { name: "Sherwin Williams", tier: "standard" as const },
    { name: "Comex", tier: "standard" as const },
    { name: "3M", tier: "standard" as const },
    { name: "Sika", tier: "standard" as const },
    { name: "Tecnolite", tier: "standard" as const },
    { name: "Pretul", tier: "standard" as const },
    { name: "Flexteel", tier: "standard" as const },
    { name: "Volteck", tier: "standard" as const },
  ],
};
