import {
  CardContent,
  Typography,
} from "@mui/material";
import React, {useState, useContext} from "react";
import theme from "../../constants/theme";
import { TextContainer } from "../ProductsCards/styledProductsList";
import QuantityCard from "../QuantityCard/QuantityCard";
import { ButtonAdd, ButtonArea, CardContainer, Img } from "./styleCard";
import GlobalStateContext from "../../GlobalStates/GlobalStateContext";

export default function ProductCard({ product }) {
  const [displayQuantity, setDisplayQuantity] = useState(false)
  const { states, setters } = useContext(GlobalStateContext);

  const index = states.cart.findIndex((i) => {
    return i.id === product.id;
  })


  const isOnCart = () =>{
    if (index === -1){
      return false}
    else {
      return true
    }
  }

  const addOrRemoveCart = () => {
    const newCart = [...states.cart]
    if (index === -1){
      setDisplayQuantity(true)}
    else {
      newCart.splice(index,1)
    }
    setters.setCart(newCart)
  }

  const addItemToCart = (quantity) => {
    const newCart = [...states.cart];
    const cartItem = {...product, quantity: quantity}
    newCart.push(cartItem)
    setters.setCart(newCart)
  };

  return (
    <CardContainer>
      <Img src={product.photoUrl} />
      <CardContent sx={{ width: "80%" }}>
        <Typography
          sx={{
            width: "75%",
            lineHeight: "12px",
          }}
          gutterBottom
          variant="subtitle2"
          component="div"
          color="primary.main"
        >
          {product.name}
        </Typography>
        <TextContainer>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.terciary.main }}
          >
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ color: "black", marginTop: "1px" }}>
            R${product.price.toFixed(2)}
          </Typography>
        </TextContainer>
      </CardContent>
      {isOnCart()&&<div className="quantity">{states.cart[index].quantity}</div>}
      <ButtonArea>
        <ButtonAdd
          color={isOnCart()?'error':'primary'}
          size="small"
          variant="outlined"
          className="button"
          onClick={addOrRemoveCart}
        >
          {isOnCart()?'Remover':'Adicionar'}
        </ButtonAdd>
      </ButtonArea>
      <QuantityCard addItemToCart={addItemToCart} display={displayQuantity} setDisplay={setDisplayQuantity} />
    </CardContainer>
  );
}
