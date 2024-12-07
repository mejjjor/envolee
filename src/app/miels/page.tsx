import { getHoneys } from '@/src/api'
import Link from 'next/link'

// export const dynamic = 'force-dynamic'; 
export const revalidate = 60

export default async function Home() {
  const honeys = await getHoneys()

  return (
    <>
      <div>
        {
          honeys.docs.map((honey) => {
            return <Link key={honey.id} href={`/miels/${honey.id}/${honey.slug}`}>{honey.title}</Link>
          })
        }
      </div>
    </>
  )}