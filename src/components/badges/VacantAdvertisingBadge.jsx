// RoundBadge 컴포넌트를 가져옴
import RoundBadge from "./RoundBadge";

// VacantAdvertisingBadge 컴포넌트 정의
export default function VacantAdvertisingBadge({advertising=false}) {
  // 광고 여부에 따라 텍스트, 색상, 배경색을 설정
  const text = advertising ? "공실광고 켬" : "공실광고 끔";
  const color = advertising ? "#ffffff" : "#A2CC8E";
  const backgroundColor = advertising ? "#A2CC8E" : "#EBFFE1";
  const borderColor = "#A2CC8E";
  
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
