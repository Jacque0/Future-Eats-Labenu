import React from "react"
import { BASE_URL } from "../../constants/BASE_URL"
import { useRequestData } from "../../hooks/useRequestData"

export default function OrderHistory() {
  const { data, error, loading } = useRequestData(
    {},
    BASE_URL + "/orders/history"
  )



  return <div></div>
}
