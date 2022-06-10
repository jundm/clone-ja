import { Swiper_button } from "@components/TopSection/MainInfo/style";
import { IconType } from "react-icons";
import { useSwiper } from "swiper/react";

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
      onClick={(e) => {
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
      onClick={(e) => {
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
    <div
      onClick={(e) => {
        e.stopPropagation();
        swiper.slideNext();
      }}
    >
      {children}
    </div>
  );
};
