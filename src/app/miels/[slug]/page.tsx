import { RefreshRouteOnSave } from '@/src/components/RefreshRouterOnSave'
import { getHoney } from '@/src/api';
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Home({
  params,
  searchParams
}: {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ isDraft: boolean }>
}) {
  const slug = (await params).slug
  const isDraft = (await searchParams).isDraft
  const honey = await getHoney(slug, isDraft)

  console.log("honey", honey)

  return (
    <>
    {
      isDraft &&
    <RefreshRouteOnSave/>
    }
  <div>
  titre: {honey.title}
        {
          honey.description &&
          <RichText data={honey.description} />
        }
      </div>
    </>
  )}