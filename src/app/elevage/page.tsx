import elevage from "@/public/elevage.jpg";
import bugfast from "@/public/bugfast.jpg";

import Hero from "@/src/components/Hero";
import Image from "next/image";
import Title from "@/src/components/Title";
import PictureParagraph from "@/src/components/PictureParagraph";

export const revalidate = 60;

export default async function Courses() {
  return (
    <>
      <Hero className="overflow-hidden">
        <Image
          src={elevage}
          className="object-cover h-auto w-full"
          priority
          alt="miels"
        />
      </Hero>
      <Title>Elevage</Title>
      <PictureParagraph src={bugfast} alt="zzz">
        <div>
          Bugfast c est trop bien. um iaculis in ut velit. Curabitur erat ipsum,
          scelerisque et massa a, faucibus porta turpis. Sed ultrices ex ut
          velit lacinia molestie. Etiam turpis diam, congue non tortor ut,
          feugiat convallis neque. Nulla pre.
          <br />
          <div className="inline-block p-2 px-4 rounded-lg bg-accent/40 cursor-pointer">
            Prix: 20€
          </div>
        </div>
      </PictureParagraph>
    </>
  );
}
