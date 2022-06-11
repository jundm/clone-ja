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
          <Image src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={six} alt="" />
        </SwiperSlide>
      </Swiper>
    </TopAdv_Bn_section>
  );
}

export default TopAdvBnSection;
