import Image from "next/image";
import React, { useLayoutEffect, useRef, useState } from "react";
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
} from "./style";
import logo from "@public/assets/headers/logo/logo.webp";
import search from "@public/assets/headers/logo/mainSrchBtn.webp";
import styled from "@emotion/styled";
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
                    <Image src={search} width={30} height={30} />
                  </Sch_submit_button>
                </Hd_sch_fieldset>
              </form>
            </Hd_sch_wr_div>
          </Hd_login_li>
          <Login_wr_ul>
            <Login_wr_li>
              <a href="https://janet.co.kr/member/register.php">
                <Menu_icon_span
                  //TODO 호버 추가
                  style={{
                    background:
                      "url('assets/headers/auth/member.webp') no-repeat center 3px",
                  }}
                />
                회원가입
              </a>
            </Login_wr_li>
            <Login_wr_li>
              <a href="https://janet.co.kr/member/login">
                <Menu_icon_span
                  style={{
                    background:
                      "url('assets/headers/auth/login.webp') no-repeat center 3px",
                  }}
                />
                로그인
              </a>
            </Login_wr_li>
            <Login_wr_li>
              <a href="https://support.janet.co.kr/">
                <Menu_icon_span
                  style={{
                    background:
                      "url('assets/headers/auth/company.webp') no-repeat center 3px",
                  }}
                />
                기업서비스
              </a>
            </Login_wr_li>
          </Login_wr_ul>
        </Hd_login_ul>
      </Tnb_div>
    </>
  );
}

export default LogoAuth;
