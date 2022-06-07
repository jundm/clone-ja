import styled from "@emotion/styled";

export const Tnb_div = styled.div`
  background: #fff;
  height: 55px;
  padding-top: 3px;
  align-items: center;
`;
export const Hd_login_ul = styled.ul`
  width: 1250px;
  margin: 0 auto;
  text-align: left;
`;
export const Hd_login_li = styled.li`
  width: 165px;
  display: inline-block;
  line-height: 0;
  z-index: 9;
`;
export const Logo_div = styled.div`
  display: inline-block;
  line-height: 0;
  z-index: 9;
`;

//input
export const Hd_sch_wr_div = styled.div<{ width: any }>`
  // border-gradient main-search 뭔지 확인
  width: ${(props) => props.width}px;
  border: 2px solid transparent !important;
  border-radius: 40px;
  -webkit-box-shadow: 3px 3px 15px rgba(221, 185, 189, 0.3);
  -moz-box-shadow: 3px 3px 15px rgba(221, 185, 189, 0.3);
  box-shadow: 3px 3px 15px rgba(221, 185, 189, 0.3);
  background: linear-gradient(to right, white, white),
    linear-gradient(135deg, #9c57f5, #9babff);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  z-index: 3;
  height: 40px;
  margin-top: 15px;
  font-family: "noto sans kr";
  //active가 원하는대로 동작안하므로 리액트 기능으로 구현
  transition: all 0.5s ease-in;
  &:active {
    width: 650px;
  }
`;

export const Hidden_input = styled.input`
  margin: 0;
  padding: 0;
  font-size: 1em;
  outline: none;
`;

export const Hd_sch_fieldset = styled.fieldset`
  float: none;
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
`;
export const Hd_sch_legend = styled.legend`
  border-bottom: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
  text-indent: -9999em;
  overflow: hidden;
`;
export const Search_tit_div = styled.div`
  float: left;
  width: 100px;
  padding: 0 10px 0 25px;
  margin: 0;
  height: 35px;
  line-height: 36px;
  font-size: 14px;
  border: none;
  outline: none;
`;
export const Sch_stx_input = styled.input`
  float: left;
  width: 230px;
  height: 35px;
  padding-left: 0;
  background: #fff;
  border: 0;
  border: none;
  outline: none;
  font-size: 14px;
  &:focus::placeholder {
    color: #8936f2;
    font-weight: bold;
  }
`;
export const Sch_submit_button = styled.button`
  float: right;
  border: 0;
  cursor: pointer;
  margin: 3px;
  background: none;
  line-height: initial;
  margin: 0;
  padding: 3px;
`;
export const Login_wr_ul = styled.ul`
  display: flex;
  float: right;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Login_wr_li = styled.li`
  margin-right: 20px;
`;
export const Menu_icon_span = styled.span`
  text-indent: -9999px;
  height: 30px;
  display: block;
`;
