import NewContracts from './NewContracts';
import ContractsInProgress from './ContractsInProgress';
import styled from '@emotion/styled';
import { HeaderText } from '../../../constants/styles/commonCSS';

export default function RentalContractProgress() {
  return (
    <S.Container>
      <HeaderText>
        임대계약 진행 상황
      </HeaderText>
      <NewContracts />
      <ContractsInProgress />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
    background-color: #ded2d2;
    label: RentalContractProgress__Container;
  `,
};
