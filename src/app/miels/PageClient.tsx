"use client";

import Honey from "@/src/components/Honey";
import { FC, useState } from "react";
import { PayloadAPIResponse } from "@/src/types/api";
import { Honey as IHoney } from "@/src/types/payloadcms";
import { cn } from "@/src/utils/cn";

// export const dynamic = 'force-dynamic';
export const revalidate = 60;
// export const experimental_ppr = true

const HoneysClient: FC<{
  honeys: PayloadAPIResponse<IHoney>;
  flowers: string[];
}> = ({ honeys, flowers }) => {
  const [currentFilter, setCurrentFilter] = useState("Toutes");

  return (
    <>
      <div>
        <div className="text-xl mt-2 mb-4">Filtrer par fleurs :</div>
        <div className="flex gap-2">
          {flowers.map((flower) => (
            <div
              className={cn("p-2 px-4 rounded-lg bg-accent/40 cursor-pointer", {
                "bg-accent/70": flower === currentFilter,
              })}
              key={flower}
              onClick={() => {
                setCurrentFilter(flower);
              }}
            >
              {flower}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 sm:gap-16 flex-wrap sm:mt-8 justify-center">
        {honeys.docs
          .filter(
            (honey) =>
              currentFilter === "Toutes" ||
              honey.flowers?.includes(currentFilter)
          )
          .map((honey) => (
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
      </div>
    </>
  );
};

export default HoneysClient;
