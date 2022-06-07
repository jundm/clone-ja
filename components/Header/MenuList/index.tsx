import React from "react";
import Image from "next/image";
import {
  Gnb_1da_a,
  Gnb_1dli_li,
  Gnb_1dul_ul,
  Gnb_menu_btn_button,
  Gnb_wrap_div,
  Hd_wrapper_div,
} from "./style";
import GNB from "@public/assets/headers/links/gnb.webp";

interface MenuListProps {}

function MenuList({}: MenuListProps) {
  return (
    <>
      <Hd_wrapper_div>
        <nav>
          <Gnb_wrap_div>
            <Gnb_1dul_ul>
              <li>
                <Gnb_menu_btn_button type="button" title="전체메뉴">
                  <Image src={GNB} alt="" />
                </Gnb_menu_btn_button>
              </li>
              <Gnb_1dli_li>
                <a href="/jnTops/" className="gnb_1da">
                  Top100
                </a>
              </Gnb_1dli_li>
              <Gnb_1dli_li>
                <a href="/jnTops/" className="gnb_1da">
                  자격증정보
                </a>
              </Gnb_1dli_li>
              <Gnb_1dli_li>
                <a href="/jnTops/" className="gnb_1da">
                  어학/공무원
                </a>
              </Gnb_1dli_li>
              <Gnb_1dli_li>
                <a href="/jnTops/" className="gnb_1da">
                  자넷info
                </a>
              </Gnb_1dli_li>
              <Gnb_1dli_li>
                <a href="/jnTops/" className="gnb_1da">
                  자넷톡
                </a>
              </Gnb_1dli_li>
            </Gnb_1dul_ul>
            <ul style={{ display: "flex" }}>
              <Gnb_1dli_li>
                <Gnb_1da_a
                  href="https://janet.co.kr/jnTown/"
                  style={{
                    background:
                      "url('assets/headers/links/aca.webp') no-repeat center 12px",
                  }}
                >
                  우리동네학원
                </Gnb_1da_a>
              </Gnb_1dli_li>
              <Gnb_1dli_li>
                <Gnb_1da_a
                  href="https://janet.co.kr/jnTown/"
                  style={{
                    background:
                      "url('assets/headers/links/commu.webp') no-repeat 30px 14px;",
                  }}
                >
                  커뮤니티
                </Gnb_1da_a>
              </Gnb_1dli_li>
              <Gnb_1dli_li>
                <Gnb_1da_a
                  href="https://janet.co.kr/jnTown/"
                  style={{
                    background:
                      "url('assets/headers/links/ai.webp') no-repeat 18px 25px;",
                  }}
                >
                  자격증AI
                </Gnb_1da_a>
              </Gnb_1dli_li>
            </ul>
          </Gnb_wrap_div>
        </nav>
      </Hd_wrapper_div>
    </>
  );
}

export default MenuList;
