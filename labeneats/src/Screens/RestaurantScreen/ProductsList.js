import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import theme from "../../constants/theme";
import { ButtonsContainer, TextContainer } from "./styledProductsList";

function ProductsList(props) {
  console.log(props);
  const mappedProductsList = props.products?.map((item) => {
    return (
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: 3,
          margin: "auto",
          marginBottom: 5,
        }}
      >
        <CardActionArea sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={item.photoUrl}
            height="150"
            alt="Prato"
            sx={{ width: "96px" }}
          />
          <CardContent sx={{ width: "80%" }}>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              color="primary.main"
            >
              <b>{item.name}</b>
            </Typography>
            <TextContainer>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.terciary.main }}
              >
                {item.description}
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "black", marginTop: "1vh" }}
              >
                R${parseInt(item.price).toFixed(2)}
              </Typography>
            </TextContainer>
          </CardContent>
          <ButtonsContainer>
          <Button
            sx={{
              borderRadius: "8px 0px 8px 0px",
              width: "200px",
              height: "31px",
              border: "1px solid #5cb646",
              fontSize: "small",
              color: "primary.main",
              alignSelf: "flex-start",
              justifySelf: "flex-en"
            }}
          >
            1
          </Button>
          <Button
            sx={{
              borderRadius: "8px 0px 8px 0px",
              width: "200px",
              height: "31px",
              border: "1px solid #5cb646",
              fontSize: "small",
              color: "primary.main",
              alignSelf: "flex-end"
            }}
          >
            adicionar
          </Button>
          </ButtonsContainer>
        </CardActionArea>
      </Card>
    );
  });
  return (
    <div>
      ProductsList
      {mappedProductsList}
    </div>
  );
}

export default ProductsList;
