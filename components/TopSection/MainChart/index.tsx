import { SwiperButtonNext, SwiperButtonPrev } from "elements/SwiperButton";
import React from "react";
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
  const rank = [
    {
      title: "기사 인기순위",
      content: [
        "전기기사",
        "산업안전기사",
        "위험물산업기사",
        "전기산업기사",
        "건축기사",
        "건설안전기사",
        "소방설비기사(전기분야)",
        "제품디자인산업기사",
        "건설기계정비산업기사",
        "사출금형산업기사",
      ],
    },
    {
      title: "기능장 인기순위",
      content: [
        "위험물기능장",
        "전기기능장",
        "가스기능장",
        "용접기능장",
        "기계가공기능장",
        "건설기계정비기능장",
        "건축일반시공기능장",
        "귀금속가공기능장",
        "금형제작기능장",
        "판금제관기능장",
      ],
    },
    {
      title: "베스트 글 Top 10",
      content: [
        "직업 적성 결과",
        "2급 생활스포츠 지도사...",
        "우리강디좀 봐주세요~",
        "ai 테스트 후기입니다...",
        "20대 카톡방에 숨은...",
        "유튜브에서 K-POP...",
        "얼마전에 장르만 로맨스...",
        "강남역 근처 미용학원...",
        "동물들은 죽음의 공포를...",
        "일본의 매직 핸드",
      ],
    },
    {
      title: "핫클릭 Top 10",
      content: [
        "자넷 커뮤니티 사용자...",
        "ai 테스트 후기입니다...",
        "아몬드 브리즈 아시나요...",
        "다들 오늘 집가시자마자...",
        "왜 여기에는 최신글보기...",
        "이제 슬슬 가을이 오나...",
        "점심 메뉴 머가 좋을까...",
        "20대 카톡방에 숨은...",
        "다들 반려동물 키우니?...",
        "있잖아..............",
      ],
    },
    {
      title: "기능사 인기순위",
      content: [
        "한식조리기능사",
        "지게차운전기능사",
        "전기기능사",
        "위험물기능사",
        "지적기능사",
        "광산보안기능사",
        "방사선비파괴검사기능사",
        "수산양식기능사",
        "반도체장비유지보수기능사",
        "영사기능사",
      ],
    },
    {
      title: "산업기사 인기순위",
      content: [
        "위험물산업기사",
        "전기산업기사",
        "제품디자인산업기사",
        "건설기계정비산업기사",
        "사출금형산업기사",
        "영사산업기사",
        "철도신호산업기사",
        "시가디자인산업기사",
        "소방설비산업기사(기계분야)",
        "생산자동화산업기사",
      ],
    },
  ];
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
          {rank.map((data, index) => {
            return (
              <>
                <SwiperSlide>
                  <Tit_h1>{data.title}</Tit_h1>
                  <Chart_content_ul>
                    {data.content.map((data, index) => {
                      return (
                        <Hot_item_li number={index + 1} key={index}>
                          <a href="">
                            <Hot_item_id_span>{data}</Hot_item_id_span>
                          </a>
                        </Hot_item_li>
                      );
                    })}
                  </Chart_content_ul>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </Swiper_container_div>
    </MainChart_div>
  );
}

export default MainChart;
