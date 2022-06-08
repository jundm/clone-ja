import styled from "@emotion/styled";

export const Gnb_all_div = styled.div<{ toggle: boolean }>`
  position: absolute;
  width: 100%;
  top: 129px;
  left: 0;
  background: #fff;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  z-index: 999;
  display: flex;
  transition: all 0.3s ease-in;
  overflow: hidden;
  height: ${(props) => (props.toggle ? "400" : "0")}px;
`;
export const Gnb_al_ul = styled.ul`
  background: #fff;
  width: 1250px;
  display: flex;
  margin: 0 auto;
`;
export const Gnb_al_li = styled.li`
  flex: 1;
  padding: 30px 29px;
  align-items: flex-start;
  :first-child {
    border-left: 1px solid #efefef;
  }
  border-right: 1px solid #efefef;
`;
export const Gnb_al_a = styled.a`
  font-size: 14px;
  display: block;
  position: relative;
  margin-bottom: 10px;
  font-weight: bold;
  color: #4a4a4a;
  :hover {
    color: #8b3af3;
  }
`;
export const Gnb_al_li_ul = styled.ul`
  margin-bottom: 0;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Gnb_al_li_li = styled.li`
  padding: 7px 0;
  line-height: 1.3;
  font-size: 13px;
  width: 150px;
  :hover {
    color: #8b3af3;
  }
`;

