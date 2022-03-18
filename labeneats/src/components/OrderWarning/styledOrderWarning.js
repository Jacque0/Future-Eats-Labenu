import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 49px;
  padding: 12px 24px;
  background-color: #5cb646;
  .icon {
    color: white;
    margin-right: 24px;
    transform: scale(1.3);
  }
  animation: appear 500ms ease forwards;
  @keyframes appear {
    from {
      bottom: -49px;
    }
    to {
      bottom: 49px;
    }
  }
`

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 3px;
  }
  .orderTitle {
    font-size: 16px;
    font-weight: lighter;
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
