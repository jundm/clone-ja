import React from "react";
import LogoAuth from "./LogoAuth";
import MenuList from "./MenuList";
import { HdSub_div, Hdsub_w_div } from "./style";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <HdSub_div>
      <Hdsub_w_div>
        <LogoAuth />
        <MenuList />
      </Hdsub_w_div>
    </HdSub_div>
  );
}

export default Header;
