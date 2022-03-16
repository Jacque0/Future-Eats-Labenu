import styled from "styled-components";

export const Rectangle = styled.div`
  width: 100%;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  .delivery-address {
    width: 100%;
    height: 18px;
    margin: 0 0 8px;
    font-size: 16px;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
  .address{
    width: 100%;
    height: 18px;
    margin: 8px 0 0;
    font-size: 16px;
    letter-spacing: -0.39px;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 42px;
  padding: 12px 0;
  .Text {
    width: 100%;
    height: 18px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: black;
  }
`;
