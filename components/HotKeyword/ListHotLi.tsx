import React from "react";
import {
  Date_span,
  D_day_h5,
  ImgBox_div,
  ImgBox_Image,
  ListHot_a,
  ListHot_li,
  Name_h3,
  OverTxt_div,
  OverTxt_p,
  SubTxt_div,
  SubTxt_p,
} from "./style";
import one from "@public/assets/banners/aticles/hotKeyword_01.webp";
import two from "@public/assets/banners/aticles/hotKeyword_02.webp";
import three from "@public/assets/banners/aticles/hotKeyword_03.webp";
import four from "@public/assets/banners/aticles/hotKeyword_04.webp";
import five from "@public/assets/banners/aticles/hotKeyword_05.webp";
import six from "@public/assets/banners/aticles/hotKeyword_06.webp";
import seven from "@public/assets/banners/aticles/hotKeyword_07.webp";
import eight from "@public/assets/banners/aticles/hotKeyword_08.webp";
import dayjs from "dayjs";

interface ListHotLiProps {
  link: string;
  background: string;
  name_h3: string;
  subtxt_p: string;
  index: number;
  type_p: string;
  period: string;
  esRegdt: string;
}

function ListHotLi({
  link,
  background,
  name_h3,
  subtxt_p,
  period,
  type_p,
  index,
  esRegdt,
}: ListHotLiProps) {
  //! image 에러때문에둠옮겨둠
  const items = [one, two, three, four, five, six, seven, eight];
  const now = dayjs();
  let expired_at = dayjs(esRegdt).add(1, "d");
  let D_day = expired_at.diff(now, "day", false);
  return (
    <ListHot_li>
      <ListHot_a href={link}>
        <ImgBox_div background={background}>
          <ImgBox_Image className="img_image" src={items[index]} alt="" />
          <Name_h3>{name_h3}</Name_h3>
          <D_day_h5>D-{D_day}</D_day_h5>
        </ImgBox_div>
        <SubTxt_div>
          <SubTxt_p>시행기관 : {subtxt_p}</SubTxt_p>
          <Date_span>시험일 : {dayjs(esRegdt).format("YYYY-MM-DD")}</Date_span>
        </SubTxt_div>
        <OverTxt_div>
          <OverTxt_p>
            <strong style={{ fontWeight: "700" }}>유형:</strong> {type_p}
          </OverTxt_p>
          <OverTxt_p>
            <strong style={{ fontWeight: "700" }}>접수기간:</strong> {period}
          </OverTxt_p>
        </OverTxt_div>
      </ListHot_a>
    </ListHot_li>
  );
}

export default ListHotLi;
