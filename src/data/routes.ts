export interface Route {
  label: string;
  href: string;
}

export const routes: Route[] = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Acerca",
    href: "/acerca",
  },
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export const legalRoutes: Route[] = [
  {
    label: "Aviso de Privacidad",
    href: "/privacidad",
  },
];

export const companyInfo = {
  name: "Doblado Valle, S.A. de C.V.",
  shortName: "Doblado Valle",
  tagline: "Soluciones ferreteras para construcción e industria",
  phone: "+52 (555) 123-4567",
  whatsapp: "5551234567",
  email: "contacto@dobladovalle.com",
  foundedYear: 1990,
};
