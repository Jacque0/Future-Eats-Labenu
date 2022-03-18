import React, { useEffect } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import { BASE_URL } from "../../constants/BASE_URL"
import { useRequestData } from "../../hooks/useRequestData"
import {
  DataContainer,
  AdressContainer,
  OrderHistoryContainer,
  Container,
} from "./styledProfileScreen"
import Loading from "../../assets/Loading"
import { Link } from "react-router-dom"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"

export default function ProfileScreen() {
  const { data, error, loading } = useRequestData(
    {
      user: {
        id: "",
        name: "",
        email: "",
        cpf: "",
        hasAddress: false,
        address: "",
      },
    },
    BASE_URL + "/profile"
  )

  useEffect(() => {})

  const renderOrderHistory = ""

  const renderScreen = (
    <>
      <Container>
        <DataContainer>
          <p>{data.user.name}</p>
          <p>{data.user.email}</p>
          <p>{data.user.cpf}</p>
        </DataContainer>
        <Link to="/edit-profile">
          <EditOutlinedIcon />
        </Link>
      </Container>
      <Container color>
        <AdressContainer>
          <span>Endereço cadastrado</span>
          {data.user.hasAddress ? (
            <p>{data.user.address}</p>
          ) : (
            <p>Nenhum endereço cadastrado</p>
          )}
        </AdressContainer>
        <Link to="/edit-address">
          <EditOutlinedIcon />
        </Link>
      </Container>
      <OrderHistoryContainer>
        <span>Histórico de pedidos</span>
        {renderOrderHistory}
      </OrderHistoryContainer>
    </>
  )

  return (
    <div>
      <Header backButton={true} title={"Meu perfil"} />
      {loading ? <Loading /> : renderScreen}
      <Footer />
    </div>
  )
}
