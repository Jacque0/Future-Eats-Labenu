import React from "react"
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
import { useNavigate } from "react-router-dom"
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"
import { goToEditAdress, goToEditProfile } from "../../routes/coordinator"
import { primaryColors } from "../../constants/colors"
import OrderHistory from "./OrderHistory"

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

  const navigate = useNavigate()

  const renderScreen = (
    <>
      <Container>
        <DataContainer>
          <p>{data.user.name}</p>
          <p>{data.user.email}</p>
          <p>{data.user.cpf}</p>
        </DataContainer>
        <EditOutlinedIcon onClick={() => goToEditProfile(navigate)} />
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
        <EditOutlinedIcon onClick={() => goToEditAdress(navigate)} />
      </Container>
      <OrderHistoryContainer>
        <span>Histórico de pedidos</span>
<OrderHistory/>
      </OrderHistoryContainer>
    </>
  )

  return (
    <div>
      <Header backButton={true} title={"Meu perfil"} />
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <Loading color={primaryColors.midGreen} />
        </div>
      ) : (
        renderScreen
      )}
      <Footer />
    </div>
  )
}
