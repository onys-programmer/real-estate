import styled from '@emotion/styled';
import PropertyCard from './PropertyCard';
import myProperties from '../../../__fixtures__/myProperties';
import { HeaderText } from '../../../constants/styles/commonCSS';
import DropDown from '../../../components/DropDown';

export default function MyProperties() {
  const propertyStatusOptions = [
    '전체매물',
    '임대중매물',
    '공실매물',
  ];

  return (
    <S.Container>
      <S.Header>
        <HeaderText>
          나의 매물
        </HeaderText>
        <DropDown options={propertyStatusOptions} />
        <S.Button>
          <img src="/images/icons/icon-plus-mono.svg" alt="plus" />
          매물 업데이트
        </S.Button>
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
    padding-bottom: 31px;
    label: MyProperty__Container;
  `,
  Header: styled.div`
    width: 100%;
    padding: 12px 0;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
    label: MyProperty__Header;
  `,
  Button: styled.button`
    display: flex;
    width: 141px;
    height: 40px;
    border-radius: 10px;
    padding: 0 13px;
    margin-left: auto;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    border: none;
    background-color: #11B7E4;
    cursor: pointer;
    &:hover {
      background-color: #0A9EC7;
    }
    label: MyProperty__Button;
  `,
  Flex: styled.div`
    display: flex;
    justify-content: start;
    height: fit-content;
    overflow: hidden;
    gap: 13px;
    label: MyProperty__Flex;
  `,
};
