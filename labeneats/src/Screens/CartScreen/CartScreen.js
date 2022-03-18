import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import {
  ContainerCart,
  ContainerProducts,
  FreteArea,
  Rectangle,
  RestaurantArea,
  SubTotalArea,
  Title,
} from "./styleCart";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../GlobalStates/GlobalStateContext";
import Footer from "../../components/Footer/Footer";
import CartForm from "./CartForm";
import Loading from "../../assets/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";
import ProductCard from "../../components/ProductCard/ProductCard";

export default function CartScreen() {
  useProtectedPage();

  const { states } = useContext(GlobalStateContext);
  const { cart, selectedRestaurantId } = states;

  const addressRequest = useRequestData("", `${BASE_URL}/profile/address`);
  const restaurantRequest = useRequestData(
    "",
    `${BASE_URL}/restaurants/${selectedRestaurantId}`
  );

  const address = addressRequest.data.address;
  const restaurant = restaurantRequest.data.restaurant;

  const renderList =
    cart &&
    cart.map((item) => {
      return <ProductCard key={item.id} product={item} />;
    });

  const total = cart?.reduce((total, num) => {
    return total + num.price * num.quantity;
  }, 0);
  const frete = (cart.length !== 0 && restaurant) ? restaurant.shipping : 0;
  return (
    <ContainerCart>
      <Header title="Meu carrinho" />
      <Rectangle>
        <p className="delivery-address">Endereço de entrega</p>
        <p className="address">
          {addressRequest.loading && <Loading color="black" />}
          {!addressRequest.loading &&
            addressRequest.error &&
            "Endereço não cadastrado"}
          {!addressRequest.loading &&
            address &&
            `${address.street}, ${address.number}`}
        </p>
      </Rectangle>
      {cart.length === 0 ? (
        <Title>
          <p className="Text">Carrinho vazio</p>
        </Title>
      ) : restaurantRequest.loading ? (
        <Loading color="#5cb646" />
      ) : (
        restaurant && (
          <RestaurantArea>
            <p className="title-restaurant">{restaurant.name}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.deliveryTime} min</p>
          </RestaurantArea>
        )
      )}
      <ContainerProducts>{renderList}</ContainerProducts>
      <FreteArea>Frete {`R$${frete}.00`}</FreteArea>
      <SubTotalArea>
        <span>TOTAL</span>
        <span className="text-green">R${(total + frete).toFixed(2)}</span>
      </SubTotalArea>
      <CartForm restaurantId={selectedRestaurantId} deliveryTime={restaurant?.deliveryTime} />
      <Footer />
    </ContainerCart>
  );
}
