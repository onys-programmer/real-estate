import styled from "@emotion/styled";

export default function PropertyCard({property}) {
  return (
    <S.Container>
      {property.name}
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
  `,
};
