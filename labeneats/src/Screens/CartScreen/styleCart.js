import styled from "styled-components";
import { Button } from "@mui/material";

export const ContainerCart = styled.div`
  font-size: 16px;
  letter-spacing: -0.39px;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 49px);
  box-sizing: border-box;
  padding-bottom: 16px;
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 76px;
  margin: 1px 0 8px;
  padding: 16px;
  box-sizing: border-box;
  background-color: #eee;
  .delivery-address {
    width: 100%;
    height: 18px;
    margin: 0 0 8px;
    color: #b8b8b8;
  }
  .address {
    width: 100%;
    height: 18px;
    margin: 8px 0 0;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 42px;
  padding: 12px 0;
  .Text {
    width: 100%;
    height: 18px;
    text-align: center;
    color: black;
  }
`;

export const RestaurantArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 8px 16px;
  color: #b8b8b8;
  .title-restaurant{
    color: #5cb646;
  }
`

export const FreteArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-right: 16px;
  text-align: right;
`;
export const SubTotalArea = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  .text-green {
    font-size: 18px;
    color: #5cb646;
    letter-spacing: -0.43px;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px 0 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PaymentTitle = styled.p`
  padding-bottom: 8px;
  border-bottom: 1px solid black;
`;

export const ConfirmeButton = styled(Button)`
  height: 42px;
  padding: 12px 16px;
  border-radius: 2px;
  background-color: #5cb646;
`;
