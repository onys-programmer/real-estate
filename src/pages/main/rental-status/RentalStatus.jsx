import styled from '@emotion/styled';
import DropDown from '../../..//components/DropDown';
import { HeaderText, border } from '../../../constants/styles/commonCSS';
import rentalStatusItems from '../../../__fixtures__/rentalStatusItems';
import RentalStatusCard from './RentalStatusCard';

export default function RentalStatus() {
  const rentalStatusOrders = ['만료임박순', '최신계약순'];
  return (
    <S.Container>
      <S.Flex>
        <HeaderText>
          임대현황
        </HeaderText>
        <S.DropDownContainer>
          <DropDown options={rentalStatusOrders}/>
        </S.DropDownContainer>
      </S.Flex>
      <S.StatusList>
        {
          rentalStatusItems.map((item, index) => (
            <RentalStatusCard item={item} />
          ))
        }
      </S.StatusList>
    </S.Container>
  );
};

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
    gap: 8px;
    padding: 13px;
    width: 625px;
    height: 371px;
    overflow-y: auto;
    background-color: #FAFAFA;
    ${border}
    label: RentalStatus__StatusList;
  `,
};
