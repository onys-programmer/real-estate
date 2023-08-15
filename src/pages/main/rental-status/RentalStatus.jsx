import styled from '@emotion/styled';
import { HeaderText, border } from '../../../constants/styles/commonCSS';

export default function RentalStatus() {
  return (
    <S.Container>
      <HeaderText>
        임대현황
      </HeaderText>
      <S.StatusList>

      </S.StatusList>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    background-color: #ded2d2;
    label: RentalStatus__Container;
  `,
  StatusList: styled.div`
    width: 625px;
    height: 371px;
    ${border}
  `,
};
