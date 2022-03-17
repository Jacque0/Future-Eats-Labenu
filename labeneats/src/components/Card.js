import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../constants/theme";
import { TextContainer } from "./ProductsCards/styledProductsList";

function Card(props) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        margin: "auto",
        marginBottom: 5,
      }}
      key={props.id}
      category={props.category}
    >
      <CardActionArea sx={{ display: "flex", height: "112px" }}>
        <CardMedia
          component="img"
          image={props.photoUrl}
          height="150"
          alt="Prato"
          sx={{ width: "96px" }}
        />
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
            {props.name}
          </Typography>
          <TextContainer>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.terciary.main }}
            >
              {props.description}
            </Typography>
            <Typography variant="h6" sx={{ color: "black", marginTop: "1px" }}>
              R${parseInt(props.price).toFixed(2)}
            </Typography>
          </TextContainer>
        </CardContent>
        <Button
          sx={{
            borderRadius: "0px 8px 0px 8px",
            height: "31px",
            border: "1px solid #5cb646",
            fontSize: "small",
            color: "primary.main",
            alignSelf: "flex-start",
            position: "absolute",
            left: "272px",
          }}
          size="small"
        >
          1
        </Button>
        <Button
          sx={{
            borderRadius: "8px 0px 8px 0px",
            width: "90px",
            height: "31px",
            border: "1px solid #5cb646",
            fontSize: "small",
            color: "primary.main",

            position: "absolute",
            left: "247px",
            top: "82px",
          }}
        >
          adicionar
        </Button>
      </CardActionArea>
    </Card>
  );
}

export default Card;
