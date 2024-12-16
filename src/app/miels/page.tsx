// import { getServices } from '@/src/services';
// import Link from 'next/link'
import Image from "next/image";
import pot from "@/public/pot.jpg";

// export const dynamic = 'force-dynamic';
export const revalidate = 60;
// export const experimental_ppr = true

export default async function Home() {
  // const { honeyAPI } = getServices();

  // const honeys = await honeyAPI.getHoneys()

  return (
    <>
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
      <div className="p-1 sm:p-2 w-[320px] h-[400px] rounded-lg flex flex-col bg-primary">
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
          <h3 className="text-4xl">Acaccia</h3>
        </div>

        <div>
          <div className="max-w-[170px] max-h-[300px] flex items-center justify-center rounded-lg overflow-hidden"></div>
        </div>
      </div>
    </>
  );
}
