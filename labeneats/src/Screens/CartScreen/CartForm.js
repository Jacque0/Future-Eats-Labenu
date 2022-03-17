import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ConfirmeButton, ContainerForm, PaymentTitle } from "./styleCart";

export default function CartForm({ cart }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
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
            value="dinheiro"
            control={<Radio />}
            label="Dinheiro"
          />
          <FormControlLabel value="cartao" control={<Radio />} label="Cartão" />
        </RadioGroup>
      </div>
      <ConfirmeButton
        color={cart.length === 0 ? "secondary" : "primary"}
        fullWidth
        variant="contained"
      >
        Confirmar
      </ConfirmeButton>
    </ContainerForm>
  );
}
