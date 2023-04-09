import { Box, Typography } from "@mui/material";
import React from "react";

import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  removeSelectedCategoryProducts,
  setCategoryProducts,
} from "../redux/actions/productActions";
import { Link, useLocation, useParams } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";
import { routes } from "../Routes";
import ProductBox from "./ProductBox";

export default function Categories(props) {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log("location", location);
  // console.log("props", props);
  // console.log("params", params);

  const allProducts = useSelector(
    (state) => state.allProducts.searchCategoryProducts
  );
  console.log("CategoryP", allProducts);

  const fetchProducts = async () => {
    const url = await axios
      .get(`https://fakestoreapi.com/products/category/${params.categoryName}`)
      .catch((err) => {
        console.log("Error", err);
      });

    // console.log("url", url.data);

    dispatch(setCategoryProducts(url.data));
  };

  const AddToCart = (element) => {
    dispatch(addProduct(element));
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      const remove = dispatch(removeSelectedCategoryProducts());
      console.log(remove, "remove");
    };
  }, [params.categoryName]);

  return (
    <>
      {allProducts.length === 0 ? (
        <Box marginTop="120px" display="flex" justifyContent="center">
          {/* <Loader /> */}
          No Products
        </Box>
      ) : (
        <>
          <Box
            display="flex"
            // alignItems="center"
            // justifyContent="space-between"
            marginTop="100px"
            width="100%"
          >
            <Box width="20%" padding="20px">
              <Box>
                <Box
                  borderBottom="1px solid black"
                  paddingBottom="5px"
                  display="flex"
                  justifyContent="center"
                >
                  <Typography variant="h3">CATEGORIES</Typography>
                </Box>
                <Box>
                  {routes.map((route) => {
                    return (
                      <Link
                        key={route.key}
                        to={`/category/${route.category}`}
                        sx={{
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        <Box
                          padding="10px"
                          color="black"
                          className="CategoryNameBox"
                        >
                          {route.category.toUpperCase()}{" "}
                        </Box>
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            </Box>

            <Box width="80%" padding="20px">
              <Box display="flex" justifyContent="center">
                <Box borderBottom="1px solid black" paddingBottom="5px">
                  <Typography variant="h3">
                    {params.categoryName.toUpperCase()}
                  </Typography>
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
          </Box>

          <Footer />
        </>
      )}
    </>
  );
}
