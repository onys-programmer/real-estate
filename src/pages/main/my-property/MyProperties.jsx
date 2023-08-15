import styled from '@emotion/styled';
import PropertyCard from './PropertyCard';
import myProperties from '../../../__fixtures__/myProperties';
import { HeaderText } from '../../../constants/styles/commonCSS';

export default function MyProperties() {
  return (
    <S.Container>
      <S.Header>
        <HeaderText>
          나의 매물
        </HeaderText>
      </S.Header>
      <S.Flex>
        {
          myProperties.map((property, index) => (
            <PropertyCard property={property}/>
          ))
        }
      </S.Flex>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    background-color: #e0eedb;
    label: MyProperty__Container;
  `,
  Header: styled.div`
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: start;
    gap: 20px;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: start;
    gap: 13px;
    overflow-x: scroll;
  `,
};
