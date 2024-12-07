import { RefreshRouteOnSave } from '@/src/components/RefreshRouterOnSave'
import { getHoney } from '@/src/api';
import { RichText } from '@payloadcms/richtext-lexical/react'
import { permanentRedirect } from 'next/navigation'
import { routes } from '@/src/routes';


export default async function Home({
  params,
  searchParams
}: {
    params: Promise<{ slug: string, id: string }>
    searchParams: Promise<{ draft: boolean }>
}) {
  
  const {id, slug} = await params
  const {draft: isDraft} = await searchParams
  const honey = await getHoney(id, isDraft)

  if (honey.slug !== slug) {
    permanentRedirect(`${routes.honeys}/${id}/${honey.slug}`)
  }

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