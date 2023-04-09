import React from "react";
import { shades } from "../theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  setIsHovered,
  adjustQtyDec,
  adjustQtyInc,
  addProductSingle,
} from "../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductBox(props) {
  const dispatch = useDispatch();
  const { product } = props;
  const cart = useSelector((state) => state.cartProduct.cart);
  const existingProductInCart = cart.find((prod) => {
    return prod.id === product.id;
  });
  const isHovered = useSelector((state) => state.allProducts.isHovered);
  const AddToCartSingle = (product) => {
    dispatch(addProductSingle(product));
    // console.log("element", a);
  };

  return (
    <>
      <Box key={product.id}>
        <Box
          width="100%"
          position="relative"
          onMouseOver={() => dispatch(setIsHovered(product.id))}
          onMouseOut={() => dispatch(setIsHovered(false))}
          sx={{
            "&:hover": {
              boxShadow: "0 6px 20px 0 rgba(12,12,12, 0.3)",
              border: "transparent",
              borderRadius: "20px",
            },
          }}
        >
          <Link
            to={`/product/${product.id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              src={product.image}
              alt="image"
              width="300px"
              height="300px"
              style={{ cursor: "pointer", objectFit: "contain" }}
            />
          </Link>
          <Box
            position="absolute"
            display={isHovered === product.id ? "block" : "none"}
            color="black"
            bottom="10%"
            left="0"
            width="100%"
            padding="0 5%"
          >
            <Box display="flex" justifyContent="center">
              {existingProductInCart ? (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  backgroundColor={shades.neutral[100]}
                  border={`1.5px solid ${shades.neutral[500]}`}
                >
                  <IconButton
                    // disabled={existingProductInCart.qty === 1}
                    onClick={() =>
                      dispatch(
                        adjustQtyDec({
                          ...product,
                          qty: existingProductInCart.qty,
                        })
                      )
                    }
                  >
                    <RemoveIcon />
                  </IconButton>
                  <Typography>{existingProductInCart.qty}</Typography>
                  <IconButton onClick={() => dispatch(adjustQtyInc(product))}>
                    <AddIcon />
                  </IconButton>
                </Box>
              ) : (
                <Button
                  onClick={() => AddToCartSingle(product)}
                  sx={{
                    backgroundColor: shades.primary[400],
                    color: "white",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: "red",
                      color: "white",
                    },
                  }}
                >
                  ADD TO CART
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
