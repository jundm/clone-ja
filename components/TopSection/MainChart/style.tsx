import styled from "@emotion/styled";

export const MainChart_div = styled.div`
  width: 260px;
  height: 370px;
  background: #fff;
  padding: 40px 30px 35px;
  float: left;
  position: relative;
  -webkit-box-shadow: 3px 3px 15px rgb(221 185 189 / 30%);
  -moz-box-shadow: 3px 3px 15px rgba(221, 185, 189, 0.3);
  box-shadow: 3px 3px 15px rgb(221 185 189 / 30%);
`;
export const Swiper_container_div = styled.div`
  margin: 0 auto;
  margin-top: -10px;
  z-index: 1;
`;
export const Chart_content_ul = styled.ul`
  padding: 10px 0;
`;
export const Fixed_button_div = styled.div`
  transform: translate(160px, -275px);
  z-index: 999;
  background: white;
  border: solid 1px white;
  position: absolute;
`;
export const Hot_item_li = styled.li<{ number: number }>`
  &:before {
    content: "${(props) => props.number}";
    width: 20px;
    font-size: 15px;
    color: #bababa;
    display: inline-block;
    text-align: center;
    box-sizing: border-box;
  }
`;
export const Hot_item_id_span = styled.span`
  font-size: 1.05em;
  line-height: 25px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  color: #333;
  background-color: #fff;
  :hover {
    text-decoration: underline;
  }
`;
