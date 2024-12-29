// import { Architects_Daughter } from 'next/font/google'
import Logo from "@/src/components/Logo";
import Hero from "@/src/components/Hero";
import PictureParagraph from "@/src/components/PictureParagraph";

import accueil from "@/public/acceuil.jpg";
// const architectsDaughter = Architects_Daughter({
//   weight: "400",
//   subsets: ["latin"]
// })

export default function Home() {
  return (
    <>
      <Hero>
        <Logo
          withSub
          withAnimate
          className="justify-center"
          logoClassName="w-[650px]"
        />
      </Hero>
      <PictureParagraph
        src={accueil}
        alt="accueil"
        position="right"
        title="Etre apiculteur"
      >
        <div>
          L&apos;envolée est née en 2021 suite à une envie de faire de ma
          passion mon métier. L&apos;activité principale de l&apos;entreprise
          est l&apos;élevage de reines, la sélection d&apos;abeilles adaptées à
          l&apos;environnement qui les entourent et la production de miel.
          Aujourd&apos;hui les polinisateurs, dont les abeilles mellifères y
          font partie, sont en danger à cause d&apos;une multitude de raisons
          comme la dégradation des paysages et de la ressource végétale,
          l&apos;arrivage de nouveaux parasites et prédateurs, l&apos;apparition
          de nouvelles maladies et l&apos;utilisation presque systématique des
          produits phytosanitaires dans les élevages et l&apos;agriculture. Le
          but de mon activité est de mettre en valeur et sélectionner les
          colonies plus rustiques, résistantes et adaptatives sans oublier la
          capacité des colonies pour produire du miel. Mes colonies se situent
          au sein du Parc Naturel des Pyrénées Ariègeoises où les abeilles
          butinent d&apos;avril à septembre des plantes sauvages pour produire
          différents miels de crû. Dans un désir d&apos;être le plus respectueux
          avec les abeilles et l&apos;environnement, l&apos;exploitation est
          labélisée Agriculture Biologique. Je vous souhaite une bonne
          dégustation !
        </div>
      </PictureParagraph>
    </>
  );
}
