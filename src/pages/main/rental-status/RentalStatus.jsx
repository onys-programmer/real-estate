import styled from '@emotion/styled'; // Emotion의 styled 컴포넌트를 가져옴
import DropDown from '../../..//components/DropDown'; // 드롭다운 컴포넌트 가져옴
import { HeaderText, border } from '../../../constants/styles/commonCSS'; // 헤더 텍스트와 스타일링 관련 상수 가져옴
import rentalStatusItems from '../../../__fixtures__/rentalStatusItems'; // 임대현황 아이템 목록 가져옴
import RentalStatusCard from './RentalStatusCard'; // RentalStatusCard 컴포넌트 가져옴

// RentalStatus 컴포넌트 정의
export default function RentalStatus() {
  const rentalStatusOrders = ['만료임박순', '최신계약순'];
  
  return (
    <S.Container>
      {/* 상단 헤더 영역 */}
      <S.Flex>
        <HeaderText>
          임대현황
        </HeaderText>
        {/* 드롭다운 컴포넌트 */}
        <S.DropDownContainer>
          <DropDown options={rentalStatusOrders} />
        </S.DropDownContainer>
      </S.Flex>
      
      {/* 임대현황 아이템 목록 */}
      <S.StatusList>
        {rentalStatusItems.map((item, index) => (
          <S.StatusListItem key={index}>
            {/* 구분 라인 */}
            <S.Line />
            {/* 원형 마커 */}
            <S.Circle />
            {/* RentalStatusCard 컴포넌트 */}
            <S.CardContainer>
              <RentalStatusCard item={item} />
            </S.CardContainer>
          </S.StatusListItem>
        ))}
      </S.StatusList>
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    label: RentalStatus__Container;
  `,
  Flex: styled.div`
    display: flex;
    gap: 20px;
    label: RentalStatus__Flex;
  `,
  DropDownContainer: styled.div`
    display: flex;
    align-items: center;
    label: RentalStatus__DropDownContainer;
  `,
  StatusList: styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 13px 4px 19.5px;
    width: 625px;
    height: 371px;
    overflow-y: auto;
    background-color: #FAFAFA;
    ${border}
    label: RentalStatus__StatusList;
  `,
  StatusListItem: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 16.5px;
    
    /* 첫 번째 아이템의 상단 여백 조정 */
    :first-child {
      margin-top: 4px;
    }
    /* 마지막 아이템의 하단 여백 조정 */
    :last-child {
      margin-bottom: 4px;
    }
    label: RentalStatus__StatusListItem;
  `,
  Line: styled.div`
    width: 2px;
    height: 100%;
    background-color: #E9E9E9;
    label: RentalStatus__Line;
  `,
  Circle: styled.div`
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid #E9E9E9;
    left: -6.5px;
    border-radius: 999px;
    background-color: #CBECFF;
    label: RentalStatus__Circle;
  `,
  CardContainer: styled.div`
    padding: 4px 0;
    width: 573px;
    label: RentalStatus__CardContainer;
  `,
};
