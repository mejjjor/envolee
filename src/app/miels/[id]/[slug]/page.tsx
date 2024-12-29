import { RefreshRouteOnSave } from "@/src/components/RefreshRouterOnSave";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { permanentRedirect } from "next/navigation";
import { routes } from "@/src/routes";
import { getServices } from "@/src/services";

// export async function generateStaticParams() {

//   const { honeyAPI } = getServices()

//   const honeys = await honeyAPI.getHoneys()

//   const data = honeys.docs.map((honey) => ({
//     id: String(honey.id),
//     slug: honey.slug,
//   }))

//   return data
// }

export default async function Home({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; id: string }>;
  searchParams: Promise<{ draft: boolean }>;
}) {
  const { honeyAPI } = getServices();

  const { id, slug } = await params;
  const { draft: isDraft } = await searchParams;
  const honey = await honeyAPI.getHoney(id, isDraft);

  if (honey.slug !== slug) {
    permanentRedirect(`${routes.honeys}/${id}/${honey.slug}`);
  }

  return (
    <>
      {isDraft && <RefreshRouteOnSave />}
      <div>
        titre: {honey.title}
        {honey.description && <RichText data={honey.description} />}
      </div>
    </>
  );
}
