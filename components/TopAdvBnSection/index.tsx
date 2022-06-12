import React from "react";
import { TopAdv_Bn_section } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  SwiperCustomButtonNext,
  SwiperCustomButtonPrev,
} from "elements/SwiperButton";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import one from "public/assets/banners/body_banners/MainBn_scroll_01.webp";
import two from "public/assets/banners/body_banners/MainBn_scroll_02.webp";
import three from "public/assets/banners/body_banners/MainBn_scroll_03.webp";
import four from "public/assets/banners/body_banners/MainBn_scroll_04.webp";
import five from "public/assets/banners/body_banners/MainBn_scroll_05.webp";
import six from "public/assets/banners/body_banners/MainBn_scroll_06.webp";
import Image from "next/image";

interface TopAdvBnSectionProps {}
//! NOT REFECTORY
function TopAdvBnSection({}: TopAdvBnSectionProps) {
  return (
    <TopAdv_Bn_section style={{ position: "relative" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
        style={{
          position: "static",
          cursor: "pointer",
          width: "1250px",
        }}
      >
        <SwiperCustomButtonNext>
          <AiOutlineRight size={20} />
        </SwiperCustomButtonNext>
        <SwiperCustomButtonPrev>
          <AiOutlineLeft size={20} />
        </SwiperCustomButtonPrev>
        <SwiperSlide>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=176">
            <Image src={one} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=170">
            <Image src={two} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=184">
            <Image src={three} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=182">
            <Image src={four} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=174">
            <Image src={five} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine&wr_id=183">
            <Image src={six} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </TopAdv_Bn_section>
  );
}

export default TopAdvBnSection;
