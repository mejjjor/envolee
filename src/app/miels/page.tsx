// import { getServices } from '@/src/services';
// import Link from 'next/link'
import pot from "@/public/pot.jpg";
import acaccia from "@/public/acaccia.jpg";
import miels from "@/public/miels.jpg";
import hm from "@/public/hm.jpg";

import Honey from "@/src/components/Honey";
import Hero from "@/src/components/Hero";
import Image from "next/image";
import Title from "@/src/components/Title";
import PageClient from "./PageClient";

// export const dynamic = 'force-dynamic';
export const revalidate = 60;
// export const experimental_ppr = true

export default async function Home() {
  // const { honeyAPI } = getServices();

  // const honeys = await honeyAPI.getHoneys()

  const honeys = [
    {
      id: "1",
      title: "Acaccia",
      picture: acaccia,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["acaccia"],
    },
    {
      id: "2",
      title: "Haute-montagne",
      picture: hm,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["rhododendron"],
    },
    {
      id: "32",
      title: "Printemps",
      picture: pot,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["nectar de Ronce", "miellat de chêne", "tilleul"],
    },
    {
      id: "12",
      title: "Acaccia",
      picture: acaccia,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["acaccia"],
    },
    {
      id: "22",
      title: "Haute-montagne",
      picture: hm,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["rhododendron"],
    },
    {
      id: "3",
      title: "Printemps",
      picture: pot,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["nectar de Ronce", "miellat de chêne", "tilleul"],
    },
    {
      id: "11",
      title: "Acaccia",
      picture: acaccia,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["acaccia"],
    },
    {
      id: "21",
      title: "Haute-montagne",
      picture: hm,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["rhododendron"],
    },
    {
      id: "31",
      title: "Printemps",
      picture: pot,
      pictureAlt: "pot de miel d'acaccia",
      weight: "500 g",
      price: "10 €",
      flowers: ["nectar de Ronce", "miellat de chêne", "tilleul"],
    },
  ];

  const flowersList = honeys.reduce<string[]>((acc, honey) => {
    acc.push(...honey.flowers);

    return acc;
  }, []);

  const flowers = new Array(...new Set(flowersList));
  flowers.unshift("Toutes");

  return (
    <>
      <Hero className="overflow-hidden">
        <Image
          src={miels}
          className="h-auto w-full object-cover"
          priority
          alt="miels"
        />
      </Hero>
      <Title>Les miels</Title>

      <PageClient honeys={{ docs: honeys }} flowers={flowers} />
    </>
  );
}
