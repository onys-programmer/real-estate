// "@emotion/styled"에서 styled 컴포넌트를 가져옴
import styled from "@emotion/styled";

// Badge 컴포넌트 정의
export default function Badge({text, color="#ffffff", borderColor="#11B7E4", backgroundColor="transparent"}) {
  return (
    // 스타일링된 Container 컴포넌트를 반환
    <S.Container
      color={color}
      borderColor={borderColor} 
      backgroundColor={backgroundColor}
    >
      {text} {/* 전달받은 텍스트 출력 */}
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    display: flex; /* 가로로 배치 */
    justify-content: center; /* 가로 가운데 정렬 */
    align-items: center; /* 세로 가운데 정렬 */
    padding: 6px 8px; /* 내부 여백 설정 */
    width: fit-content; /* 컨텐츠에 맞게 너비 설정 */
    height: 30px; /* 높이 설정 */
    border-radius: 10px; /* 테두리 둥글게 설정 */
    border: 2px solid ${props => props.borderColor}; /* 테두리 속성 설정 (변수 사용 가능) */
    background-color: ${props => props.backgroundColor}; /* 배경색 설정 (변수 사용 가능) */
    color: ${props => props.color}; /* 글자색 설정 (변수 사용 가능) */
    font-size: 15px; /* 글자 크기 설정 */
    font-weight: 700; /* 글자 굵기 설정 */
    text-align: center; /* 텍스트 가운데 정렬 */
  `,
};
