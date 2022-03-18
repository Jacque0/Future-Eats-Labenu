import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  bottom: 49px;
  padding: 24px;
  background-color: #5cb646;
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  .orderTitle {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #fff;
  }
  .orderRestaurant {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
  .orderPrice {
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
  }
`
