import { IconType } from "react-icons";
import { useSwiper } from "swiper/react";
import {
  SwiperCustomButtonNext_div,
  SwiperCustomButtonPrev_div,
  Swiper_button,
} from "./style";

export const SwiperButtonNext: IconType = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Swiper_button
      style={{
        width: "19px",
        height: "19px",
        border: "1px solid #dfdfdf",
        background: "#fff",
        cursor: "pointer",
      }}
      onClick={(e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        swiper.slideNext();
      }}
    >
      {children}
    </Swiper_button>
  );
};
export const SwiperButtonPrev: IconType = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Swiper_button
      style={{
        width: "19px",
        height: "19px",
        background: "#fff",
        cursor: "pointer",
      }}
      onClick={(e: { stopPropagation: () => void }) => {
        e.stopPropagation();
        swiper.slidePrev();
      }}
    >
      {children}
    </Swiper_button>
  );
};

export const SwiperCustomButtonNext: IconType = ({ children }) => {
  const swiper = useSwiper();
  return (
    <SwiperCustomButtonNext_div
      onClick={(e) => {
        e.stopPropagation();
        swiper.slideNext();
      }}
    >
      {children}
    </SwiperCustomButtonNext_div>
  );
};
export const SwiperCustomButtonPrev: IconType = ({ children }) => {
  const swiper = useSwiper();
  return (
    <SwiperCustomButtonPrev_div
      onClick={(e) => {
        e.stopPropagation();
        swiper.slidePrev();
      }}
    >
      {children}
    </SwiperCustomButtonPrev_div>
  );
};
