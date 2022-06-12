import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  Info_div,
  Tit_h1,
  Info_li,
  Thum_span,
  Txt_box_div,
  Txt_box_h3,
  Txt_box_p,
  Info_ul,
  Info3_li,
  Thum3_span,
  Txt_box3_p,
} from "./style";

interface InfomationProps {
  tit_h1: string;
  link: string[];
  image: StaticImageData[];
  txt_box_h3: string[];
  txt_box_p: string[];
}
interface Info_Props {
  tit_h1: string;
  link: string[];
  image: StaticImageData[];
  txt_box_h3: string[];
  txt_box_p: string[];
}

function Infomation({
  tit_h1,
  link,
  image,
  txt_box_h3,
  txt_box_p,
}: InfomationProps) {
  const alertMessage = (link: string) => {
    if (link === "") {
      alert("준비중입니다.");
    }
  };

  return (
    <>
      <Info_div>
        <Tit_h1>{tit_h1}</Tit_h1>
      </Info_div>
      <Info_ul>
        {link.map((data, index) => {
          if (link.length === 4) {
            return (
              <Info_li key={index} onClick={() => alertMessage(data)}>
                <a
                  href={data !== "" ? data : undefined}
                  style={{ cursor: "pointer" }}
                >
                  <Thum_span>
                    <Image src={image[index]} alt="" />
                  </Thum_span>
                  <Txt_box_div>
                    <Txt_box_h3>{txt_box_h3[index]}</Txt_box_h3>
                    <Txt_box_p>{txt_box_p[index]}</Txt_box_p>
                  </Txt_box_div>
                </a>
              </Info_li>
            );
          } else {
            return (
              <Info3_li key={index}>
                <a href={data}>
                  <Thum3_span>
                    <Image src={image[index]} alt="" />
                  </Thum3_span>
                  <Txt_box_div>
                    <Txt_box_h3>{txt_box_h3[index]}</Txt_box_h3>
                    <Txt_box3_p>{txt_box_p[index]}</Txt_box3_p>
                  </Txt_box_div>
                </a>
              </Info3_li>
            );
          }
        })}
      </Info_ul>
    </>
  );
}

export default Infomation;
