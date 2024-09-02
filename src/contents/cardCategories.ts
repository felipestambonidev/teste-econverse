import tecnologia from "../assets/categorycard/monitorar-tablet-e-smartohone 1.png"
import mercado from "../assets/categorycard/supermercados 1.png"
import bebidas from "../assets/categorycard/whiskey.png"
import ferramenta from "../assets/categorycard/ferramentas 1.png"
import saude from "../assets/categorycard/cuidados-de-saude 1.png"
import esporte from "../assets/categorycard/corrida 1.png"
import moda from "../assets/categorycard/moda 1.png"

export type TcardCategories = {
    image: string;
    paragraph: string;
};

export const cardcategoriesitems: TcardCategories[] = [
    {
        image: tecnologia,
        paragraph: "Tecnologia",
    },
    {
        image: mercado,
        paragraph: "Supermercado",
    },
    {
        image: bebidas,
        paragraph: "Bebidas",
    },
    {
        image: ferramenta,
        paragraph: "Ferramentas",
    },
    {
        image: saude,
        paragraph: "Saúde",
    },
    {
        image: esporte,
        paragraph: "Esporte e Fitness",
    },
    {
        image: moda,
        paragraph: "Moda",
    }
]