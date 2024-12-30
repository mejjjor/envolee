import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/cn";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="mt-8 inline-block">
      <h2 className="text-3xl whitespace-nowrap">{children}</h2>
      <div
        className={cn("w-[80%] h-2 bg-secondary rounded-md m-2 ml-0", {
          "w-32": !children,
        })}
      />
    </div>
  );
};

export default Title;
