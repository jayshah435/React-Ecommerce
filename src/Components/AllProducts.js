import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  removeSelectedProducts,
  setProducts,
} from "../redux/actions/productActions";
import "../App.css";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import ProductBox from "./ProductBox";
import Footer from "./Footer";
import Loader from "./Loader";

export default function AllProducts() {
  const allProducts = useSelector((state) => state.allProducts.searchProducts);
  const location = useLocation();

  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const url = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });

    dispatch(setProducts(url.data));
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [location.pathname]);

  return (
    <>
      {allProducts.length === 0 ? (
        <Box marginTop="120px" display="flex" justifyContent="center">
          {/* <Loader /> */}
          No Products
        </Box>
      ) : (
        <>
          <Box>
            <Box
              display="flex"
              alignItems="center"
              marginTop="100px"
              marginBottom="20px"
              width="100%"
              justifyContent="center"
            >
              <Box borderBottom="1px solid black" paddingBottom="5px">
                <Typography variant="h3">ALL PRODUCTS</Typography>
              </Box>
            </Box>

            <Box
              display="grid"
              gridTemplateColumns="repeat(auto-fill, 300px)"
              justifyContent="space-around"
              rowGap="25px"
              columnGap="1.33%"
              padding="20px"
            >
              {allProducts.map((product) => {
                return (
                  <>
                    <ProductBox product={product} />
                  </>
                );
              })}
            </Box>
          </Box>

          <Footer />
        </>
      )}
    </>
  );
}
