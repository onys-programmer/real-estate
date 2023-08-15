import styled from '@emotion/styled';
import ICON_SRC_MAP from '../constants/iconSrcMap';

export default function Icon({type}) {
  const src = ICON_SRC_MAP[type];
  return (
    <S.Container>
      <S.Icon src={src}/>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    align-items: center;
    height: auto;
    label: Icon__Container;
  `,
  Icon: styled.img`
    label: Icon__Icon;
  `,
}
