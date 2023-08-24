import React from "react";
import CategoryChip from "./hocs/category-chip";
import { Grid } from "@mui/material";

const categories = [
  {
    id: 0,
    name: "All",
  },
  {
    id: 1,
    name: "Fast Food",
  },
  {
    id: 2,
    name: "Soft Drinks",
  },
  {
    id: 3,
    name: "Alcohol",
  },
  {
    id: 4,
    name: "Snacks",
  },
];
export default function Categories(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "15px",
        gap: "10px",
      }}
    >
      {categories.map((category) => {
        return (
          <Grid item key={category.id}>
            <CategoryChip
              {...{ currentCategory, category, setCurrentCategory }}
              key={category?.id}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
