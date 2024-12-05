import { getHoneys } from '@/src/api'
import Link from 'next/link'


export default async function Home() {
  const honeys = await getHoneys()

    console.log("honeys", honeys)
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