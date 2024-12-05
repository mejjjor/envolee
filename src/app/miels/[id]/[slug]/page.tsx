import { RefreshRouteOnSave } from '@/src/components/RefreshRouterOnSave'
import { getHoney } from '@/src/api';
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Home({
  params,
  searchParams
}: {
    params: Promise<{ slug: string, id: string }>
    searchParams: Promise<{ draft: boolean }>
}) {
  
  const id = (await params).id
  const isDraft = (await searchParams).draft
  const honey = await getHoney(id, isDraft)

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