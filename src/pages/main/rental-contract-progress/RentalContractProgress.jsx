import NewContracts from './NewContracts'; // 새로운 계약 목록 컴포넌트를 가져옴
import ContractsInProgress from './ContractsInProgress'; // 진행 중인 계약 목록 컴포넌트를 가져옴
import styled from '@emotion/styled'; // Emotion의 styled 컴포넌트를 가져옴
import { HeaderText } from '../../../constants/styles/commonCSS'; // 공통 스타일 중 HeaderText를 가져옴
import contracts from '../../../__fixtures__/contracts'; // 가짜 계약 데이터를 가져옴

// RentalContractProgress 컴포넌트 정의
export default function RentalContractProgress() {
  // "새로운 계약"과 "진행 중인 계약" 목록 분리
  const newContracts = contracts.filter(contract => contract.status === 'new');
  const contractsInProgress = contracts.filter(contract => contract.status !== 'new');

  // UI 반환
  return (
    <S.Container>
      <HeaderText>
        임대계약 진행 상황
      </HeaderText>
      {/* 새로운 계약 목록 컴포넌트 렌더링 */}
      <NewContracts contracts={newContracts} />
      {/* 진행 중인 계약 목록 컴포넌트 렌더링 */}
      <ContractsInProgress contracts={contractsInProgress}/>
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    label: RentalContractProgress__Container;
  `,
};
