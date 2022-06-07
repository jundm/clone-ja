import styled from "@emotion/styled";
import React from "react";
import Image from "next/image";
import logo from "@public/headers/logo/logo.webp";
import {
  HdSub_div,
  Hdsub_w_div,
  Hd_login_li,
  Hd_login_ul,
  Logo_div,
  Tnb_div,
} from "./style";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <HdSub_div>
      <Hdsub_w_div>
        <Tnb_div>
          <Hd_login_ul>
            <Hd_login_li>
              <Logo_div>
                <a href="https://janet.co.kr">
                  <Image src={logo} alt="자격증넷" />
                </a>
              </Logo_div>
            </Hd_login_li>
          </Hd_login_ul>
        </Tnb_div>
      </Hdsub_w_div>
      <div>2</div>
      {/* <div>logo</div> */}
    </HdSub_div>
  );
}

export default Header;
