import { getServices } from '@/src/services';
import Link from 'next/link'

export const dynamic = 'force-dynamic';
// export const revalidate = 60
// export const experimental_ppr = true


export default async function Home() {
  const { honeyAPI } = getServices();

  
  const honeys = await honeyAPI.getHoneys()

  return (
    <>
      <ul>
        {
          honeys.docs.map((honey) => {
            return (
              <li key={honey.id}>
                <Link  href={`/miels/${honey.id}/${honey.slug}`}>{honey.title}</Link>
              </li>
              )
          })
        }
      </ul>
    </>
  )}