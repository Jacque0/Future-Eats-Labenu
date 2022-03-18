import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRestaurantCard from "../../components/DetailedRestaurantCard/DetailedRestaurantCard";

import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import ProductsList from "../../components/ProductsCards/ProductsList";
import { CardsContainer } from "../../components/ProductsCards/styledProductsList";


export default function RestaurantScreen() {
  const [details, setDetails] = useState();
  const params = useParams();
  const token = localStorage.getItem('token');

  const getRestaurantDetails = async (id) => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    try {
      const details = await axios.get(
        `${BASE_URL}/restaurants/${params.id}`,
        headers
      );
      setDetails(details.data.restaurant);
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
        <ProductsList idRestaurant={params.id} products={details?.products}/>
      </CardsContainer>
    </div>
  );
}
