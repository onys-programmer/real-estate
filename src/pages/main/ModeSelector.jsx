import styled from "@emotion/styled";
import { useState } from "react";
import { border } from "../../constants/styles/commonCSS";

export default function ModeSelector() {
  const [mode, setMode] = useState('매물관리'); // 초기 모드는 '매물관리'

  return (
    <S.Container>
      {/* 매물관리 버튼 */}
      <S.ModeButton 
        isLeft={true}
        isSelected={mode === '매물관리'} // 현재 모드가 '매물관리'인지 확인
        onClick={() => setMode('매물관리')} // 버튼 클릭 시 모드를 '매물관리'로 변경
      >
        매물관리
      </S.ModeButton>
      {/* 시세분석 버튼 */}
      <S.ModeButton 
        isLeft={false}
        isSelected={mode === '시세분석'} // 현재 모드가 '시세분석'인지 확인
        onClick={() => setMode('시세분석')} // 버튼 클릭 시 모드를 '시세분석'으로 변경
      >
        시세분석
      </S.ModeButton>
    </S.Container>
  );
};

// 스타일링
const S = {
  Container: styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    width: 160px;
    height: 30px;
    background-color: #CDCDCD;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 700;
    border: 2px solid #E9E9E9;
    color: #818181;
    label: ModeSelector__Container;
  `,
  ModeButton: styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: ${props => (props.isSelected ? '30px' : '26px')}; // 선택된 버튼은 높이 증가
    top: 0;
    left: ${props => (props.isLeft ? '0' : 'auto')};
    right: ${props => (props.isLeft ? 'auto' : '0')};
    transform: ${props => (props.isLeft ? 'translate(-2px, -2px)' : 'translate(2px, -2px)')}; // 선택된 버튼은 조금 위로 이동
    background-color: ${props => (props.isSelected ? '#ffffff' : '#CDCDCD')}; // 선택된 버튼 배경색 변경
    color: ${props => (props.isSelected ? '#818181' : '#ffffff')}; // 선택된 버튼 텍스트 색상 변경
    box-shadow: ${props => props.isSelected && (props.isLeft ? '3px 0px 5px rgba(0, 0, 0, 0.1)' : '-3px 0px 5px rgba(0, 0, 0, 0.1)')}; // 선택된 버튼은 그림자 추가
    ${border}
    border-radius: 999px;
    z-index: ${props => props.isSelected && '1'}; // 선택된 버튼은 다른 버튼 위로 나타남
    border-color: ${props => (props.isSelected ? '#E9E9E9' : 'transparent')}; // 버튼의 테두리를 배경색으로 설정
    transform: ${props => !props.isSelected && 'translate(0, 0)'}; // 선택되지 않은 버튼은 원래 위치로 이동
    cursor: pointer;
    label: ModeSelector__ModeButton;
  `,
};
