import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import background from "./background.jpg";
import { Box, Grid, Typography } from "@mui/material";
import ProductBox from "./ProductBox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function Body() {
  const allProducts = useSelector((state) => state.allProducts.products);
  console.log("products", allProducts);

  return (
    <>
      <Box className="container" padding="50px">
        <Box backgroundColor="black" borderRadius="10px" color="white">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="20px"
              >
                <Box marginRight="5px">
                  <LocalShippingIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h4">FREE SHIPING</Typography>
                  <Typography variant="body1">
                    FREE SHIPING ON ALL ORDERS
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="20px"
              >
                <Box marginRight="5px">
                  <LocalShippingIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h4">FREE SHIPING</Typography>
                  <Typography variant="body1">
                    FREE SHIPING ON ALL ORDERS
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="20px"
              >
                <Box marginRight="5px">
                  <LocalShippingIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h4">FREE SHIPING</Typography>
                  <Typography variant="body1">
                    FREE SHIPING ON ALL ORDERS
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3} lg={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                padding="20px"
              >
                <Box marginRight="5px">
                  <LocalShippingIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h4">FREE SHIPING</Typography>
                  <Typography variant="body1">
                    FREE SHIPING ON ALL ORDERS
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Box padding="20px 0" display="flex" justifyContent="center">
          <Typography borderBottom="1px solid black" variant="h3">
            FEATURED PRODUCTS
          </Typography>
        </Box>
        <Box padding="20px">
          <Grid container spacing={2} display="flex">
            {allProducts.slice(2, 6).map((product) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                    display="flex"
                    justifyContent="center"
                  >
                    <ProductBox product={product} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
        <Box padding="20px 0">
          <Box
            sx={{
              height: "240px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundImage: `url(${background})`,
            }}
            position="relative"
          >
            <Box
              padding="20px 10px"
              backgroundColor="black"
              position="absolute"
              left="10%"
              top="40%"
            >
              <Link
                to="/category/jewelery"
                style={{ textDecoration: "none", color: "white" }}
              >
                Shop More
              </Link>
            </Box>
          </Box>
        </Box>

        <Box padding="20px 0" display="flex" justifyContent="center">
          <Typography borderBottom="1px solid black" variant="h3">
            LATEST PRODUCTS
          </Typography>
        </Box>
        <Box padding="20px">
          <Grid container spacing={2} display="flex">
            {allProducts.slice(6, 10).map((product) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={3}
                    display="flex"
                    justifyContent="center"
                  >
                    <ProductBox product={product} />
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
