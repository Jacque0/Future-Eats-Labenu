import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import { ContainerCart, FreteArea, Rectangle, SubTotalArea, Title } from "./styleCart";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../GlobalStates/GlobalStateContext";
import Footer from "../../components/Footer/Footer";
import CartForm from "./CartForm";

export default function CartScreen() {
  const { states } = useContext(GlobalStateContext);
  const { cart, idBuy } = states;

  const addressRequest = useRequestData("", `${BASE_URL}/profile/address`);
  const restaurantRequest = useRequestData(
    "",
    `${BASE_URL}/restaurants/${idBuy}`
  );

  const address = addressRequest.data;
  const restaurant = restaurantRequest.data;

  const addressReduced =
    address &&
    address.address &&
    `${address.address.street}, ${address.address.number}`;

  const renderList =
    cart &&
    cart.map((item) => {
      return <h1 key={item}>{item}</h1>;
    });

  return (
    <ContainerCart>
      <Header title="Meu carrinho" />
      <Rectangle>
        <p className="delivery-address">Endereço de entrega</p>
        <p className="address">{addressReduced}</p>
      </Rectangle>
      {cart.length === 0 && (
        <Title>
          <p className="Text">Carrinho vazio</p>
        </Title>
      )}
      {renderList}
      <FreteArea>Frete R$0,00</FreteArea>
      <SubTotalArea>
        <span>SUBTOTAL</span>
        <span className="text-green">R$0,00</span>
      </SubTotalArea>
      <CartForm cart={cart} />
      <Footer />
    </ContainerCart>
  );
}
