import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRestaurantCard from "../../components/DetailedRestaurantCard/DetailedRestaurantCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { BASE_URL } from "../../constants/BASE_URL";
import ProductsList from "../../components/ProductsCards/ProductsList";
import { CardsContainer } from "../../components/ProductsCards/styledProductsList";
import Loading from "../../assets/Loading";
import { primaryColors } from "../../constants/colors";
import MessageBox from "../../components/messageBox";
import useProtectedPage from "../../hooks/useProtectedPage";

export default function RestaurantScreen() {
  useProtectedPage()

  const [details, setDetails] = useState();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('')


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
      setLoading(false)
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false)
    }
  };
  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <div>
      <Header backButton={true} title={"Restaurante"} />
      {loading? 
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <Loading color={primaryColors.midGreen}>Carregando ...</Loading>
        </div>
      :
        <CardsContainer>
          <DetailedRestaurantCard details={details}>
            <h1>{details?.id}</h1>
          </DetailedRestaurantCard>
          <ProductsList idRestaurant={params.id} products={details?.products}/>
        </CardsContainer>
      }
      <div 
      style={{
        marginTop: "70px",
      }}
      >
      <Footer />
      </div>
      {error && (
        <MessageBox
          severity={"error"}
          title={"Algo deu errado"}
          message={error}
        />
      )}
    </div>
  );
}
