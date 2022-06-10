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
import iCrtfc from "@public/assets/banners/infomations/자격증정보/iCrtfc.webp";
import inCrfc from "@public/assets/banners/infomations/자격증정보/inCrfc.webp";
import rCrtfc from "@public/assets/banners/infomations/자격증정보/rCrtfc.webp";
import sCrtfc from "@public/assets/banners/infomations/자격증정보/sCrtfc.webp";
import banner from "@public/assets/banners/infomations/d0942d969f0a37cb73a46db345ea874b.png";
import { SwiperButtonNext, SwiperButtonPrev } from "elements/SwiperButton";

interface MainInfoProps {}

function MainInfo({}: MainInfoProps) {
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
        <SwiperSlide>
          <Info_div>
            <Tit_h1>자격증 정보</Tit_h1>
          </Info_div>
          <Info_ul>
            <Info_li>
              <a href="">
                <Thum_span>
                  <Image src={inCrfc} alt="" />
                </Thum_span>
                <Txt_box_div>
                  <Txt_box_h3>자격증정보</Txt_box_h3>
                  <Txt_box_p>자격증정보의 모든 것</Txt_box_p>
                </Txt_box_div>
              </a>
            </Info_li>
            <Info_li>
              <a href="">
                <Thum_span>
                  <Image src={iCrtfc} alt="" />
                </Thum_span>
                <Txt_box_div>
                  <Txt_box_h3>계열별정보</Txt_box_h3>
                  <Txt_box_p>자격증에 대하여 알려드립니다.</Txt_box_p>
                </Txt_box_div>
              </a>
            </Info_li>
            <Info_li>
              <a href="">
                <Thum_span>
                  <Image src={sCrtfc} alt="" />
                </Thum_span>
                <Txt_box_div>
                  <Txt_box_h3>자격증 공모전</Txt_box_h3>
                  <Txt_box_p>자격증 관련 공모전 정보 확인하기</Txt_box_p>
                </Txt_box_div>
              </a>
            </Info_li>
            <Info_li>
              <a href="">
                <Thum_span>
                  <Image src={rCrtfc} alt="" />
                </Thum_span>
                <Txt_box_div>
                  <Txt_box_h3>시험접수안내</Txt_box_h3>
                  <Txt_box_p>필기/실기 기본접수안내</Txt_box_p>
                </Txt_box_div>
              </a>
            </Info_li>
          </Info_ul>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Banner_image_div>
        <Image src={banner} alt="" style={{}} />
      </Banner_image_div>
    </MainInfo_div>
  );
}

export default MainInfo;
