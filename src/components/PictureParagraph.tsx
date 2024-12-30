import Image, { StaticImageData } from "next/image";
import { FC, ReactElement, PropsWithChildren } from "react";

const PictureParagraph: FC<{
  src: string | StaticImageData;
  alt: string;
  position?: "left" | "right";
  children: ReactElement;
}> = ({ children, src, alt, position = "left" }) => {
  return (
    <div className="flex gap-16 my-16">
      {position === "right" && <ChildrenWrapper>{children}</ChildrenWrapper>}
      <div className="w-[50%] flex items-center">
        <div className="rounded-xl overflow-hidden max-h-[400px] flex ">
          <Image
            src={src}
            alt={alt}
            className="object-contain self-center w-auto"
            priority
          />
        </div>
      </div>
      {position === "left" && <ChildrenWrapper>{children}</ChildrenWrapper>}
    </div>
  );
};

const ChildrenWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-[50%] flex self-center">{children}</div>;
};

export default PictureParagraph;
