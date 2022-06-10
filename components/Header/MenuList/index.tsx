import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  AI_image_li,
  GnbTalk_li,
  Gnb_1da_a,
  Gnb_1dul_ul,
  Gnb_1dul_li,
  Gnb_Info_li,
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
              <Gnb_1dul_li>
                <a href="https://janet.co.kr/jnTops/" className="gnb_1da">
                  Top100
                </a>
              </Gnb_1dul_li>
              <Gnb_1dul_li>
                <a href="https://janet.co.kr/jnLics/" className="gnb_1da">
                  자격증정보
                </a>
              </Gnb_1dul_li>
              <Gnb_1dul_li>
                <a href="https://janet.co.kr/jnLnPo/" className="gnb_1da">
                  어학/공무원
                </a>
              </Gnb_1dul_li>
              <Gnb_Info_li
                onMouseEnter={() => {
                  setinfo(true);
                }}
                onMouseLeave={() => {
                  setinfo(false);
                }}
              >
                <a
                  href="https://janet.co.kr/bbs/board.php?bo_table=bNews"
                  className="gnb_1da"
                >
                  {info ? "" : "자넷info"}
                </a>
              </Gnb_Info_li>
              <GnbTalk_li
                onMouseEnter={() => {
                  setTalk(true);
                }}
                onMouseLeave={() => {
                  setTalk(false);
                }}
              >
                <a
                  href="https://janet.co.kr/jnTalk/index.php"
                  className="gnb_1da"
                >
                  {talk ? "" : "자넷톡"}
                </a>
              </GnbTalk_li>
            </Gnb_1dul_ul>
            <ul style={{ display: "flex" }}>
              <Gnb_1dul_li>
                <Gnb_1da_a
                  href="https://janet.co.kr/jnTown/"
                  style={{
                    background:
                      "url('assets/headers/links/aca.webp') no-repeat center 12px",
                  }}
                >
                  우리동네학원
                </Gnb_1da_a>
              </Gnb_1dul_li>
              <Gnb_1dul_li>
                <Gnb_1da_a
                  href="https://janet.co.kr/jnComm/"
                  style={{
                    background:
                      "url('assets/headers/links/commu.webp') no-repeat 30px 14px;",
                  }}
                >
                  커뮤니티
                </Gnb_1da_a>
              </Gnb_1dul_li>
              <AI_image_li>
                <Gnb_1da_a href="https://janet.co.kr/jnRcmd/jnRcmd_test.php">
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
