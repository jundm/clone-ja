import Image from "next/image";
import React, { useState } from "react";
import {
  Tnb_div,
  Hd_login_ul,
  Hd_login_li,
  Logo_div,
  Hd_sch_wr_div,
  Hidden_input,
  Hd_sch_fieldset,
  Hd_sch_legend,
  Search_tit_div,
  Sch_stx_input,
  Sch_submit_button,
  Login_wr_ul,
  Login_wr_li,
  Menu_icon_span,
  Menu_icon_a,
} from "./style";
import logo from "@public/assets/headers/logo/logo.webp";
import search from "@public/assets/headers/logo/mainSrchBtn.webp";

interface LogoAuthProps {}

function LogoAuth({}: LogoAuthProps) {
  const [width, setWidth] = useState(400);

  return (
    <>
      <Tnb_div>
        <Hd_login_ul>
          <Hd_login_li>
            <Logo_div>
              <a href="https://janet.co.kr">
                <Image
                  src={logo}
                  alt="자격증넷"
                  style={{ float: "left", margin: "0 30px 3px 0" }}
                />
              </a>
            </Logo_div>
          </Hd_login_li>
          <Hd_login_li>
            <Hd_sch_wr_div width={width}>
              <form action="/search/search">
                <Hidden_input type="hidden" />
                <Hidden_input type="hidden" />
                <Hd_sch_fieldset>
                  <Hd_sch_legend>사이트 내 전체검색</Hd_sch_legend>
                  <Search_tit_div>통합검색</Search_tit_div>
                  <Sch_stx_input
                    type="text"
                    maxLength={50}
                    placeholder="자격증 꿀팁 보러가기 #취준 #취뽀"
                    onClick={() => setWidth(650)}
                  />
                  <Sch_submit_button type="submit">
                    <Image src={search} width={30} height={30} alt="" />
                  </Sch_submit_button>
                </Hd_sch_fieldset>
              </form>
            </Hd_sch_wr_div>
          </Hd_login_li>
          <Login_wr_ul>
            <Login_wr_li>
              <Menu_icon_a
                href="https://janet.co.kr/member/register.php"
                hover={
                  'url("assets/headers/auth/member_ov.webp") no-repeat 20px'
                }
              >
                <Menu_icon_span
                  icons={
                    'url("assets/headers/auth/member.webp") no-repeat 20px'
                  }
                />
                회원가입
              </Menu_icon_a>
            </Login_wr_li>
            <Login_wr_li>
              <Menu_icon_a
                href="https://janet.co.kr/member/login"
                hover={
                  'url("assets/headers/auth/login_ov.webp") no-repeat 10px'
                }
              >
                <Menu_icon_span
                  icons={'url("assets/headers/auth/login.webp") no-repeat 10px'}
                />
                로그인
              </Menu_icon_a>
            </Login_wr_li>
            <Login_wr_li>
              <Menu_icon_a
                href="https://support.janet.co.kr/"
                hover={
                  'url("assets/headers/auth/company_ov.webp") no-repeat 25px'
                }
              >
                <Menu_icon_span
                  icons={
                    'url("assets/headers/auth/company.webp") no-repeat 25px'
                  }
                />
                기업서비스
              </Menu_icon_a>
            </Login_wr_li>
          </Login_wr_ul>
        </Hd_login_ul>
      </Tnb_div>
    </>
  );
}

export default LogoAuth;
