import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  adjustQtyInc,
  adjustQtyDec,
  setIsCartOpen,
} from "../redux/actions/productActions";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { shades } from "../theme";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export default function Cart() {
  const cartProduct = useSelector((state) => state.cartProduct.cart);
  const isCartOpen = useSelector((state) => state.cartProduct.isCartOpen);
  console.log(isCartOpen, "ooooooooo");

  let total = 0;
  cartProduct.map((element) => {
    const { price, qty } = element;
    return (total = Math.round((total + price * qty) * 100) / 100);
  });

  const dispatch = useDispatch();

  const RemoveProduct = (element) => {
    const a = dispatch(removeProduct(element));
  };

  const IncreaseQty = (element) => {
    dispatch(adjustQtyInc(element));
  };

  const DecreaseQty = (element) => {
    dispatch(adjustQtyDec(element));
  };

  return (
    <>
      <Box
        display={isCartOpen ? "block" : "none"}
        backgroundColor="rgba(0,0,0,0.5)"
        position="fixed"
        zIndex={10}
        width="100%"
        height="100%"
        left="0"
        top="0"
        overflow="auto"
      >
        <Box
          position="fixed"
          right="0"
          bottom="0"
          width="max(400px, 30%)"
          height="100%"
          backgroundColor="white"
          zIndex={10}
        >
          <Box padding="30px" height="100%" overflow="auto">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              marginBottom="15px"
            >
              <Typography variant="h3">
                SHOPPING BAG ({cartProduct.length})
              </Typography>
              <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
                <CloseIcon />
              </IconButton>
            </Box>
            {cartProduct.map((element) => (
              <>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                padding="15px 0"
              >
                <Box flex="1,1,40%">
                  <img
                    alt={element.title}
                    width="123px"
                    height="164px"
                    src={element.image}
                  />
                </Box>
                <Box flex="1,1,60%">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    marginBottom="5px"
                  >
                    <Typography fontWeight="bold">
                      {element.title.substring(0, 20)}
                    </Typography>
                    <IconButton onClick={() => RemoveProduct(element)}>
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      border={`1.5px solid ${shades.neutral[500]}`}
                    >
                      <IconButton onClick={() => DecreaseQty(element)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{element.qty}</Typography>
                      <IconButton onClick={() => IncreaseQty(element)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                    <Typography fontWeight="bold">$ {element.price}</Typography>
                  </Box>
                </Box>
              </Box>
              <Divider />
              </>
            ))}
            

            <Box margin="20px 0">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography fontWeight="bold">SUBTOTAL</Typography>
                <Typography fontWeight="bold">$ {total}</Typography>
              </Box>
              <Button
                sx={{
                  backgroundColor: shades.primary[400],
                  color: "white",
                  borderRadius: 0,
                  minWidth: "100%",
                  padding: "15px",
                  margin:"20px 0",
                  "&:hover" : {backgroundColor: shades.neutral[700]}
                }}
              >
                CHECKOUT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
 
}
