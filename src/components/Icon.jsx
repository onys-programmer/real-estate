import styled from '@emotion/styled'; // Emotion의 styled 컴포넌트를 가져옴
import ICON_SRC_MAP from '../constants/iconSrcMap'; // 아이콘 이미지 소스 매핑을 가져옴

// Icon 컴포넌트 정의
export default function Icon({type}) {
  // 아이콘 타입에 따른 이미지 소스 가져오기
  const src = ICON_SRC_MAP[type];
  
  // UI 반환
  return (
    <S.Container>
      <S.Icon src={src}/> {/* 이미지 소스를 props로 전달 */}
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    height: auto;
    label: Icon__Container; /* 스타일 레이블 설정 */
  `,
  Icon: styled.img`
    label: Icon__Icon; /* 스타일 레이블 설정 */
  `,
}
