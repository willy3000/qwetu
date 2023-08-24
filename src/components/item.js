import React from "react";
import { Typography, Box, Paper, Fab, Chip } from "@mui/material";
import { Add, Close } from "@mui/icons-material";

export default function Item(props) {
  const {
    item,
    currentCategory,
    handleAddToCart,
    inCart,
    handleRemoveFromCart,
  } = props;

  const isInCategory =
    currentCategory === 0 || currentCategory === item.categoryid;

  if (!isInCategory) {
    return;
  }

  return (
    <Paper
      elevation={24}
      sx={{
        padding: "15px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5ch",
      }}
    >
      <img
        src={item.image}
        alt=""
        width={150}
        height={150}
        style={{ borderRadius: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "10px",
        }}
      >
        <Typography fontWeight={"bold"} fontSize={20}>
          {item?.name}
        </Typography>
        {/* <Typography
          variant="caption"
          fontWeight={"bold"}
          fontSize={13}
          color={"green"}
        >
          {`Ksh. ${item?.price}`}
        </Typography> */}
        <Chip label={`Ksh. ${item?.price}`} size="small" color="success" />
      </Box>
      {!inCart ? (
        <Fab
          size="small"
          variant="extended"
          color="primary"
          onClick={() => handleAddToCart({ ...item, quantity: 1 })}
        >
          <Add></Add>
          <Typography>Add</Typography>
        </Fab>
      ) : (
        <div>
          <Fab
            size="small"
            variant="extended"
            color="error"
            onClick={() => handleRemoveFromCart(item)}
          >
            <Close></Close>
            <Typography>Remove</Typography>
          </Fab>
        </div>
      )}
    </Paper>
  );
}
