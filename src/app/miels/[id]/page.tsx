import { getHoney } from '@/src/api';
import { permanentRedirect } from 'next/navigation';
import { routes } from '@/src/routes';

export default async function Home({
  params,
}: {
    params: Promise<{ slug: string, id: string }>
}) {
  
  const { id } = await params
  const honey = await getHoney(id)

    permanentRedirect(`${routes.honeys}/${id}/${honey.slug}`)
}