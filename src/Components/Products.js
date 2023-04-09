import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
} from "../redux/actions/productActions";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import MainCarousel from "./MainCarousel";
import { Box } from "@mui/material";

export default function Products() {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.allProducts.products);
  console.log("productssss", allProducts);

  const fetchProducts = async () => {
    const url = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    console.log(url, "urllllllllll");

    const a = dispatch(setProducts(url.data));
    console.log("aaaaaaaaaaaaaaa", a);
  };

  useEffect(() => {
    fetchProducts();
    // return () => {
    //   const remove = dispatch(removeSelectedProducts());
    //   console.log(remove, "remove");
    // };
  }, []);

  return (
    <>
      {Object.keys(allProducts).length === 0 ? (
        <Box marginTop="120px">
          <Loader />
        </Box>
      ) : (
        <>
          <MainCarousel />
          <Body />
          <Footer />
        </>
      )}
    </>
  );
}
