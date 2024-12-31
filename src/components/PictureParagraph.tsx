import Image, { StaticImageData } from "next/image";
import { FC, ReactElement, PropsWithChildren } from "react";

const PictureParagraph: FC<{
  src: string | StaticImageData;
  alt: string;
  position?: "left" | "right";
  children: ReactElement;
}> = ({ children, src, alt, position = "left" }) => {
  return (
    <div className="my-8 flex flex-col gap-8 lg:my-16 lg:flex-row lg:gap-16">
      {position === "right" && <ChildrenWrapper>{children}</ChildrenWrapper>}
      <div className="flex items-center lg:w-[50%]">
        <div className="flex max-h-[400px] overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            className="w-auto self-center object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex self-center lg:hidden">{children}</div>
      {position === "left" && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </div>
  );
};

const ChildrenWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="hidden self-center lg:flex lg:w-[50%]">{children}</div>
  );
};

export default PictureParagraph;
