import { SwiperButtonNext, SwiperButtonPrev } from "elements/SwiperButton";
import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tit_h1 } from "../MainInfo/style";
import {
  Chart_content_ul,
  Fixed_button_div,
  Hot_item_id_span,
  Hot_item_li,
  MainChart_div,
  Swiper_container_div,
} from "./style";
import axios from "axios";

interface MainChartProps {}

function MainChart({}: MainChartProps) {
  const [rank, setRank] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/ranks").then((ranked) => {
      setRank(ranked.data);
    });
  }, []);

  return (
    <MainChart_div>
      <Swiper_container_div>
        <Swiper
          style={{
            margin: "0 auto",
            zIndex: "1",
            position: "static",
          }}
          loop
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
          <SwiperSlide>
            <Tit_h1>기사 인기순위</Tit_h1>
            <Chart_content_ul>
              {rank.map((data: { id: number; title: string }) => {
                return (
                  <Hot_item_li number={data.id} key={data.id}>
                    <a href="">
                      <Hot_item_id_span>{data.title}</Hot_item_id_span>
                    </a>
                  </Hot_item_li>
                );
              })}
            </Chart_content_ul>
          </SwiperSlide>
        </Swiper>
      </Swiper_container_div>
    </MainChart_div>
  );
}

export default MainChart;
