import { StaticImageData } from "next/image";
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

interface ListHotLiProps {
  link: string;
  background: string;
  image: StaticImageData;
  name_h3: string;
  d_day_h5: string;
  subtxt_p: string;
  date_span: string;
  type_p: string;
  period: string;
}

function ListHotLi({
  link,
  background,
  image,
  name_h3,
  d_day_h5,
  subtxt_p,
  date_span,
  type_p,
  period,
}: ListHotLiProps) {
  return (
    <ListHot_li>
      <ListHot_a href={link}>
        <ImgBox_div background={background}>
          <ImgBox_Image className="img_image" src={image} alt="" />
          <Name_h3>{name_h3}</Name_h3>
          <D_day_h5>{d_day_h5}</D_day_h5>
        </ImgBox_div>
        <SubTxt_div>
          <SubTxt_p>{subtxt_p}</SubTxt_p>
          <Date_span>{date_span}</Date_span>
        </SubTxt_div>
        <OverTxt_div>
          <OverTxt_p>
            <strong style={{ fontWeight: "700" }}>유형:</strong>
            {type_p}
          </OverTxt_p>
          <OverTxt_p>
            <strong style={{ fontWeight: "700" }}>접수기간:</strong>
            {period}
          </OverTxt_p>
        </OverTxt_div>
      </ListHot_a>
    </ListHot_li>
  );
}

export default ListHotLi;
