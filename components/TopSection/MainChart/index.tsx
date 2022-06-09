import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tit_h1 } from "../MainInfo/style";
import { Chart_content_ul, MainChart_div, Swiper_container_div } from "./style";

interface MainChartProps {}

function MainChart({}: MainChartProps) {
  return (
    <MainChart_div>
      <Swiper_container_div>
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Tit_h1>기사 인기순위</Tit_h1>
            <Chart_content_ul>
              
            </Chart_content_ul>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Swiper_container_div>
    </MainChart_div>
  );
}

export default MainChart;
