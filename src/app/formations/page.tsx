import course from "@/public/course.jpg";
import course1 from "@/public/course-1.jpg";
import course2 from "@/public/course-2.jpg";
import course3 from "@/public/course-3.jpg";

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
          src={course}
          className="object-cover h-auto w-full"
          alt="miels"
        />
      </Hero>
      <Title>Formations</Title>
      <PictureParagraph src={course1} alt="zzz">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          est at lectus elementum iaculis in ut velit. Curabitur erat ipsum,
          scelerisque et massa a, faucibus porta turpis. Sed ultrices ex ut
          velit lacinia molestie. Etiam turpis diam, congue non tortor ut,
          feugiat convallis neque. Nulla pretium dolor vel libero viverra, eu
          convallis est auctor
        </div>
      </PictureParagraph>
      <PictureParagraph src={course2} alt="zzz" position="right">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          est at lectus elementum iaculis in ut velit. Curabitur erat ipsum,
          scelerisque et massa a, faucibus porta turpis. Sed ultrices ex ut
          velit lacinia molestie. Etiam turpis diam, congue non tortor ut,
          feugiat convallis neque. Nulla pretium dolor vel libero viverra, eu
          convallis est auctor
        </div>
      </PictureParagraph>
      <PictureParagraph src={course3} alt="zzz">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at
          est at lectus elementum iaculis in ut velit. Curabitur erat ipsum,
          scelerisque et massa a, faucibus porta turpis. Sed ultrices ex ut
          velit lacinia molestie. Etiam turpis diam, congue non tortor ut,
          feugiat convallis neque. Nulla pretium dolor vel libero viverra, eu
          convallis est auctor
        </div>
      </PictureParagraph>
    </>
  );
}
