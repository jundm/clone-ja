import React, { useState } from "react";
import { ImgBanner_div, IndexNumber } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import one from "@public/assets/banners/carousel/mainBn_top_01.webp";
import two from "@public/assets/banners/carousel/mainBn_top_02.webp";
import three from "@public/assets/banners/carousel/mainBn_top_03.webp";
import four from "@public/assets/banners/carousel/mainBn_top_04.webp";

interface SlideProps {}

function Slide({}: SlideProps) {
  const [realIndex, setRealIndex] = useState(0);
  return (
    <>
      <ImgBanner_div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          speed={300}
          loopedSlides={1}
          onSlideChange={(swiper) => {
            setRealIndex(swiper.realIndex);
          }}
          onSwiper={(swiper) => console.log(swiper, "swiper")}
          loop
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <Image src={one} alt="" width={420} height={370} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={two} alt="" width={420} height={370} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={three} alt="" width={420} height={370} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={four} alt="" width={420} height={370} />
          </SwiperSlide>
        </Swiper>
        <IndexNumber>{`${realIndex + 1}/4`}</IndexNumber>
      </ImgBanner_div>
    </>
  );
}

export default Slide;
