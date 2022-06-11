import styled from "@emotion/styled";
import Image from "next/image";

export const HotKeyword_section = styled.section`
  margin-bottom: 10px;
  width: 1307px;
  margin: 0 auto;
`;
export const Purple_span = styled.span`
  color: #8f45ef;
`;
export const Tit_h1 = styled.h1`
  display: flex;
  margin: 0 0 20px;
  padding-left: 42px;
  background: url("assets/banners/aticles/hot_keyword.webp") 0px -5px no-repeat;
  font-size: 28px;
  height: 40px;
  line-height: inherit;
  font-family: "noto sans kr";
  font-weight: 400;
`;
export const ListHot_ul = styled.ul`
  min-height: 1030px;
`;
export const ListHot_li = styled.li`
  float: left;
  margin: 0 16.666666px 16px 0;
  width: 300px;
  height: 190px;
  box-sizing: border-box;
  list-style: none;
  position: relative;
  cursor: pointer;
  :hover {
    .img_image {
      opacity: 1;
    }
    margin-top: -1px;
    margin-left: -1px;
    margin-right: 17.6px;
  }
`;
export const ListHot_a = styled.a`
  position: absolute;
  top: 0;
  display: block;
  width: 300px;
  height: 190px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #e5e5e5;
  overflow: hidden;
  z-index: 1;
  border-radius: 10px;
  &:hover {
    height: 395px;
    border: 2px solid transparent;
    background: linear-gradient(to right, white, white),
      linear-gradient(135deg, #add0ff, #bc8ff0);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    z-index: 9;

    &:after {
      content: "+";
      background: #bc8ff0;
      position: absolute;
      right: 0;
      bottom: 0;
      padding: 7px 11px 10px 13px;
      border-top-left-radius: 10px;
      z-index: 10;
      color: white;
      font-size: 25px;
      font-weight: bold;
    }
  }
  &:link {
    color: inherit;
    text-decoration: none;
  }
`;
export const ImgBox_div = styled.div<{ background: string }>`
  width: 300px;
  height: 120px;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.background};
`;

export const Name_h3 = styled.h3`
  font-size: 19.08px;
  font-weight: bold;
  color: #fff;
  line-height: 60px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  position: absolute;
  bottom: -18px;
  padding: 0 30px;
  width: 100%;
`;
export const D_day_h5 = styled.h5`
  position: absolute;
  right: 20px;
  top: 0px;
  display: block;
  width: 44px;
  line-height: 19px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  background: #9c57f5;
  border-radius: 10px;
  letter-spacing: -0.05em;
`;
export const ImgBox_Image = styled(Image)`
  opacity: 0.2;
`;
export const SubTxt_div = styled.div`
  margin: 0 30px;
  padding: 12px 0 20px;
`;
export const SubTxt_p = styled.p`
  font-size: 14.04px;
  line-height: 2;
  height: 28px;
  color: #6e6e6e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 0;
  word-break: break-all;
  margin-bottom: -5px;
`;
export const Date_span = styled.span`
  font-size: 12px;
  color: #f15959;
  word-break: break-all;
`;

export const OverTxt_div = styled.div`
  margin: 0 30px;
  padding-top: 30px;
  border-top: 1px solid #e5e5e5;
`;
export const OverTxt_p = styled.p`
    font-size: 14.4px;
    line-height: 1.5;
    color: #242424;
    white-space: break-spaces;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
}
`;
// export const ASDFASD1FASDFSGFDFGSDFGSDFGSDF = styled.div``;
