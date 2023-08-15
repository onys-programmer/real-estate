import styled from "@emotion/styled"; // Emotion의 styled 컴포넌트를 가져옴
import { border } from "../../../constants/styles/commonCSS"; // 공통 스타일을 가져옴
import ContractBar from "../../../components/ContractBar"; // ContractBar 컴포넌트를 가져옴

// ContractsInProgress 컴포넌트 정의
export default function ContractsInProgress({contracts}) {
  // UI 반환
  return (
    <S.Container>
      {
        contracts.map((contract, index) => (
          <ContractBar contract={contract} /> // ContractBar 컴포넌트 렌더링
        ))
      }
    </S.Container>
  );
};

// 스타일 객체 생성
const S = {
  Container: styled.div`
    width: 442px;
    height: 234px;
    padding: 27px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: start;
    ${border} /* 공통 스타일인 border 적용 */
  `,
};
