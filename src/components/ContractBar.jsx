import styled from '@emotion/styled';
import Badge from './badges/Badge';

export default function ContractBar({contract}) {
  const {name, type, status} = contract;
  const iconSrcMap = {
    'building': '/images/icons/icon-building-mono.png',
    'house': 'images/icons/icon-home-mono.png',
  };

  const badgeProp = {
    'new': {
      text: '새 요청',
      textColor: '#11B7E4',
      borderColor: '#11B7E4',
      backgroundColor: '#E3F5FF',
    },
    'inReview': {
      text: '검토 중',
      textColor: '#FFBD13',
      borderColor: '#FFBD13',
      backgroundColor: '#FFF7E3',
    },
    'inProgress': {
      text: '계약진행 중',
      textColor: '#FF4487',
      borderColor: '#FF4487',
      backgroundColor: '#FFE3ED',
    },
    'completed': {
      text: '계약완료',
      textColor: '#A2CC8E',
      borderColor: '#A2CC8E',
      backgroundColor: '#EBFFE1',
    },
  };

  return (
    <S.Container>
      <S.IconContainer>
        <S.Icon src={iconSrcMap[type]} />
      </S.IconContainer>
      <S.TextContainer>
        {name}
      </S.TextContainer>
      <S.BadgeContainer>
        <Badge
          text={badgeProp[status].text}
          color={badgeProp[status].textColor}
          borderColor={badgeProp[status].borderColor}
          backgroundColor={badgeProp[status].backgroundColor}
        />
      </S.BadgeContainer>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: start;
    gap: 15px;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: #F2F2F2;
    }
    label: ContractBar__Container;
  `,
  IconContainer: styled.div`
    display: flex;
    align-items: center;
    height: auto;
    label: ContractBar__IconContainer;  
  `,
  Icon: styled.img`
    label: ContractBar__Icon;
  `,
  TextContainer: styled.div`
    display: flex;
    align-items: center;
    label: ContractBar__TextContainer;
  `,
  BadgeContainer: styled.div`
    margin-left: auto;
  `,
};
