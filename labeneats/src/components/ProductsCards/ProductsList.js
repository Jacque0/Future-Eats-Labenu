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
import { TextContainer, CategoryCard, Hr } from "./styledProductsList";

function ProductsList(props) {


  const categoriesSource = props.products?.map((item) => {
    return item.category;
  });

  const categories = [...new Set(categoriesSource)].map((category) => {
    return category;
  });

  let sortedProducts = [];

  for (let category of categories) {
    sortedProducts.push(
      props.products?.filter((item) => {
        return category === item.category;
      })
    );
  }



  const mappedProductsList = sortedProducts?.map((item, index) => {
    return (
      <CategoryCard key={index}>
        <h2 key={index}>{categories[index]}</h2>
        <Hr />

        {item.map((item) => {
          return (
            <Card
              sx={{
                maxWidth: 345,
                borderRadius: 3,
                margin: "auto",
                marginBottom: 5,
              }}
              key={item.id}
              category={item.category}
            >
              <CardActionArea sx={{ display: "flex", height: "112px" }}>
                <CardMedia
                  component="img"
                  image={item.photoUrl}
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
                    {item.name}
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
                      sx={{ color: "black", marginTop: "1px" }}
                    >
                      R${parseInt(item.price).toFixed(2)}
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
        })}
      </CategoryCard>
    );
  });


  return <div>{mappedProductsList}</div>;
}

export default ProductsList;
