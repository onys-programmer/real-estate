import styled from "@emotion/styled";
import Pin from '../../../components/Pin'
import { border } from "../../../constants/styles/commonCSS";
import VacantAdvertisingBadge from "../../../components/badges/VacantAdvertisingBadge";
import RentalStatusBadge from "../../../components/badges/RentalStatusBadge";

export default function PropertyCard({property}) {
  const { pinned, vacantAdvertising } = property;
  return (
    <S.Container>
      <S.Image>
      <S.PinContainer>
        <Pin pinned={pinned} />
      </S.PinContainer>
      </S.Image>
      <S.Content>
        <S.Badges>
          <RentalStatusBadge />
          <VacantAdvertisingBadge advertising={vacantAdvertising}/>
        </S.Badges>
        <S.Title>
          {property.name}
        </S.Title>
        <S.Button>
          매물 게시 정보 변경
          <S.Arrow />
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    border: solid 1px #d9d9d9;
    background-color: #ffffff;
    border-radius: 10px;
    width: 260px;
    min-width: 260px;
    height: 316px;
    cursor: pointer;
    label: PropertyCard__Container;
  `,
  Image: styled.div`
    background-color: #D9D9D9;
    height: 140px;
    border-radius: 10px 10px 0 0;
    label: PropertyCard__Image;
  `,
  PinContainer: styled.div`
    position: absolute;
    margin-left: 26px;
    margin-top: 16px;
    label: PropertyCard__PinContainer;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 18px 26px 30px;
    height: 176px;
    label: PropertyCard__Content;
  `,
  Badges: styled.div`
    display: flex;
    gap: 8px;
    label: PropertyCard__Badges;
  `,
  Title: styled.div`
    font-weight: 700;
    label: PropertyCard__Title;
  `,
  Button: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 207px;
    height: 50px;
    background-color: #FAFAFA;
    ${border}
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    color: #3F3F3F;
    cursor: pointer;
    &:hover {
      background-color: #EFEFEF;
    };
    label: PropertyCard__Button;
  `,
  Arrow: styled.img`
    src: url('/images/icons/arrow.png');
    label: PropertyCard__Arrow;
  `,
};
