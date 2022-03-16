import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRestaurantCard from "../../components/DetailedRestaurantCard/DetailedRestaurantCard";
import { CardsContainer } from "../../components/DetailedRestaurantCard/styledDetailedRestaurantCard";
import { BASE_URL } from "../../constants/BASE_URL";

export default function RestaurantScreen() {
  const [details, setDetails] = useState();
  const params = useParams();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkFxQUVJc1RxVzhkS3ZuaGZIcmhDIiwibmFtZSI6IkFkbWluIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgRmxvcmlhbsOzcG9saXMgRCAtLCA4MTUgLSBDZW50cm8iLCJpYXQiOjE2NDczODM2NjZ9.ildtCr0kvS0v010AH5omJPLCGgsaFdnNzKX-At1Yu2M";

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
      console.log(error.response);
    }
  };

  console.log(details);
  
  useEffect(() => {
    getRestaurantDetails();
  },[]);

  return (
    <CardsContainer>
      <DetailedRestaurantCard details={details}><h1>{details?.id}</h1></DetailedRestaurantCard>
    </CardsContainer>
  );
}
