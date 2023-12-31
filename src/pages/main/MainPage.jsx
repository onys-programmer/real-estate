import styled from '@emotion/styled';
import Header from './Header';
import RentalContractProgress from './rental-contract-progress/RentalContractProgress';
import RentalStatus from './rental-status/RentalStatus';
import MyProperties from './my-property/MyProperties';

export default function MainPage() {
  return (
    <S.Container>
      {/* 상단 헤더 */}
      <Header />
      <S.Flex>
        {/* 임대계약 진행 상황 */}
        <RentalContractProgress />
        {/* 임대현황 */}
        <RentalStatus />
      </S.Flex>
      {/* 나의 매물 */}
      <MyProperties />
    </S.Container>
  );
};

// 스타일링
const S = {
  Container: styled.div`
    max-width: 1200px;
    margin: 0 100px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    label: Main__Container;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: space-between;
    label: Main__Flex;
  `,
}
