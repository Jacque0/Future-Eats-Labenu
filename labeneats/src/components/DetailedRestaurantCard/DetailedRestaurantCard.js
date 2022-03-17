import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "../../constants/theme";
import { TextContainer } from "./styledDetailedRestaurantCard";

function DetailedRestaurantCard(props) {
  console.log(props.details);
  return (
    <Card
      sx={{ maxWidth: 345, borderRadius: 3, margin: "auto", marginBottom: 5 }}
    >
      <CardActionArea>
        <CardMedia component="img" image={props.details?.logoUrl} height="150" alt="Restaurantes" />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            color="primary.main"
          >
            <b>{props.details?.name}</b>
          </Typography>
          <TextContainer>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.terciary.main }}
            >
              {props.details?.deliveryTime} min
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.terciary.main }}
            >
              Frete R${parseInt(props.details?.shipping).toFixed(2)}
            </Typography>
          </TextContainer>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.terciary.main, marginTop: '1vh' }}
          >
            {props.details?.address}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DetailedRestaurantCard;
