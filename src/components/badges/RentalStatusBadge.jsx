// "@emotion/styled"에서 styled 컴포넌트를 가져옴
import styled from "@emotion/styled";
// RoundBadge 컴포넌트를 가져옴
import RoundBadge from "./RoundBadge";

// RentalStatusBadge 컴포넌트 정의
export default function RentalStatusBadge({status}) {
  // 상태(status)에 따라 텍스트, 색상, 배경색을 설정
  const text = status ? "임대중" : "공실";
  const color = status ? "#ffffff" : "#11B7E4";
  const backgroundColor = status ? "#11B7E4" : "#E6F9FF";
  const borderColor = "#11B7E4";
  
  // RoundBadge 컴포넌트 반환
  return (
    <RoundBadge 
      text={text}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    />
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    width: fit-content; /* 컨텐츠에 맞게 너비 설정 */
    height: 30px; /* 높이 설정 */
    border-radius: 10px; /* 테두리 둥글게 설정 */
    border: 2px solid; /* 테두리 속성 설정 */
    border-color: #11B7E4; /* 테두리 색상 설정 */
    color: #ffffff; /* 글자색 설정 */
    font-size: 15px; /* 글자 크기 설정 */
    font-weight: 700; /* 글자 굵기 설정 */
    text-align: center; /* 텍스트 가운데 정렬 */
  `,
};
