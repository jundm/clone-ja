import React from "react";
import { HotKeyword_section, ListHot_ul, Purple_span, Tit_h1 } from "./style";
import one from "@public/assets/banners/aticles/hotKeyword_01.webp";
import two from "@public/assets/banners/aticles/hotKeyword_02.webp";
import three from "@public/assets/banners/aticles/hotKeyword_03.webp";
import four from "@public/assets/banners/aticles/hotKeyword_04.webp";
import five from "@public/assets/banners/aticles/hotKeyword_05.webp";
import six from "@public/assets/banners/aticles/hotKeyword_06.webp";
import seven from "@public/assets/banners/aticles/hotKeyword_07.webp";
import eight from "@public/assets/banners/aticles/hotKeyword_08.webp";
import ListHotLi from "./ListHotLi";

interface HotKeywordProps {}

function HotKeyword({}: HotKeywordProps) {
  return (
    <HotKeyword_section>
      <Tit_h1>
        <b>
          <Purple_span>HOT</Purple_span>
          키워드
        </b>
        TOP20
      </Tit_h1>
      <ListHot_ul>
        <ListHotLi
          background={"#e9b107"}
          image={one}
          name_h3={"토익(TOEIC)"}
          d_day_h5={"D-1"}
          subtxt_p={"시행기관 : 미국 ETS"}
          date_span={"시험일 : 2202-06-12"}
          type_p={"제463회"}
          period={"2202-04-25 ~ 30"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=155"}
        />
        <ListHotLi
          background={"#4b3962"}
          image={two}
          name_h3={"한국사능력검정시험"}
          d_day_h5={"D-0"}
          subtxt_p={"시행기관 : 국사편찬위원회"}
          date_span={"시험일 : 2202-06-11"}
          type_p={"제 59회"}
          period={"2202-05-16 ~ 23"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=144"}
        />
        <ListHotLi
          background={"#e16045"}
          image={three}
          name_h3={"전기기사"}
          d_day_h5={"D-21"}
          subtxt_p={"시행기관 : 한국산업인력공단"}
          date_span={"시험일 : 2022-07-02"}
          type_p={"국가기술자격 기사 (2202년도 제3회) 필기"}
          period={"2022-06-07 ~ 10"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91"}
        />
        <ListHotLi
          background={"#474756"}
          image={four}
          name_h3={"공인중개사"}
          d_day_h5={"D-140"}
          subtxt_p={"시행기관 : 한국산업인력공단"}
          date_span={"시험일 : 2022-10-29"}
          type_p={"전문자격 (2022년도 33회 2차) 필기"}
          period={"2022-08-08 ~ 14"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=331"}
        />
        <ListHotLi
          background={"#305a7e"}
          image={five}
          name_h3={"산업안전기사"}
          d_day_h5={"D-21"}
          subtxt_p={"시행기관 : 한국산업인력공단"}
          date_span={"시험일 : 2022-07-02"}
          type_p={"국가기술자격 기사 (2022년도 제3회) 필기"}
          period={"2022-06-07 ~ 10"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=96"}
        />
        <ListHotLi
          background={"#b13c2f"}
          image={six}
          name_h3={"KBS한국어능력시험"}
          d_day_h5={"D-8"}
          subtxt_p={"시행기관 : KBS 한국어진흥원"}
          date_span={"시험일 : 2202-06-19"}
          type_p={"제67회 KBS한국어능력시험"}
          period={"2022-05-02 ~ 03"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=145"}
        />
        <ListHotLi
          background={"#383f4e"}
          image={seven}
          name_h3={"요양보호사"}
          d_day_h5={"D-56"}
          subtxt_p={"시행기관 : 한국보건의료인국가시험원"}
          date_span={"시험일 : 2022-08-06"}
          type_p={"40회"}
          period={"2022-06-03 ~ 10"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=1622601017"}
        />
        <ListHotLi
          background={"#cd9308"}
          image={eight}
          name_h3={"ITQ"}
          d_day_h5={"D-0"}
          subtxt_p={"시행기관 : 한국생산성본부"}
          date_span={"시험일 : 2022-06-11"}
          type_p={"2022년 제6회 ITQ정기시험(2022.6.11)"}
          period={"2022-05-06 ~ 11"}
          link={"https://janet.co.kr/jnLics/licenseInfo.php?ld_id=176"}
        />
      </ListHot_ul>
    </HotKeyword_section>
  );
}

export default HotKeyword;
