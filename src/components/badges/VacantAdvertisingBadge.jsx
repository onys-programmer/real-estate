import RoundBadge from "./RoundBadge";

export default function VacantAdvertisingBadge({advertising=false}) {
  const text = advertising ? "공실광고 켬" : "공실광고 끔";
  const color = advertising ? "#ffffff" : "#A2CC8E";
  const backgroundColor = advertising ? "#A2CC8E" : "#EBFFE1";
  const borderColor = "#A2CC8E";
  
  return (
    <RoundBadge 
      text={text}
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    />
  );
};
