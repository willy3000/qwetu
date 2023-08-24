import * as React from "react";
import { Box, Badge, Fab } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function FloatingButton(props) {
  const { itemsCount, setCartOpen } = props;

  if (itemsCount < 1) {
    return null;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "15px",
      }}
    >
      <Fab
        variant="circular"
        color="primary"
        sx={{ position: "fixed" }}
        onClick={() => setCartOpen(true)}
      >
        <Badge badgeContent={itemsCount} size={"large"}>
          <ShoppingCart />
        </Badge>
      </Fab>
    </Box>
  );
}
