import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRestaurantCard from "../../components/DetailedRestaurantCard/DetailedRestaurantCard";

import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../GlobalStates/GlobalStateContext";
import ProductsList from "../../components/ProductsCards/ProductsList";
import { CardsContainer } from "../../components/ProductsCards/styledProductsList";

export default function RestaurantScreen() {
  const { setters } = useContext(GlobalStateContext);
  const [details, setDetails] = useState();
  const params = useParams();

  const getRestaurantDetails = async (id) => {
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    try {
      const details = await axios.get(
        `${BASE_URL}/restaurants/${params.id}`,
        headers
      );
      setDetails(details.data.restaurant);
      setters.setSelectedRestaurantId(params.id);
    } catch (error) {
      alert(error.response);
    }
  };
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <div>
      <Header backButton={true} title={"Restaurante"} />
      <CardsContainer>
        <DetailedRestaurantCard details={details}>
          <h1>{details?.id}</h1>
        </DetailedRestaurantCard>
        <ProductsList products={details?.products} />
      </CardsContainer>
    </div>
  );
}
