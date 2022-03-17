import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const placeOrder = (body, restaurantId) => {
  const headers = {
    auth: localStorage.getItem("token"),
  };
  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, { headers })
    .then((resp) => {
      alert("Pedido realizado");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
