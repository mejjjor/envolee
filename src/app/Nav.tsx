"use client";

import Link from "next/link";
import { routes } from "@/src/routes";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const activeLink = getActiveLink(pathname);

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
    <nav className="sm:px-4 sm:py-2 sm:mt-8 flex justify-around bg-primary z-10 relative">
      {activeLink && (
        <div
          className="absolute bottom-1 bg-secondary h-1 rounded-lg transition-all duration-300 ease-in-out"
          style={{
            width: `${barStyle.width}px`,
            left: `${barStyle.left}px`,
          }}
        />
      )}
      <Link href={routes.home} className="py-2 flex flex-1 justify-center">
        Être apiculteur
      </Link>
      <Link href={routes.honeys} className="py-2 flex flex-1 justify-center">
        Miels
      </Link>
      <a href="#formation" className="py-2  flex flex-1 justify-center">
        Formation
      </a>
      <a href="#elevage" className="py-2  flex flex-1 justify-center">
        Élevage
      </a>
    </nav>
  );
}

const getActiveLink = (pathname: string): HTMLElement | null =>
  document.querySelector(`a[href="${pathname}"]`);
