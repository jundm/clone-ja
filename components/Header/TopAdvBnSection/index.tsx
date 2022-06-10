import React from "react";
import { TopAdv_Bn_section } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperCustomButtonNext } from "elements/SwiperButton";

interface TopAdvBnSectionProps {}

function TopAdvBnSection({}: TopAdvBnSectionProps) {
  return (
    <TopAdv_Bn_section>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop
      >
        <SwiperCustomButtonNext >다음</SwiperCustomButtonNext>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </TopAdv_Bn_section>
  );
}

export default TopAdvBnSection;
