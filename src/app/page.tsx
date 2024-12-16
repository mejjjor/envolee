// import { cn } from '@/src/utils/cn';
// import { Architects_Daughter } from 'next/font/google'
import Image from "next/image";
// import acceuil from "@/public/acceuil.jpg"
// import miels from "@/public/miels.jpg"
import pot from "@/public/pot.jpg";

// const architectsDaughter = Architects_Daughter({
//   weight: "400",
//   subsets: ["latin"]
// })

export default function Home() {
  return (
    <>
      <div className="p-1 sm:p-2 w-[320px] h-[400px] rounded-lg flex flex-col bg-primary">
        <div className="flex">
          <div>
            <div className="max-w-[170px] max-h-[300px] flex items-center justify-center rounded-lg overflow-hidden">
              <Image
                src={pot}
                alt="zzz"
                width={250}
                height={300}
                objectFit="contain"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-center items-center flex-1">
            500g net bio
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <h3 className="text-4xl">Acaccia</h3>
        </div>
      </div>
      {/* <section className='m-2 sm:m-4 px-16'>
      <article className='p-2 text-2xl flex'>
        <Image className='mr-8' src={acceuil} width={500} alt='acceuil' height={500}/>
        <div className='self-center'>
        Au coeur des pyrénées, l&apos;envolée est une entreprise d&apos;apiculture produisant du miels et des reines bio. Et blabla lorem tu sais. Mais surtout c&apos;est bien. Et c&apos;est bon. Bref, je suis heureux.
        </div>
      </article>
      
      <Link href={routes.honeys}>
        <article className='p-2 text-2xl flex'>
          <div className='self-center'>
            <h2 className='pl-2 text-4xl'>Les miels</h2>
          Ce que j&apos;adore faire, c&apos;est du miels. hum les bonnes abeilles qui bossent pour tchi. t&apos;inquietes, je suis sympas avec elles.
          </div>
          <Image className='ml-8' src={miels} width={500} alt='acceuil' height={500}/>
        </article>
      </Link>
      <Link href={routes.honeys}>
        <article className='p-2 text-2xl flex'>
          <Image className='mr-8' src={miels} width={500} alt='acceuil' height={500}/>
          <div className='self-center'>
            <h2 className='pl-2 text-4xl'>partage et savoir faire</h2>

          </div>
        </article>
      </Link>
      <article className='p-2 text-2xl flex'>
        <Image className='mr-8' src={acceuil} width={500} alt='acceuil' height={500}/>
        <div className='self-center'>
        Ce que j&apos;adore faire, c&apos;est du miels. hum les bonnes abeilles qui bossent pour tchi. t&apos;inquietes, je suis sympas avec elles 
        </div>
      </article>
    </section>
    <section id='apiculteur' className='m-2 sm:m-4'>
      <h2 className='text-4xl'>Apiculteur en Ariège</h2>
      <article className='p-2'>Du piémont aux hautes montagnes, le long de la chaine pyrénéenne</article>
    </section>
    <section id="formation" className='m-2 sm:m-4'>
           <h2 className='text-4xl'>Partage et savoir faire</h2>
      <article className='p-2'>Je donne des formations et participe à l&apos;ada</article>
    </section>
    <section id="elevage" className='m-2 sm:m-4'>
      <h2 className='text-4xl'>Élevage</h2>
      <article className='p-2'>Reproduction et selection des abeilles</article>
    </section> */}
    </>
  );
}
