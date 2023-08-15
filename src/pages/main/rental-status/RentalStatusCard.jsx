import Icon from '../../../components/Icon';
import Badge from "../../../components/badges/Badge";
import ProgressBar from "../../../components/ProgressBar";
import RentalDate from "./RentalDate";
import styled from "@emotion/styled";
import { border } from "../../../constants/styles/commonCSS";

export default function RentalStatusCard({item}) {
  const { type, name, rentalStartDate, rentalExpirationDate, progressPoint } = item;

  const getPeriod = (rentalStartDate, rentalExpirationDate) => {
    const startDate = new Date(rentalStartDate);
    const expirationDate = new Date(rentalExpirationDate);
    const period = expirationDate.getTime() - startDate.getTime();
    const day = 1000 * 60 * 60 * 24;
    const periodDay = Math.floor(period / day);
    return periodDay;
  };

  const periodDay = getPeriod(rentalStartDate, rentalExpirationDate);

  const badgeText = `임대일 ${periodDay}일 남음`;

  return (
    <S.Container>
      <S.Row1>
        <Icon type={type}/>
        <S.TextContainer>
          {name}
        </S.TextContainer>
        <S.BadgeContainer>
          <Badge
            text={badgeText}
            color={'#ffffff'}
            borderColor={'#818181'}
            backgroundColor={'#818181'}
          />
        </S.BadgeContainer>
      </S.Row1>
      <ProgressBar point={progressPoint} />
      <S.Row2>
        <RentalDate text={"임대만료"} date={rentalExpirationDate} />
        <RentalDate text={"임대시작"} date={rentalStartDate} />
      </S.Row2>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px 14px;
    background-color: #ffffff;
    ${border}
    cursor: pointer;
    &:hover {
      background-color: #f7f7f7;
    }
    label: RentalStatusCard__Container;
  `,
  Row1: styled.div`
    height: 30px;
    display: flex;
    justify-content: start;
    gap: 15px;
    label: RentalStatusCard__Row1;
  `,
  TextContainer: styled.div`
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    label: RentalStatusCard__TextContainer;
  `,
  BadgeContainer: styled.div`
    margin-left: auto;
  `,
  Row2: styled.div`
    display: flex;
    justify-content: space-between;
    label: RentalStatusCard__Row2;
  `,
};
