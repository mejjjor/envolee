import { getHoneys } from '@/src/api'
import Link from 'next/link'


export default async function Home() {
  const honeys = await getHoneys()

    
  return (
    <>
      <div>
        {
          honeys.docs.map((honey) => {
            return <Link key={honey.id} href={`/miels/${honey.id}`}>{honey.title}</Link>
          })
        }
      </div>
    </>
  )}