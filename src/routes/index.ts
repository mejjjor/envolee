export const routes = {
  home: "/",
  honeys: "/miels",
  courses: "/formations",
  farming: "/elevage",
  contact: "/contact",
  contactSuccess: "/contact-success",
};

export const nav = [
  {
    label: "Être apiculteur",
    href: routes.home,
  },
  {
    label: "Miels",
    href: routes.honeys,
  },
  {
    label: "Formations",
    href: routes.courses,
  },
  {
    label: "Elevage",
    href: routes.farming,
  },
  {
    label: "Me contacter",
    href: routes.contact,
    highlight: true,
  },
];
