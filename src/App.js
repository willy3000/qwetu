import React, { useState } from "react";
import Nav from "./components/nav";
import Categories from "./components/categories";
import Items from "./components/items";
import FloatingButton from "./components/floating-btn";
import { Box } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import { db } from "./firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Cart from "./components/cart";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e8520f",
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };
  const handleRemoveFromCart = (item) => {
    const newCart = cart.filter((i) => i.id !== item.id);
    setCart([...newCart]);
  };

  const handleSubmitOrder = async (values) => {
    try {
      const loadingToast = toast.loading("Placing order...");
      await addDoc(collection(db, "orders"), {
        name: values.name,
        phone: values.phone,
        note: values.note,
        cart: cart,
        orderedOn: Timestamp.now(),
      });
      setCartOpen(false);
      setCart([]);
      toast.success("Order placed Successfully");
      toast.dismiss(loadingToast);
    } catch (err) {
      alert(err);
    }
  };

  const handleAddQuantity = (item) => {
    const newCart = [];
    cart.map((i) => {
      if (i.id === item.id) {
        newCart.push({ ...i, quantity: item.quantity + 1 });
      } else {
        newCart.push(i);
      }
    });
    setCart([...newCart]);
  };

  const handleSubtractQuantity = (item) => {
    const newCart = [];
    cart.map((i) => {
      if (i.id === item.id && item.quantity > 1) {
        newCart.push({ ...i, quantity: item.quantity - 1 });
      } else {
        newCart.push(i);
      }
    });
    setCart([...newCart]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "90vh" }}>
        <Nav></Nav>

        {/* <Survey></Survey> */}

        <Categories {...{ currentCategory, setCurrentCategory }} />
        <Items
          {...{ currentCategory, handleAddToCart, cart, handleRemoveFromCart }}
        />
      </Box>
      <FloatingButton
        {...{ itemsCount: cart.length, handleSubmitOrder, setCartOpen }}
      />
      <Cart
        {...{
          open: cartOpen,
          setOpen: setCartOpen,
          cart,
          handleRemoveFromCart,
          handleAddQuantity,
          handleSubtractQuantity,
          handleSubmitOrder,
        }}
      />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
