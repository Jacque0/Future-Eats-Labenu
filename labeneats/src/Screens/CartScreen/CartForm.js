import React, { useState, useContext } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ConfirmeButton, ContainerForm, PaymentTitle } from "./styleCart";
import { placeOrder } from "../../services/restaurants";
import GlobalStateContext from "../../GlobalStates/GlobalStateContext";
import MessageBox from "../../components/messageBox";

export default function CartForm({ restaurantId, deliveryTime }) {
  const [value, setValue] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { states, setters } = useContext(GlobalStateContext);
  const { cart } = states;
  const { setCart } = setters;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    if (cart.length !== 0) {
      const newCart = cart.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
        };
      });
      const body = {
        products: newCart,
        paymentMethod: value,
      };
      placeOrder(body, restaurantId, setCart, setError, setSuccess);
      setError('')
      setSuccess('')
    }
  };

  return (
    <ContainerForm>
      <div>
        <PaymentTitle>Forma de pagamento</PaymentTitle>
        <RadioGroup
          aria-labelledby="radio-buttons-group"
          name="paymentMethod"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="money"
            control={<Radio />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="creditcard"
            control={<Radio />}
            label="Cartão"
          />
        </RadioGroup>
      </div>
      <ConfirmeButton
        color={cart.length === 0 ? "secondary" : "primary"}
        fullWidth
        variant="contained"
        onClick={onClick}
      >
        Confirmar
      </ConfirmeButton>
      {success && (
        <MessageBox
          severity={"success"}
          title={success}
          message={`Seu pedido será entregue em até ${deliveryTime} min`}
        />
      )}
      {error && (
        <MessageBox
          severity={"error"}
          title={'Ocorreu um erro'}
          message={error}
        />
      )}
    </ContainerForm>
  );
}
