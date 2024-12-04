
import { getHoney } from '@/src/api';
import { RichText } from '@payloadcms/richtext-lexical/react'

export default async function Home({
  params,
}: {
    params: { slug: string };
}) {
  const slug = await params.slug
  const honey = await getHoney(slug)

  console.log("honey", honey)

  return (
    <>
      <div>
        titre: {honey.title}
        {
          honey.description &&
          <RichText data={honey.description} />
        }
      </div>
    </>
  )}