import styled from "styled-components";

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 20px auto;
  padding: 0 16px;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  h2{
    width: 100%;
    text-align: left;
    font-size: 16px;
    letter-spacing: -0.39px;
    padding-top: 16px;
  }
`

export const Hr = styled.hr`
  margin-bottom: 10px;
  box-sizing: border-box;
  width: 100%;
`
