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
      whatsappHref: "https://wa.me/5551234567",
      phoneHref: "tel:+525551234567",
      email: "sanpedro@dobladovalle.com",
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
      whatsappHref: "https://wa.me/5559876543",
      phoneHref: "tel:+525559876543",
      email: "sanjemo@dobladovalle.com",
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
