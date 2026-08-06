import { sanPedro1, sanJemo1 } from "./proveedores";

// ── Hero ──
export const contactHeroData = {
  tag: "Contacto",
  title: "Hablemos de tu proyecto",
  image: sanJemo1,
  description:
    "Estamos listos para atenderte. Envíanos un mensaje o visítanos en cualquiera de nuestras sucursales.",
};

// ── Form ──
export const contactFormData = {
  title: "Envíanos un mensaje",
  description:
    "Completa el formulario y nos pondremos en contacto contigo a la brevedad.",
  fields: [
    {
      name: "nombre",
      label: "Nombre completo",
      type: "text" as const,
      placeholder: "Tu nombre completo",
      required: true,
    },
    {
      name: "email",
      label: "Correo electrónico",
      type: "email" as const,
      placeholder: "tu@email.com",
      required: true,
    },
    {
      name: "telefono",
      label: "Teléfono",
      type: "tel" as const,
      placeholder: "Tu número de teléfono",
      required: false,
    },
    {
      name: "interes",
      label: "Categoría o Producto de interés",
      type: "select" as const,
      options: [
        { value: "", label: "Selecciona una opción" },
        { value: "Construcción", label: "Construcción" },
        { value: "Herramienta", label: "Herramienta" },
        { value: "Plomería & Gas", label: "Plomería & Gas" },
        { value: "Eléctrico e Iluminación", label: "Eléctrico e Iluminación" },
        { value: "Mantenimiento", label: "Mantenimiento" },
        { value: "Hogar & Oficina", label: "Hogar & Oficina" },
        { value: "Acabados", label: "Acabados" },
        { value: "Jardín & Alberca", label: "Jardín & Alberca" },
        { value: "Autos y motocicletas", label: "Autos y motocicletas" },
        { value: "Otro", label: "Otro / Consulta general" },
      ],
      required: false,
    },
    {
      name: "asunto",
      label: "Asunto",
      type: "text" as const,
      placeholder: "¿En qué podemos ayudarte?",
      required: true,
    },
  ],
  messageField: {
    name: "mensaje",
    label: "Mensaje",
    placeholder: "Describe tu proyecto o consulta...",
    required: true,
  },
  submitLabel: "Enviar mensaje",
};

// ── Contact Info ──
export interface ContactBranch {
  name: string;
  address: string;
  whatsappHref: string;
  phoneHref: string;
  email: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  image: ImageMetadata;
  mapEmbedUrl?: string;
}

export const contactInfoData = {
  tag: "Sucursales",
  title: "Visítanos",
  branches: [
    {
      name: "San Pedro, Nuevo León",
      address: "San Pedro, Nuevo León",
      whatsappHref: "https://wa.me/8126206906",
      phoneHref: "tel:+528126206906",
      email: "ventas@dobladovalle.com",
      schedule: {
        weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
        saturday: "Sábado: 8:00 AM - 2:00 PM",
        sunday: "Domingo: Cerrado",
      },
      image: sanPedro1,
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.3930147879655!2d-100.39207569999999!3d25.6582635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bd82d620c2e7%3A0x67ba20f874031afe!2sDoblado%20Valle!5e0!3m2!1ses-419!2smx!4v1779838839762!5m2!1ses-419!2smx",
    },
    {
      name: "San Jerónimo, Nuevo León",
      address: "San Jerónimo, Nuevo León",
      whatsappHref: "https://wa.me/8119936710",
      phoneHref: "tel:+528119936710",
      email: "ventas@dobladovalle.com",
      schedule: {
        weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
        saturday: "Sábado: 8:00 AM - 2:00 PM",
        sunday: "Domingo: Cerrado",
      },
      image: sanJemo1,
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.647718136275!2d-100.3767643163235!3d25.682970119132822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629617f953267f%3A0xbd7c1ca0bb5a85c7!2sDoblado%20Valle!5e0!3m2!1ses-419!2smx!4v1779838936546!5m2!1ses-419!2smx",
    },
  ] as ContactBranch[],
};

// Contacto texto nuevo

export const ServicesData = [
  {
    title: "Preparación de pinturas",
    icon: "fa6-solid:paint-roller",
    description:
      "Como distribuidores de productos de la marca Berel, contamos con el equipamiento para la preparación y mezclados de pinturas vinílicas, acrílicas y esmaltes, en los colores y tonos que deseas para tus proyectos.",
  },
  {
    title: "Duplicación de llaves",
    icon: "fa6-solid:key",
    description:
      "Contamos con la maquinaria y las forjas más comunes para la duplicación de llaves de chapas, cerraduras y candados.",
  },
  {
    title: "Elaboración de niples y roscas",
    icon: "fa6-solid:wrench",
    description:
      "¿Necesitas un niple de un largo específico o elaborar una rosca? Aquí podemos fabricarlo con la tubería que requieras o hacer las roscas a tubos desde 1/2 hasta 2” de diámetro.",
  },
  {
    title: "Reparación de mosquiteros",
    icon: "fa6-solid:hammer",
    description:
      "Podemos ayudarte a sustituir la tela de tus mosquiteros. Aquí las reparamos; contamos con telas de fibra de vidrio o metálicas de diferentes colores y anchos, así como con complementos de vinil y herramienta para su montaje.",
  },
  {
    title: "Servicio a domicilio",
    icon: "fa6-solid:truck-fast",
    description:
      "Si no puedes recoger tu pedido en nuestras sucursales podemos apoyarte con su envío a domicilio en las áreas metropolitanas de Monterrey y San Pedro, o incluso en algunos de sus municipios conurbados. Pregúntanos por esta opción.",
  },
];
