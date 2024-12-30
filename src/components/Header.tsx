import { routes } from "@/src/routes";
import Logo from "./Logo";
import Nav from "./Nav";
import { FC } from "react";

const Header: FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <>
      <header className="flex h-16 justify-between sticky top-0 pt-4 box-content z-40">
        <Logo logoClassName="w-32" withAnimate={pathname !== routes.home} />
        <Nav />
      </header>
      <div className="bg-background h-24 w-full sticky top-0 z-10" />
    </>
  );
};

export default Header;
