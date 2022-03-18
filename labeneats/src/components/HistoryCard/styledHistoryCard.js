import styled from "styled-components";
import { primaryColors } from "../../constants/colors";

export const OrderCard = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px 10px 0px;
  border: 1px solid gray;
  border-radius: 8px;
  height: 102px;
  .Title {
    font-size: 16px;
    color: ${primaryColors.midGreen};
  }
  .Date {
    font-size: 12px;
    color: ${primaryColors.black};
  }
  .Total {
    font-size: 16px;
  }
`;

export const TextContainer = styled.div`
  margin-left: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
