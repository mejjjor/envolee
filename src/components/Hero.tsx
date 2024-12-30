import { FC, ReactElement } from "react";
import { cn } from "../utils/cn";

const Hero: FC<{ className?: string; children: ReactElement }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "h-96 mb-16 flex justify-center bg-white rounded-3xl shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Hero;
