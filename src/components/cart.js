import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import { Remove, Close, Add } from "@mui/icons-material";
import OrderDetails from "./order-details";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Cart(props) {
  const {
    open,
    setOpen,
    cart,
    handleRemoveFromCart,
    handleSubtractQuantity,
    handleAddQuantity,
    handleSubmitOrder,
  } = props;

  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const getSubtotal = () => {
    let subtotal = 0;
    cart.map((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };
  const getDelivery = () => {
    return 15;
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Cart
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            Place Order
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100vh",
        }}
      >
        <Box>
          {cart.map((item) => {
            return (
              <Box key={item.id}>
                <Box
                  sx={{
                    padding: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <img src={item.image} alt="" width={50} />
                  <Typography>{item.name}</Typography>
                  <Typography
                    variant="caption"
                    color="green"
                    fontWeight={"bold"}
                  >{`Ksh. ${item.price * item.quantity}`}</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <IconButton
                      size="small"
                      onClick={() => handleSubtractQuantity(item)}
                    >
                      <Remove fontSize="small" />
                    </IconButton>
                    <Typography variant="caption" fontWeight={"bold"}>
                      {item?.quantity}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleAddQuantity(item)}
                    >
                      <Add fontSize="small" />
                    </IconButton>
                  </Box>
                  <IconButton
                    sx={{ color: "red" }}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <Close sx={{ color: "red" }} />
                  </IconButton>
                </Box>
                <Divider />
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            padding: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "700" }}>{`Subtotal : `}</Typography>
            <Typography>{`Ksh. ${parseFloat(getSubtotal()).toFixed(
              2
            )}`}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "700" }}>{`Delivery : `}</Typography>
            <Typography>{`Ksh. ${parseFloat(getDelivery()).toFixed(
              2
            )}`}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: "900" }}>{`Total : `}</Typography>
            <Typography>{`Ksh. ${parseFloat(
              getDelivery() + getSubtotal()
            ).toFixed(2)}`}</Typography>
          </Box>
          <button
            className="placeOrderBtn"
            onClick={() => setDetailsOpen(true)}
          >
            Place Order
          </button>
        </Box>
      </Box>
      <OrderDetails
        {...{
          open: detailsOpen,
          handleSubmitOrder,
          onClose: () => {
            setDetailsOpen(false);
          },
        }}
      />
    </Dialog>
  );
}
