import { cn } from '@/src/utils/cn';
import { Architects_Daughter } from 'next/font/google'
import Link from 'next/link';

const architectsDaughter = Architects_Daughter({
  weight: "400",
  subsets: ["latin"]
})

export default function Home() {
  return (
<>
  <header>
  <h1 className={cn(architectsDaughter.className, "text-7xl sm:text-8xl text-center")}>L&apos;envolée</h1>
  </header>
  <nav className='sm:m-4 flex justify-around'>
  <Link href="/miels">Miels</Link>
    <a href="#miels">Les miels</a>|
    <a href="#apiculteur">Être apiculteur</a>|
    <a href="#formation">Formation</a>|
    <a href="#elevage">Élevage</a>
  </nav>
  <main>
    <section id='miels' className='m-2 sm:m-4'>
      <h2 className='text-4xl'>Les miels</h2>
      <article className='p-2'><h3 className='text-2xl'>Acacia</h3> <div>Hum il est liquide</div></article>
      <article className='p-2'><h3 className='text-2xl'>Printemps</h3> <div>C&apos;est le premier</div></article>
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
    </section>
  </main>
  <footer>
    Indi Oyarzun - indi.oyarzun@gmail.com - Mercenac
  </footer>
</>
  );
}
