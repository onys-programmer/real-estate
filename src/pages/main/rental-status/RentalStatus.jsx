import styled from '@emotion/styled';
import { HeaderText, border } from '../../../constants/styles/commonCSS';
import rentalStatusItems from '../../../__fixtures__/rentalStatusItems';
import RentalStatusCard from './RentalStatusCard';

export default function RentalStatus() {
  return (
    <S.Container>
      <HeaderText>
        임대현황
      </HeaderText>
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
    gap: 14px;
    label: RentalStatus__Container;
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
  `,
};
