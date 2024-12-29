"use client";

import Link from "next/link";
import { routes } from "@/src/routes";
import { FC } from "react";
import { cn } from "@/src/utils/cn";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
    label: "Formation",
    href: routes.home,
  },
  {
    label: "Elevage",
    href: routes.home,
  },
  {
    label: "Me contacter",
    href: routes.contact,
    highlight: true,
  },
];

export default function Nav() {
  const pathname = usePathname();
  const activeLink = getActiveLink(pathname);
  const currentRoute = navData.find((navData) => navData.href === pathname);

  const [barStyle, setBarStyle] = useState({
    width: activeLink?.offsetWidth ?? 0,
    left: activeLink?.offsetLeft ?? 0,
  });

  useEffect(() => {
    const activeLink = getActiveLink(pathname);
    if (activeLink) {
      const { offsetWidth, offsetLeft } = activeLink;
      setBarStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [pathname]);

  return (
    <nav className="flex z-10 relative">
      <div
        className={cn(
          "absolute bottom-2 h-1 rounded transition-all duration-300",
          {
            "bg-accent": !currentRoute?.highlight,
            "bg-primary": currentRoute?.highlight,
          }
        )}
        style={{
          width: barStyle.width,
          left: barStyle.left,
        }}
      />
      {navData.map((data) => (
        <NavLink
          key={data.label + data.href}
          label={data.label}
          href={data.href}
          highlight={data.highlight}
        />
      ))}
    </nav>
  );
}

const NavLink: FC<{ label: string; href: string; highlight?: boolean }> = ({
  label,
  href,
  highlight,
}) => {
  return (
    <Link
      href={href}
      className={cn("px-6 flex whitespace-nowrap justify-center items-center", {
        "bg-accent rounded-lg": highlight,
      })}
    >
      {label}
    </Link>
  );
};

const getActiveLink = (pathname: string): HTMLElement | null =>
  document.querySelector(`a[href="${pathname}"]`);
