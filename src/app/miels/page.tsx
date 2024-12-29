// import { getServices } from '@/src/services';
// import Link from 'next/link'
import pot from "@/public/pot.jpg";
import acaccia from "@/public/acaccia.jpg";
import miels from "@/public/miels.jpg";
import hm from "@/public/hm.jpg";

import Honey from "@/src/components/Honey";
import Hero from "@/src/components/Hero";
import Image from "next/image";

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

  return (
    <>
      <Hero>
        <Image src={miels} className="object-cover" alt="miels" />
      </Hero>
      <div className="flex gap-2 sm:gap-16 flex-wrap sm:mt-8 justify-center">
        {/* <ul>
        {
          honeys.docs.map((honey) => {
            return (
              <li key={honey.id}>
                <Link  href={`/miels/${honey.id}/${honey.slug}`}>{honey.title}</Link>
              </li>
              )
          })
        }
      </ul> */}
        {honeys.map((honey) => (
          <Honey
            key={honey.id}
            title={honey.title}
            picture={honey.picture}
            pictureAlt={honey.pictureAlt}
            weight={honey.weight}
            price={honey.price}
            flowers={honey.flowers}
          />
        ))}
        {/* <div className="p-1 sm:p-2 w-[320px] h-[400px] rounded-lg flex flex-col bg-primary/70">
        <div className="flex">
          <div>
            <div className="max-w-[170px] max-h-[300px] flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={pot}
                alt="zzz"
                width={250}
                height={300}
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-col flex-1">
            <div>500g net</div>
            <div>bio</div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <h3 className="text-3xl">Acaccia</h3>
        </div>
      </div>
      <div className="w-[250px] h-[400px] flex flex-col rounded-lg bg-primary/70">
        <div>
          <div className="max-w-[250px] max-h-[280px] flex items-center justify-center rounded-t-lg overflow-hidden">
            <Image
              src={pot}
              alt="zzz"
              width={250}
              height={280}
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 px-2">
          <div className="flex justify-between">
            <div>500g</div>
            <div>10€</div>
          </div>
          <h3 className="text-3xl self-center pb-2">Acaccia</h3>
          <div>
            <span className="rounded-xl bg-secondary p-1 px-2">acaccia</span>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-[400px] flex flex-col rounded-lg bg-primary/70">
        <div>
          <div className="max-w-[250px] max-h-[280px] flex items-center justify-center rounded-t-lg overflow-hidden">
            <Image
              src={pot}
              alt="zzz"
              width={250}
              height={280}
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 px-2">
          <div className="flex justify-between">
            <div>500g</div>
            <div>10€</div>
          </div>
          <h3 className="text-3xl self-center pb-2">Fleurs d&apos;été</h3>
          <div className="text-xs flex flex-wrap gap-1">
            <span className="rounded-xl bg-secondary p-1 px-2">
              nectar de Ronce
            </span>
            <span className="rounded-xl bg-secondary p-1 px-2">
              Miellat de chêne
            </span>
            <span className="rounded-xl bg-secondary p-1 px-2">Tilleul</span>
            <span className="rounded-xl bg-secondary p-1 px-2">
              Châtaignier
            </span>
          </div>
        </div>
      </div>
      <div className="w-[250px] h-[400px] flex flex-col rounded-lg bg-primary/70">
        <div>
          <div className="max-w-[250px] max-h-[280px] flex items-center justify-center rounded-t-lg overflow-hidden">
            <Image
              src={pot}
              alt="zzz"
              width={250}
              height={280}
              objectFit="contain"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center flex-1 px-2">
          <div className="flex justify-between">
            <div>500g</div>
            <div>10€</div>
          </div>
          <h3 className="text-3xl self-center pb-2">Haute-montagne</h3>
          <div>
            <span className="rounded-xl bg-secondary p-1 px-2">
              rhododendron
            </span>
          </div>
        </div>
      </div> */}
      </div>
    </>
  );
}
