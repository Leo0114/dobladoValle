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
  whatsappHref: "https://wa.me/5551234567",
  phoneHref: "tel:+525551234567",
  email: "contacto@dobladovalle.com",
  foundedYear: 1990,
};
