import { four, sanPedro2, one, six, tres, five } from "./proveedores";

import image1 from "@/assets/images/sanPedro/matriz4.avif";
import image2 from "@/assets/images/sanJemo/jemo2.avif";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1603751178823-dbb4110907a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ── Hero ──
export const aboutHeroData = {
  tag: "Nuestra historia",
  title: "Construyendo confianza desde hace más de 20 años",
  description:
    "Doblado Valle, S.A. de C.V. es una empresa mexicana del ramo ferretero dedicada al suministro de productos para construcción, reparación y mantenimiento.",
  image: sanPedro2,
};

// ── History ──
export const historyData = {
  tag: "Trayectoria",
  title: "Una historia de compromiso y crecimiento",
  paragraphs: [
    "Doblado Valle nació con la visión de ser el proveedor ferretero de referencia en México, ofreciendo productos de la más alta calidad y un servicio personalizado que se adapta a las necesidades de cada cliente.",
    "A lo largo de más de tres décadas, hemos crecido de una pequeña ferretería local a una empresa sólida con múltiples sucursales, manteniendo siempre nuestros valores fundamentales de honestidad, calidad y servicio.",
    "Hoy, somos reconocidos como un aliado confiable tanto para profesionales de la construcción como para clientes particulares que buscan las mejores soluciones ferreteras del mercado.",
  ],
  image: five,
  stats: [
    { value: "+30", label: "Años de experiencia" },
    { value: "+5,000", label: "Productos en catálogo" },
    { value: "+50", label: "Marcas aliadas" },
    { value: "+10,000", label: "Clientes satisfechos" },
  ],
};

// ── Values ──
export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export const valuesData = {
  tag: "Valores",
  title: "Los pilares que nos definen",
  description:
    "Adaptamos nuestros procesos y servicios, para mejorar continuamente la atención a tus necesidades",
  items: [
    {
      icon: "shield",
      title: "Confianza",
      description:
        "Construimos relaciones duraderas basadas en la honestidad y la transparencia con nuestros clientes y proveedores.",
    },
    {
      icon: "star",
      title: "Calidad",
      description:
        "Trabajamos exclusivamente con marcas reconocidas para garantizar productos de la más alta calidad.",
    },
    {
      icon: "users",
      title: "Servicio",
      description:
        "Nuestro equipo de asesores especializados está siempre listo para orientarte en la mejor solución.",
    },
    {
      icon: "growth",
      title: "Innovación",
      description:
        "Nos mantenemos a la vanguardia en productos y servicios para ofrecer las mejores soluciones del mercado.",
    },
    {
      icon: "handshake",
      title: "Compromiso",
      description:
        "Cumplimos lo que prometemos, con tiempos de entrega puntuales y atención personalizada.",
    },
    {
      icon: "leaf",
      title: "Responsabilidad",
      description:
        "Promovemos prácticas responsables con el medio ambiente y la comunidad donde operamos.",
    },
  ] as ValueItem[],
};

// ── Mission / Vision ──
export const missionVisionData = {
  mission: {
    tag: "Misión",
    title: "Nuestra Misión",
    content:
      "Proveer soluciones ferreteras integrales de la más alta calidad, con un servicio personalizado y asesoría especializada que impulse el éxito de los proyectos de nuestros clientes en los sectores de construcción, reparación y mantenimiento.",
  },
  vision: {
    tag: "Visión",
    title: "Nuestra Visión",
    content:
      "Ser la empresa ferretera líder y de referencia en México, reconocida por la excelencia en el servicio al cliente, la innovación constante y el compromiso con la calidad en cada producto que ofrecemos.",
  },
};

// ── Coverage ──
export const coverageData = {
  tag: "Cobertura",
  title: "Alcance y presencia",
  description:
    "Con múltiples sucursales estratégicamente ubicadas y servicio a domicilio, llevamos nuestros productos a donde los necesites.",
  features: [
    "Múltiples sucursales en zona metropolitana",
    "Servicio de entrega a domicilio",
    "Atención a clientes industriales y comerciales",
    "Alianzas con las principales marcas del mercado",
    "Inventario amplio y disponibilidad inmediata",
    "Asesoría técnica especializada",
  ],
  image: six,
};
