import crow from "../assets/navcategories/crow.png";

export type TnavCategories = {
  paragraph: string;
  active?: boolean;
  icon?: string;
};

export const navcategoriesitems: TnavCategories[] = [
  {
    paragraph: "TODAS CATEGORIAS",
  },
  {
    paragraph: "SUPERMERCADO",
  },
  {
    paragraph: "LIVROS",
  },
  {
    paragraph: "MODA",
  },
  {
    paragraph: "LANÇAMENTOS",
  },
  {
    paragraph: "OFERTAS DO DIA",
    active: true,
  },
  {
    paragraph: "ASSINATURA",
    icon: crow,
  },
];
