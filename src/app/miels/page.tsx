import { getHoneys } from '@/src/api'
import Link from 'next/link'

export const dynamic = 'force-dynamic';
// export const revalidate = 60
// export const experimental_ppr = true


export default async function Home() {
  const honeys = await getHoneys()

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