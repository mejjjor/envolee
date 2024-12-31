import { getServices } from "@/src/services";
// import Link from 'next/link'
import miels from "@/public/miels.jpg";

import Hero from "@/src/components/Hero";
import Image from "next/image";
import Title from "@/src/components/Title";
import PageClient from "./PageClient";

// export const dynamic = 'force-dynamic';
export const revalidate = 60;
// export const experimental_ppr = true

export default async function Home() {
  const { honeyAPI } = getServices();

  const honeys = await honeyAPI.getHoneys();

  const flowersList = honeys.docs.reduce<string[]>((acc, honey) => {
    acc.push(...(honey.flowers?.map((flower) => flower.name) ?? []));

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

      <PageClient honeys={honeys} flowers={flowers} />
    </>
  );
}
