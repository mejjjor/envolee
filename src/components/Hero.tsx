import { FC, PropsWithChildren } from "react";

const Hero: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-96 my-16 flex justify-center bg-white rounded-3xl shadow-sm overflow-hidden">
      {children}
    </div>
  );
};

export default Hero;
