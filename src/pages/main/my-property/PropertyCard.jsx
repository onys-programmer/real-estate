import styled from "@emotion/styled"; // Emotion의 styled 컴포넌트를 가져옴
import Pin from '../../../components/Pin'; // Pin 컴포넌트를 가져옴
import { border } from "../../../constants/styles/commonCSS"; // 공통 스타일을 가져옴
import VacantAdvertisingBadge from "../../../components/badges/VacantAdvertisingBadge"; // 뱃지 컴포넌트를 가져옴
import RentalStatusBadge from "../../../components/badges/RentalStatusBadge"; // 뱃지 컴포넌트를 가져옴

// PropertyCard 컴포넌트 정의
export default function PropertyCard({property}) {
  const { pinned, vacantAdvertising } = property; // 매물의 고정 및 공실광고 상태 가져오기
  
  // UI 반환
  return (
    <S.Container>
      <S.Image>
        <S.PinContainer>
          <Pin pinned={pinned} /> {/* Pin 컴포넌트 렌더링 */}
        </S.PinContainer>
      </S.Image>
      <S.Content>
        <S.Badges>
          <RentalStatusBadge /> {/* 뱃지 컴포넌트 렌더링 */}
          <VacantAdvertisingBadge advertising={vacantAdvertising}/> {/* 뱃지 컴포넌트 렌더링 */}
        </S.Badges>
        <S.Title>
          {property.name} {/* 매물 이름 출력 */}
        </S.Title>
        <S.Button>
          매물 게시 정보 변경
          <S.Arrow />
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    border: solid 1px #d9d9d9;
    background-color: #ffffff;
    border-radius: 10px;
    width: 260px;
    min-width: 260px;
    height: 316px;
    cursor: pointer;
    label: PropertyCard__Container; /* 스타일 레이블 설정 */
  `,
  Image: styled.div`
    background-color: #D9D9D9;
    height: 140px;
    border-radius: 10px 10px 0 0;
    label: PropertyCard__Image; /* 스타일 레이블 설정 */
  `,
  PinContainer: styled.div`
    position: absolute;
    margin-left: 26px;
    margin-top: 16px;
    label: PropertyCard__PinContainer; /* 스타일 레이블 설정 */
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 26px 30px;
    height: 176px;
    label: PropertyCard__Content; /* 스타일 레이블 설정 */
  `,
  Badges: styled.div`
    display: flex;
    gap: 8px;
    label: PropertyCard__Badges; /* 스타일 레이블 설정 */
  `,
  Title: styled.div`
    font-weight: 700;
    label: PropertyCard__Title; /* 스타일 레이블 설정 */
  `,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 207px;
    height: 50px;
    background-color: #FAFAFA;
    ${border} /* 공통 스타일인 border 적용 */
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: #3F3F3F;
    cursor: pointer;
    &:hover {
      background-color: #EFEFEF;
    };
    label: PropertyCard__Button; /* 스타일 레이블 설정 */
  `,
  Arrow: styled.img`
    src: url('/images/icons/arrow.png'); /* 이미지 경로 설정 */
    label: PropertyCard__Arrow; /* 스타일 레이블 설정 */
  `,
};
