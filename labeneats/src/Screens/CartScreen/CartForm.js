import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ConfirmeButton, ContainerForm, PaymentTitle } from "./styleCart";
import { placeOrder } from "../../services/restaurants";

export default function CartForm({ cart, restaurantId }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onClick = () =>{
    if (cart.length !==0){
      const body = {
        products: cart,
        paymentMethod: value
      }
      placeOrder(body, restaurantId)
    }
  }

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
          <FormControlLabel value="creditcard" control={<Radio />} label="Cartão" />
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
    </ContainerForm>
  );
}
