import React from "react";
import {
  Banner_image_div,
  Fixed_button_div,
  Info_div,
  Info_li,
  Info_ul,
  MainInfo_div,
  Thum_span,
  Tit_h1,
  Txt_box_div,
  Txt_box_h3,
  Txt_box_p,
} from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import banner from "@public/assets/banners/infomations/d0942d969f0a37cb73a46db345ea874b.png";
import inCrfc from "@public/assets/banners/infomations/자격증정보/inCrfc.webp";
import iCrtfc from "@public/assets/banners/infomations/자격증정보/iCrtfc.webp";
import sCrtfc from "@public/assets/banners/infomations/자격증정보/sCrtfc.webp";
import rCrtfc from "@public/assets/banners/infomations/자격증정보/rCrtfc.webp";
import bMagazine from "@public/assets/banners/infomations/자넷Info/bNews.webp";
import bNews from "@public/assets/banners/infomations/자넷Info/bNews.webp";
import event from "@public/assets/banners/infomations/자넷Info/event.webp";
import ad_info from "@public/assets/banners/infomations/자넷Info/ad_info.webp";
import hot_issue from "@public/assets/banners/infomations/커뮤니티/hot_issue.webp";
import bBest from "@public/assets/banners/infomations/커뮤니티/bBest.webp";
import bFree from "@public/assets/banners/infomations/커뮤니티/bFree.webp";
import bHumor from "@public/assets/banners/infomations/커뮤니티/bHumor.webp";
import ai_rcmd from "@public/assets/banners/infomations/추천/ai_rcmd.webp";
import jprs_test from "@public/assets/banners/infomations/추천/jprs_test.webp";
import job_test from "@public/assets/banners/infomations/추천/job_test.webp";
import big5_test from "@public/assets/banners/infomations/추천/big5_test.webp";
import bQna from "@public/assets/banners/infomations/자넷톡/bQna.webp";
import janettv from "@public/assets/banners/infomations/자넷톡/janettv.webp";
import faq from "@public/assets/banners/infomations/자넷톡/faq.webp";
import jnTown1 from "@public/assets/banners/infomations/우리동네_학원은/jnTown1.webp";
import jnTown2 from "@public/assets/banners/infomations/우리동네_학원은/jnTown2.webp";
import jnTown3 from "@public/assets/banners/infomations/우리동네_학원은/jnTown3.webp";
import jnTown4 from "@public/assets/banners/infomations/우리동네_학원은/jnTown4.webp";

import { SwiperButtonNext, SwiperButtonPrev } from "elements/SwiperButton";
import Infomation from "./Infomation";

interface MainInfoProps {}

function MainInfo({}: MainInfoProps) {
  const data = [
    {
      tit_h1: "자격증정보",
      link: [
        "https://janet.co.kr/jnLics/",
        "https://janet.co.kr/jnLics/licensebyIntlCategory.php",
        "https://janet.co.kr/jnLics/licenseSchedule.php",
        "https://janet.co.kr/jnLics/licenseTestGuide.php",
      ],
      image: [inCrfc, iCrtfc, sCrtfc, rCrtfc],
      txt_box_h3: ["자격증정보", "계열별정보", "자격증 공모전", "시험접수안내"],
      txt_box_p: [
        "자격증정보의 모든것",
        "자격증에 대하여 알려드립니다.",
        "자격증 관련 공모전 정보 확인하기",
        "필기/실기 기본접수안내",
      ],
    },
    {
      tit_h1: "자넷Info",
      link: [
        "https://janet.co.kr/bbs/board.php?bo_table=bMagazine",
        "https://janet.co.kr/bbs/board.php?bo_table=bNews",
        "https://janet.co.kr/bbs/board.php?bo_table=event",
        "https://janet.co.kr/jnInfo/ad_info.php",
      ],
      image: [bMagazine, bNews, event, ad_info],
      txt_box_h3: ["자넷매거진", "뉴스", "청년지원정책", "공인중개사원서접수"],
      txt_box_p: [
        "다양한 자격증 매거진",
        "오늘의 최신뉴스는?",
        "다양한 지원정책을 한눈에!",
        "가장빠른 원서 접수 꿀팁",
      ],
    },
    {
      tit_h1: "커뮤니티",
      link: [
        "https://janet.co.kr/bbs/best_top.php",
        "",
        "https://janet.co.kr/bbs/board.php?bo_table=bFree",
        "https://janet.co.kr/bbs/board.php?bo_table=bHumor",
      ],
      image: [hot_issue, bBest, bFree, bHumor],
      txt_box_h3: ["베스트글", "오늘의 핫이슈", "자유게시판", "유머게시판"],
      txt_box_p: [
        "자넷의 인기 베스트글 모음",
        "핫이슈 키워드가 궁금하다면?",
        "자유로운 주제를 나누는 공간",
        "나만의유머를 소통해보세요",
      ],
    },
    {
      tit_h1: "추천",
      link: [
        "https://janet.co.kr/jnRcmd/",
        "https://janet.co.kr/jnRcmd/jprsStep1.php",
        "https://janet.co.kr/jnRcmd/job_test.php",
        "https://janet.co.kr/jnRcmd/big_test.php",
      ],
      image: [ai_rcmd, jprs_test, job_test, big5_test],
      txt_box_h3: [
        "자넷 AI 추천",
        "JPRS추천 테스트",
        "직업성향 테스트",
        "Oxford BIG5 테스트",
      ],
      txt_box_p: [
        "AI 분석을 통한 자격증 추천",
        "내성향에 맞는 자격증은?",
        "내게 맞는 직업은?",
        "자세한 직업분석이 필요하다면?",
      ],
    },
    {
      tit_h1: "자넷톡",
      link: [
        "https://janet.co.kr/bbs/board.php?bo_table=bQna",
        "https://janet.co.kr/bbs/board.php?bo_table=janettv",
        "",
      ],
      image: [bQna, janettv, faq],
      txt_box_h3: ["자넷 질문톡", "자넷 TV", "FAQ"],
      txt_box_p: [
        "궁금증을 풀어드려요!",
        "자넷의 영상컨텐츠 살펴보기",
        "자넷에 대해 궁금할땐?",
      ],
    },
    {
      tit_h1: "우리동네 학원은?",
      link: [
        "https://janet.co.kr/jnTown/index.php",
        "https://janet.co.kr/jnTown/townInfo.php",
        "",
        "https://janet.co.kr/jnTown/academySearch.php",
      ],
      image: [jnTown1, jnTown2, jnTown3, jnTown4],
      txt_box_h3: [
        "맞춤학원검색",
        "우리동네학원 info",
        "학원찾아드림",
        "지도보기",
      ],
      txt_box_p: [
        "나에게 맞는 맞춤 학원은?",
        "우리동네 학원 소식 살펴보기!",
        "학원을 비교해서 선택해보세요!",
        "내주변 자격증 학원 찾아보기",
      ],
    },
  ];
  return (
    <MainInfo_div>
      <Swiper
        onSlideChange={(swiper) => swiper}
        onSwiper={(swiper) => swiper}
        loop
        style={{
          margin: "0 auto",
          overflow: "hidden",
          zIndex: "1",
          position: "relative",
          marginTop: "-10px",
        }}
      >
        <Fixed_button_div>
          <SwiperButtonPrev>
            <BiChevronLeft
              size="23"
              style={{
                color: "#8e8cfd",
                transform: "translate(-8px,-3px)",
              }}
            />
          </SwiperButtonPrev>
          <SwiperButtonNext>
            <BiChevronRight
              size="23"
              style={{
                color: "#8e8cfd",
                transform: "translate(-8px,-3px)",
              }}
            />
          </SwiperButtonNext>
        </Fixed_button_div>
        {data.map((item, index) => {
          const { tit_h1, link, image, txt_box_h3, txt_box_p } = item;
          return (
            <SwiperSlide key={index}>
              <Infomation
                tit_h1={tit_h1}
                link={link}
                image={image}
                txt_box_h3={txt_box_h3}
                txt_box_p={txt_box_p}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Banner_image_div>
        <Image src={banner} alt="" style={{}} />
      </Banner_image_div>
    </MainInfo_div>
  );
}

export default MainInfo;
