import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const placeOrder = (body, restaurantId, setCart, setError, setSuccess) => {
  const headers = {
    auth: localStorage.getItem("token"),
  };
  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, { headers })
    .then((resp) => {
      setSuccess("Pedido realizado")
      setCart([])
      localStorage.setItem('cart', JSON.stringify([]));
    })
    .catch((err) => {
      setError(err.response.data.message);
    });
};
