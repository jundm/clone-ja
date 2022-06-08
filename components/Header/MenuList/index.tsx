import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AI_image_li,
  Gnb_1da_a,
  Gnb_1dli_li,
  Gnb_1dul_ul,
  Gnb_menu_btn_button,
  Gnb_wrap_div,
  Hd_wrapper_div,
} from "./style";
import GNB from "@public/assets/headers/links/gnb.webp";
import { useAtom } from "jotai";
import { heightAtom } from "util/inputAtom";

interface MenuListProps {}

function MenuList({}: MenuListProps) {
  const [info, setinfo] = useState(false);
  const [talk, setTalk] = useState(false);
  const [, isHeight] = useAtom(heightAtom);
  const [boolean, setBoolean] = useState(false);
  useEffect(() => {
    isHeight({
      toggle: boolean,
    });
  }, [boolean]);
  return (
    <>
      <Hd_wrapper_div>
        <nav>
          <Gnb_wrap_div>
            <Gnb_1dul_ul>
              <li>
                <Gnb_menu_btn_button
                  type="button"
                  title="전체메뉴"
                  onClick={() => {
                    setBoolean(!boolean);
                  }}
                >
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
              <Gnb_1dli_li
                onMouseEnter={() => {
                  setinfo(true);
                }}
                onMouseLeave={() => {
                  setinfo(false);
                }}
                style={{
                  background: `url('assets/headers/links/${
                    info ? "gnbInfo.webp" : ""
                  }') no-repeat center 16px`,
                }}
              >
                <a href="/jnTops/" className="gnb_1da">
                  {info ? "" : "자넷info"}
                </a>
              </Gnb_1dli_li>
              <Gnb_1dli_li
                onMouseEnter={() => {
                  setTalk(true);
                }}
                onMouseLeave={() => {
                  setTalk(false);
                }}
                style={{
                  background: `url('assets/headers/links/${
                    talk ? "gnbTalk.webp" : ""
                  }') no-repeat center 16px`,
                }}
              >
                <a href="/jnTops/" className="gnb_1da">
                  {talk ? "" : "자넷톡"}
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
              <AI_image_li>
                <Gnb_1da_a href="https://janet.co.kr/jnTown/">
                  자격증AI
                </Gnb_1da_a>
              </AI_image_li>
            </ul>
          </Gnb_wrap_div>
        </nav>
      </Hd_wrapper_div>
    </>
  );
}

export default MenuList;
