"use client";

import Link from "next/link";
import { routes } from "@/src/routes";
import { useRef } from "react";
import { cn } from "@/src/utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACTIVE_LINK_CONST = 8;

const navData = [
  {
    label: "Être apiculteur",
    href: routes.home,
  },
  {
    label: "Miels",
    href: routes.honeys,
  },
  {
    label: "Formations",
    href: routes.courses,
  },
  {
    label: "Elevage",
    href: routes.farming,
  },
  {
    label: "Me contacter",
    href: routes.contact,
    highlight: true,
  },
];

export default function Nav() {
  const pathname = usePathname();

  const currentRoute = navData.find((navData) => navData.href === pathname);

  const activeLinkRef = useRef<HTMLAnchorElement>(null);
  const [barStyle, setBarStyle] = useState({
    width: activeLinkRef.current?.offsetWidth ?? 0,
    left: activeLinkRef.current?.offsetLeft ?? 0,
  });

  useEffect(() => {
    if (activeLinkRef.current) {
      const { offsetWidth, offsetLeft } = activeLinkRef.current;
      setBarStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [pathname]);

  return (
    <nav className="flex relative z-30">
      <div
        className={cn(
          "absolute bottom-2 h-1 rounded transition-all duration-300",
          {
            "bg-accent": !currentRoute?.highlight,
            "bg-primary": currentRoute?.highlight,
          }
        )}
        style={{
          width: barStyle.width - ACTIVE_LINK_CONST * 2,
          left: barStyle.left + ACTIVE_LINK_CONST,
        }}
      />
      {navData.map((data) => (
        <Link
          key={data.href}
          href={data.href}
          ref={pathname === data.href ? activeLinkRef : null}
          className={cn(
            "px-6 flex whitespace-nowrap justify-center items-center",
            {
              "bg-accent rounded-lg": data.highlight,
            }
          )}
        >
          {data.label}
        </Link>
      ))}
    </nav>
  );
}
