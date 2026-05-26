// ═══════════════════════════════════════════
// CONTACT PAGE DATA
// ═══════════════════════════════════════════

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1603751178823-dbb4110907a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// ── Hero ──
export const contactHeroData = {
  tag: "Contacto",
  title: "Hablemos de tu proyecto",
  description:
    "Estamos listos para atenderte. Envíanos un mensaje o visítanos en cualquiera de nuestras sucursales.",
  image: PLACEHOLDER_IMAGE,
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
      placeholder: "+52 (555) 000-0000",
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
  phone: string;
  whatsapp: string;
  email: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const contactInfoData = {
  tag: "Sucursales",
  title: "Visítanos",
  branches: [
    {
      name: "Sucursal Centro",
      address: "Av. Ejemplo #123, Col. Centro, Ciudad de México, CP 06000",
      phone: "+52 (555) 123-4567",
      whatsapp: "5551234567",
      email: "centro@dobladovalle.com",
      schedule: {
        weekdays: "Lunes a Viernes: 8:00 AM - 7:00 PM",
        saturday: "Sábado: 8:00 AM - 3:00 PM",
        sunday: "Domingo: Cerrado",
      },
    },
    {
      name: "Sucursal Norte",
      address: "Blvd. Industrial #456, Col. Industrial, Ciudad de México, CP 07000",
      phone: "+52 (555) 987-6543",
      whatsapp: "5559876543",
      email: "norte@dobladovalle.com",
      schedule: {
        weekdays: "Lunes a Viernes: 8:00 AM - 7:00 PM",
        saturday: "Sábado: 8:00 AM - 3:00 PM",
        sunday: "Domingo: Cerrado",
      },
    },
  ] as ContactBranch[],
};

// ── Map ──
export const contactMapData = {
  title: "Cómo llegar",
  description: "Ubica nuestras sucursales en el mapa.",
  placeholder: PLACEHOLDER_IMAGE,
};
