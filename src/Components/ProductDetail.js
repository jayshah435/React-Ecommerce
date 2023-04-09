import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductSingleProduct,
  selectedProduct,
  adjustQtyIncSingle,
  adjustQtyDecSingle,
  removeSelectedProduct,
  relatedProduct,
  removeRelatedProducts,
} from "../redux/actions/productActions";
import Loader from "./Loader";
import Footer from "./Footer";
import { routes } from "../Routes";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { shades } from "../theme";
import ProductBox from "./ProductBox";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const singleProduct = useSelector((state) => state.singleProduct.oneProduct);
  console.log("singleProduct", singleProduct.id);

  const relatedProducts = useSelector(
    (state) => state.allProducts.relatedProducts
  );
  console.log("relatedProducts", relatedProducts);

  const { productId } = useParams();
  // console.log("id", productId);

  const fetchProduct = async () => {
    const singleUrl = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedProduct(singleUrl.data));
    dispatch(relatedProduct(singleUrl.data));
  };

  useEffect(() => {
    fetchProduct();
    return () => {
      dispatch(removeSelectedProduct());
      dispatch(removeRelatedProducts());
    };
  }, [productId]);

  const AddToCartSingleProduct = (element) => {
    dispatch(addProductSingleProduct(element));
    // console.log("element", a);
  };

  const IncreaseQtySingle = (element) => {
    dispatch(adjustQtyIncSingle(element));
  };

  const DecreaseQtySingle = (element) => {
    dispatch(adjustQtyDecSingle(element));
  };

  const { image, category, title, price, description, qty } = singleProduct;
  return (
    <>
      {singleProduct.length === 0 ? (
        <Box marginTop="120px">
          <Loader />
        </Box>
      ) : (
        <>
          <Box marginTop="87px" padding="20px">
            <Box display="flex">
              <Box
                width="35%"
                height="500px"
                padding="20px"
                marginRight="5px"
                sx={{
                  boxShadow: "0 6px 20px 0 rgba(12,12,12, 0.15)",
                  border: "transparent",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={image}
                  alt="product"
                  width="100%"
                  height="100%"
                  style={{ objectFit: "contain" }}
                ></img>
              </Box>
              <Box
                width="65%"
                padding="20px"
                sx={{
                  boxShadow: "0 6px 20px 0 rgba(12,12,12, 0.15)",
                  border: "transparent",
                  borderRadius: "20px",
                }}
              >
                <Typography variant="body2">{category}</Typography>
                <Typography variant="h2">{title}</Typography>
                <Typography variant="body1" marginBottom="30px">
                  $ {price}
                </Typography>
                <Typography variant="body1" marginBottom="10px">
                  {description}
                </Typography>

                <Box display="flex" alignItems="center">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    backgroundColor={shades.neutral[100]}
                    border={`1.5px solid ${shades.neutral[500]}`}
                    marginRight="10px"
                  >
                    <IconButton
                      disabled={qty === 1}
                      onClick={() => DecreaseQtySingle(singleProduct)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{qty}</Typography>
                    <IconButton
                      onClick={() => IncreaseQtySingle(singleProduct)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>

                  <Button
                    onClick={() => AddToCartSingleProduct(singleProduct)}
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
                </Box>
              </Box>
            </Box>
            <Box>
              <Box padding="20px 0" display="flex" justifyContent="center">
                <Typography variant="h3" borderBottom="1px solid black">
                  RELATED PRODUCTS
                </Typography>
              </Box>
              <Box padding="20px">
                <Box
                  display="grid"
                  gridTemplateColumns="repeat(auto-fill, 300px)"
                  justifyContent="space-around"
                  rowGap="25px"
                  columnGap="1.33%"
                  padding="20px"
                >
                  {relatedProducts.slice(0, 4).map((product) => {
                    return (
                      <>
                        <ProductBox product={product} />
                      </>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
          <Footer />
        </>
      )}
    </>
  );

}
