import Image from "next/image";

import logo from "@/public/logo.png";
import logoSub from "@/public/logo_sub.png";
import nuee from "@/public/nuee.png";
import { FC } from "react";
import { cn } from "@/src/utils/cn";

const Logo: FC<{
  className?: string;
  logoClassName: string;
  withSub?: boolean;
  withAnimate?: boolean;
}> = ({ className, logoClassName, withSub, withAnimate }) => {
  return (
    <div className={cn("flex z-0 w-full", className)}>
      <div className={cn("relative", logoClassName)}>
        <Image
          src={withSub ? logoSub : logo}
          alt="logo lenvolé"
          className="absolute object-contain"
        />
        <Image
          src={nuee}
          alt="nuee lenvolé"
          className={cn("absolute object-contain", {
            "animate-fly": withAnimate,
          })}
        />
      </div>
    </div>
  );
};

export default Logo;
