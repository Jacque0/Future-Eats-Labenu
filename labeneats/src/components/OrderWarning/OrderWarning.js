import React from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import { useRequestData } from "../../hooks/useRequestData"
import { Container, OrderContainer } from "./styledOrderWarning"
import AccessTimeIcon from "@mui/icons-material/AccessTime"

export default function OrderWarning() {
  const { data, error, loading } = useRequestData(
    {},
    BASE_URL + "/active-order"
  )

  const renderWarning = (
    <Container>
      <AccessTimeIcon className="icon" />
      <OrderContainer>
        <p className="orderTitle">Pedido em andamento</p>
        <p className="orderRestaurant">{data.order?.restaurantName}</p>
        <p className="orderPrice">TOTAL R${data.order?.totalPrice}</p>
      </OrderContainer>
    </Container>
  )

  return <>{data.order ? renderWarning : <></>}</>
}
