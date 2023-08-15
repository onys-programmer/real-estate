import NewContracts from './NewContracts';
import ContractsInProgress from './ContractsInProgress';
import styled from '@emotion/styled';
import { HeaderText } from '../../../constants/styles/commonCSS';
import contracts from '../../../__fixtures__/contracts';

export default function RentalContractProgress() {
  const newContracts = contracts.filter(contract => contract.status === 'new');
  const contractsInProgress = contracts.filter(contract => contract.status !== 'new');

  return (
    <S.Container>
      <HeaderText>
        임대계약 진행 상황
      </HeaderText>
      <NewContracts contracts={newContracts} />
      <ContractsInProgress contracts={contractsInProgress}/>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    label: RentalContractProgress__Container;
  `,
};
