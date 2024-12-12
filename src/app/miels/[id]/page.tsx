import { permanentRedirect } from 'next/navigation';
import { routes } from '@/src/routes';
import { getServices } from '@/src/services';

export default async function Home({
  params,
}: {
    params: Promise<{ slug: string, id: string }>
}) {

  const { honeyAPI } = getServices();

  
  const { id } = await params
  const honey = await honeyAPI.getHoney(id)

    permanentRedirect(`${routes.honeys}/${id}/${honey.slug}`)
}