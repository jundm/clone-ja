import { useAtom } from "jotai";
import React from "react";
import { heightAtom } from "util/inputAtom";
import {
  Gnb_all_div,
  Gnb_al_a,
  Gnb_al_li,
  Gnb_al_li_li,
  Gnb_al_li_ul,
  Gnb_al_ul,
} from "./style";

interface HiddenMenuProps {}

//*! NOT REFECTORY */
function HiddenMenu({}: HiddenMenuProps) {
  const [value] = useAtom(heightAtom);
  return (
    <Gnb_all_div toggle={value.toggle}>
      <Gnb_al_ul>
        <Gnb_al_li>
          <Gnb_al_a href="https://janet.co.kr/jnLics/">자격증 정보</Gnb_al_a>
          <Gnb_al_li_ul>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licensebyJob.php">
                직무별 자격증
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licenseNTQC.php">
                계열별정보
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licenseIntlC.php">
                국제자격증
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licenseSchedule.php">
                자격증일정
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licenseTestGuide.php">
                시험접수안내
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licenseCB.php">학점은행제</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/licenseNCSGuide.php">
                과정평가형 자격
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnJob/jobInfo">직업정보검색</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnJob/jobDic">직업사전</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLics/campaign/bCampaign.php">
                국가자격대여 근절캠패인
              </a>
            </Gnb_al_li_li>
          </Gnb_al_li_ul>
        </Gnb_al_li>
        <Gnb_al_li>
          <Gnb_al_a href="https://janet.co.kr/jnLnPo/">어학/공무원</Gnb_al_a>
          <Gnb_al_li_ul>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLnPo/lninfo.php">어학</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLnPo/laInfo.php">
                어학 원서접수 안내
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLnPo/poinfo.php">공무원</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnLnPo/paInfo.php">
                공무원 원서접수 안내
              </a>
            </Gnb_al_li_li>
          </Gnb_al_li_ul>
        </Gnb_al_li>
        <Gnb_al_li>
          <Gnb_al_a href="https://janet.co.kr/bbs/board.php?bo_table=bNews">
            자넷info
          </Gnb_al_a>
          <Gnb_al_li_ul>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/board.php?bo_table=bNews">
                자넷뉴스
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/board.php?bo_table=bMagazine">
                자넷매거진
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnInfo/qnet_info.php">
                큐넷 이용안내
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnInfo/youth_policy_info.php">
                청년지원정책
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/board.php?bo_table=bContest">
                자격증 공모전
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnInfo/benefit.php">국가혜택정보</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/board.php?bo_table=bPrivilege">
                대학별전자격특전
              </a>
            </Gnb_al_li_li>
          </Gnb_al_li_ul>
        </Gnb_al_li>
        <Gnb_al_li>
          <Gnb_al_a href="https://janet.co.kr/bbs/board.php?bo_table=bQna">
            자넷톡
          </Gnb_al_a>
          <Gnb_al_li_ul>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnTalk/licenseTalk.php">
                자격증 토론방
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnTalk/normalTalk.php">
                일반 토론방
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnTalk/faq.php">FAQ</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/board.php?bo_table=janettv">
                자넷TV
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li />
            <Gnb_al_a href="https://janet.co.kr/jnTown/">우리동네학원</Gnb_al_a>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnTown/index.php">맞춤학원검색</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnTown/jnTownAcademySearch.php">
                학원 찾아드림
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnTown/townInfo.php">
                우리동네학원 info
              </a>
            </Gnb_al_li_li>
          </Gnb_al_li_ul>
        </Gnb_al_li>
        <Gnb_al_li>
          <Gnb_al_a href="https://janet.co.kr/jnLics/">자넷추천</Gnb_al_a>
          <Gnb_al_li_ul>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnRcmd/jnRcmd_test.php">
                추천테스트
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnRcmd/">추천AI</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/jnComm/">커뮤니티</a>
            </Gnb_al_li_li>
          </Gnb_al_li_ul>
        </Gnb_al_li>
        <Gnb_al_li>
          <Gnb_al_a href="https://janet.co.kr/mypage/">MY PAGE</Gnb_al_a>
          <Gnb_al_li_ul>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/mypage/">나의 자격증</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/mypage/mytalk.php">자넷톡</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/mypage/mysearch.php">즐겨찾기</a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/member_confirm.php?url=/bbs/register_form.php">
                나의정보수정
              </a>
            </Gnb_al_li_li>
            <Gnb_al_li_li>
              <a href="https://janet.co.kr/bbs/member_confirm.php?url=/bbs/register_license_form.php">
                자격증정보수정
              </a>
            </Gnb_al_li_li>
          </Gnb_al_li_ul>
        </Gnb_al_li>
      </Gnb_al_ul>
    </Gnb_all_div>
  );
}

export default HiddenMenu;
