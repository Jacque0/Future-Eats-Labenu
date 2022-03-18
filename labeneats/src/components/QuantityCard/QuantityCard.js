import React, { useState } from "react";
import { ButtonAdd, ContainerQuantity, Rectangle } from "./styleQuantity";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function QuantityCard({ display, setDisplay, addItemToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const onClickAdd = (event) => {
    event.preventDefault();
    setDisplay(false);
    addItemToCart(quantity);
  };

  return (
    <ContainerQuantity display={display}>
      <Rectangle>
        <p>Selecione a quantidade desejada</p>
        <FormControl fullWidth>
          <InputLabel id="select-label">Quantidade</InputLabel>
          <Select
            labelId="select-label"
            id="simple-select"
            value={quantity}
            label="Quantidade"
            onChange={handleChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
        <ButtonAdd onClick={onClickAdd} type="submit" variant="text">
          Adicionar
        </ButtonAdd>
      </Rectangle>
    </ContainerQuantity>
  );
}
