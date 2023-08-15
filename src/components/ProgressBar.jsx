import styled from "@emotion/styled"; // Emotion의 styled 컴포넌트를 가져옴

// ProgressBar 컴포넌트 정의
export default function ProgressBar({point=50}) {
  // UI 반환
  return (
    <S.Container>
      <S.Bar point={point}>
        <S.TextContainer>
          {point}%
        </S.TextContainer>
      </S.Bar>
      <S.Background />
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 20px;
    label: ProgressBar__Container; /* 스타일 레이블 설정 */
  `,
  Bar: styled.div`
    position: absolute;
    display: flex;             // flex display를 추가하여 가로 정렬 및 세로 정렬 적용
    justify-content: center;   // 내용을 가로로 중앙에 배치
    align-items: center;       // 내용을 세로로 중앙에 배치
    border-radius: 3px;
    width: ${props => `${props.point}%`}; // 백분율에 따른 너비 설정
    background-color: ${props => {
      if (props.point < 20) {
        return '#FF4487';
      } else if (props.point < 50) {
        return '#FFC400';
      } else if (props.point < 80) {
        return '#11B7E4';
      } else {
        return '#A2CC8E';
      }
    }}; // 백분율에 따른 배경 색상 설정
    height: 20px;
    label: ProgressBar__Bar; /* 스타일 레이블 설정 */
  `,
  TextContainer: styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    position: absolute;
    label: ProgressBar__TextContainer; /* 스타일 레이블 설정 */
  `,
  Background: styled.div`
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background-color: #E0E0E0;
    label: ProgressBar__Background; /* 스타일 레이블 설정 */
  `,
};
