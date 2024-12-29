import { routes } from "@/src/routes";
import Logo from "./Logo";
import Nav from "./Nav";
import { FC } from "react";

const Header: FC<{ pathname: string }> = ({ pathname }) => {
  return (
    <header className="flex h-16 justify-between">
      <Logo logoClassName="w-32" withAnimate={pathname !== routes.home} />
      <Nav />
    </header>
  );
};

export default Header;
