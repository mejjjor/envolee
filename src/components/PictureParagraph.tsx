import Image, { StaticImageData } from "next/image";
import { FC, ReactElement, PropsWithChildren } from "react";

const PictureParagraph: FC<{
  src: string | StaticImageData;
  alt: string;
  position?: "left" | "right";
  title?: string;
  children: ReactElement;
}> = ({ children, src, alt, position = "left", title }) => {
  return (
    <>
      {title && (
        <div className="mt-8 mb-6 inline-block">
          <h2 className="text-3xl whitespace-nowrap">{title}</h2>
          <div className="w-[80%] h-2 bg-secondary rounded-md m-2 ml-0" />
        </div>
      )}
      <div className="flex gap-16">
        {position === "right" && <ChildrenWrapper>{children}</ChildrenWrapper>}
        <div className="w-[50%] flex items-center">
          <div className="rounded-xl overflow-hidden">
            <Image src={src} alt={alt} className="object-contain" />
          </div>
        </div>
        {position === "left" && <ChildrenWrapper>{children}</ChildrenWrapper>}
      </div>
    </>
  );
};

const ChildrenWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-[50%]">{children}</div>;
};

export default PictureParagraph;
