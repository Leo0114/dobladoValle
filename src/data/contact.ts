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
      name: "Matriz San Pedro",
      address: "San Pedro, Nuevo León",
      whatsappHref: "https://wa.me/8126206906",
      phoneHref: "tel:+528126206906",
      email: "ventas@dobladovalle.com",
      schedule: {
        weekdays: "Lunes a Viernes: 8:00 AM - 7:00 PM",
        saturday: "Sábado: 8:00 AM - 3:00 PM",
        sunday: "Domingo: Cerrado",
      },
      image: sanPedro1,
      mapEmbedUrl: "",
    },
    {
      name: "Sucursal San Jemo",
      address: "San Jerónimo, Nuevo León",
      whatsappHref: "https://wa.me/8119936710",
      phoneHref: "tel:+528119936710",
      email: "ventas@dobladovalle.com",
      schedule: {
        weekdays: "Lunes a Viernes: 8:00 AM - 7:00 PM",
        saturday: "Sábado: 8:00 AM - 3:00 PM",
        sunday: "Domingo: Cerrado",
      },
      image: sanJemo1,
      mapEmbedUrl: "",
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
      "Si no puedes recoger tu pedido en nuestras sucursales podemos apoyarte con su envío a domicilio en las áreas metropolitanas de Monterrey y San Pedro.",
  },
];
