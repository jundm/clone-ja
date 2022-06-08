import styled from "@emotion/styled";

export const Hd_wrapper_div = styled.div`
  position: relative;
  /* margin: 0 auto; */
  width: 1250px;
  line-height: 65px;
  height: 75px;
  zoom: 1;
`;
export const Gnb_nav = styled.nav``;
export const Gnb_wrap_div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const Gnb_1dul_ul = styled.ul`
  display: flex;
`;
export const Gnb_1dli_li = styled.li`
  padding: 0 5px;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  text-align: center;
  width: 100px;
  :hover {
    color: #9c57f5;
  }
`;
export const AI_image_li = styled(Gnb_1dli_li)`
  background: url("assets/headers/links/ai.webp") no-repeat 20px 25px;
  :hover {
    background: url("assets/headers/links/ai_ov.webp") no-repeat 20px 0px;
  }
`;
export const Gnb_menu_btn_button = styled.button`
  width: 65px;
  height: 65px;
  line-height: 100px;
  border-radius: 50%;
  text-align: center;
  font-size: 1.6em;
  border: 0;
  color: #706efe;
  background: none;
  cursor: pointer;
`;

export const Gnb_1da_a = styled.a`
  text-indent: -9999px;
  width: 100px;
  display: block;
`;
