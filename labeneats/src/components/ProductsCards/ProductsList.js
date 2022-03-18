import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { CategoryCard, Hr } from "./styledProductsList";

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
            <ProductCard idRestaurant={props.idRestaurant} product={item} />
          );
        })}
      </CategoryCard>
    );
  });

  return <div>{mappedProductsList}</div>;
}

export default ProductsList;
