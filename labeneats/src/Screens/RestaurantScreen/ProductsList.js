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
import { TextContainer, CategoryCard } from "./styledProductsList";

function ProductsList(props) {
  console.log(props.products);

  const mappedProductsList = props.products?.map((item) => {
    const categoriesSource = props.products?.map((item) => {
      return item.category;
    });

    const categories = [...new Set(categoriesSource)]
      .map((category) => {
        return (
          <CategoryCard key={category} category={category}>
            <h2>{category}</h2>
            <hr />
          </CategoryCard>
        );
      })
      .filter((item) => {
        return item.key;
      });

    return (
      <CategoryCard>
        {categories}
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
          <CardActionArea disabled sx={{ display: "flex", height: "112px" }}>
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
      </CategoryCard>
    );
  });
  /*     .filter((card) => {
      console.log(card);
      return card.props.children[1].props.category;
    }); */

  return <div>{mappedProductsList}</div>;
}

export default ProductsList;
