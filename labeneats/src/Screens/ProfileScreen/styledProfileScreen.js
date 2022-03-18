import styled from "styled-components"

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
  p {
    margin-top: 4px;
  }
`

const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
    margin-bottom: 4px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  background-color: ${(props) => (props.color ? "#eee" : "white")};
  padding: 16px;
`

const OrderHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 16px 8px;
  span {
    padding-bottom: 6px;
    border-bottom: 1px solid black;
  }
`
export { DataContainer, AdressContainer, OrderHistoryContainer, Container }
