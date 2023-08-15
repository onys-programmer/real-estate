import { useState } from "react"; // React의 useState 훅을 가져옴
import styled from "@emotion/styled"; // Emotion의 styled 컴포넌트를 가져옴
import { lightBorder } from "../constants/styles/commonCSS"; // 스타일 관련 상수를 가져옴

// DropDown 컴포넌트 정의
export default function DropDown({options}) {
  // 상태 설정
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [openOptions, setOpenOptions] = useState(false);

  // 드롭다운 옵션 열고 닫기 핸들러
  const handleClickOpenOptions = () => {
    setOpenOptions(!openOptions);
  };

  // 옵션 선택 핸들러
  const handleClickOption = (option) => {
    setSelectedOption(option);
    setOpenOptions(false);
  };

  // 선택되지 않은 옵션들
  const restOptions = options.filter(option => option !== selectedOption);

  // UI 반환
  return (
    <S.Container open={openOptions}>
      <S.TextContainer onClick={handleClickOpenOptions}>
        {selectedOption}
        <S.IconContainer>
          <img src="/images/icons/down-arrow.png" alt="arrow-down" />
        </S.IconContainer>
      </S.TextContainer>
      {openOptions && (
        <S.OptionsContainer>
          {
            restOptions.map((option, index) => (
              <S.Option
                key={index}
                isLast={index === restOptions.length - 1}
                onClick={() => handleClickOption(option)}
              >
                {option}
              </S.Option>
            ))
          }
        </S.OptionsContainer>
      )}
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    background-color: #ffffff;
    position: relative;
    width: 106px;
    min-width: 60px;
    height: 40px;
    padding: 10px 9px;
    ${lightBorder}
    border-radius: ${props => (props.open ? '10px 10px 0 0' : '10px')};
    label: DropDown__Container; /* 스타일 레이블 설정 */
  `,
  TextContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #818181;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    label: DropDown__TextContainer; /* 스타일 레이블 설정 */
  `,
  IconContainer: styled.div`
    label: DropDown__IconContainer; /* 스타일 레이블 설정 */
  `,
  OptionsContainer: styled.div`
    width: 106px;
    position: absolute;
    top: 100%;
    left: -1px;
    right: 0;
    z-index: 1;
    border-radius: 0 0 10px 10px;
    label: DropDown__OptionsContainer; /* 스타일 레이블 설정 */
  `,
  Option: styled.div`
    padding: 10px 9px;
    background-color: #f5f5f5;
    color: #818181;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    text-align: start;
    height: 40px;
    ${lightBorder}
    border-radius: ${props => (props.isLast ? '0 0 10px 10px' : '0')};
    &:hover {
      background-color: #e3e3e3;
    }
    label: DropDown__Option; /* 스타일 레이블 설정 */
  `,
};
