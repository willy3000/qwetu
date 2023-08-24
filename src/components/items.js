import { Grid } from "@mui/material";
import React from "react";
import { items } from "../utils/constants";
import Item from "./item";

export default function Items(props) {
  const { currentCategory, handleAddToCart, cart, handleRemoveFromCart } = props;

  const isInCart = (item) => {
    const ids = [];
    cart.map((i) => {
      ids.push(i.id);
    });

    if (ids.includes(item.id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 5, sm: 5, md: 5, lg: 5 }}
        sx={{ padding: "45px" }}
      >
        {items.map((item) => {
          const inCart = isInCart(item);
          return (
            <Grid item xs={12} sm={12} md={4} lg={3} key={item?.id}>
              <Item
                {...{ item, currentCategory, handleAddToCart, cart, inCart, handleRemoveFromCart }}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
