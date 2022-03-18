import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import { OrderCard, TextContainer } from "./styledHistoryCard";

const HistoryCard = () => {
  const [orders, setOrders] = useState([]);

  const getHistory = async () => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    try {
      const history = await axios.get(`${BASE_URL}/orders/history`, headers);
      setOrders(history.data.orders);
    } catch (error) {
      alert(error.response);
    }
  };

  const mappedHistoryCard = orders?.map((order) => {
    const date = new Date(order.createdAt);
    const formattedDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
    return (
      <OrderCard key={Math.floor(Date.now() * Math.random()).toString(36)}>
        <TextContainer>
          <p className="Title">{order.restaurantName}</p>
          <p className="Date">{formattedDate}</p>
          <p className="Total">
            <b>TOTAL: R${order.totalPrice.toFixed(2)}</b>
          </p>
        </TextContainer>
      </OrderCard>
    );
  });
  
  useEffect(() => {
    getHistory();
  }, []);

  return <div>{mappedHistoryCard}</div>;
};

export default HistoryCard;
