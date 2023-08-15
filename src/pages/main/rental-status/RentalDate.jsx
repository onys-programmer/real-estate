import styled from "@emotion/styled"; // Emotion의 styled 컴포넌트를 가져옴
import { dateToYYYYMMDD } from "../../../utils/utils"; // 날짜를 YYYY-MM-DD 형식으로 변환하는 유틸리티 함수 가져옴

// RentalDate 컴포넌트 정의
export default function RentalDate({text, date}) {
  // UI 반환
  return (
    <S.Container>
      {/* 텍스트 컨테이너 */}
      <S.TextContainer>
        {text}
      </S.TextContainer>
      {/* 구분 기호 */}
      |
      {/* 날짜 컨테이너 */}
      <S.DateContainer>
        {dateToYYYYMMDD(date)} {/* 날짜를 YYYY-MM-DD 형식으로 변환하여 표시 */}
      </S.DateContainer>
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    display: flex;
    gap: 7px;
    color: #8B95A1; /* 텍스트 색상 */
    font-size: 11px;
    font-weight: 700;
    label: RentalDate__Container;
  `,
  TextContainer: styled.div`
    label: RentalDate__TextContainer;
  `,
  DateContainer: styled.div`
    /* 날짜 컨테이너 스타일 설정 */
  `,
};
