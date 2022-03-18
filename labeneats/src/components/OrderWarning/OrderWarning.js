import React from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import { useRequestData } from "../../hooks/useRequestData"
import { Container, OrderContainer } from "./styledOrderWarning"

export default function OrderWarning() {

    const { data, error, loading } = useRequestData({order: {}}, BASE_URL+ '/active-order')

    console.log(data)

  return (
    <Container>
        <OrderContainer>
      <p className="orderTitle">Pedido em andamento</p>
      <p className="orderRestaurant"></p>
      <p className="orderPrice"></p>
        </OrderContainer>
    </Container>
  )
}
