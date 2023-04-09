import * as React from "react";
import { routes } from "../Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import {
  searchProduct,
  searchManProduct,
  searchJewelProduct,
  searchElectronicsProduct,
  searchWomenProduct,
  setIsCartOpen,
} from "../redux/actions/productActions";
import { Badge, Box, IconButton } from "@mui/material";
import {
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { shades } from "../theme";

function Navbar() {
  const navigate = useNavigate();
  const totalQty = useSelector((state) => state.cartProduct.cart);

  const location = useLocation();
  const dispatch = useDispatch();

  const SearchProducts = (event) => {
    return dispatch(searchProduct(event.target.value));
  };

  const SearchManProducts = (event) => {
    return dispatch(searchManProduct(event.target.value));
  };

  const SearchJewelProducts = (event) => {
    return dispatch(searchJewelProduct(event.target.value));
  };

  const SearchElectronicsProducts = (event) => {
    return dispatch(searchElectronicsProduct(event.target.value));
  };

  const SearchWomenProducts = (event) => {
    return dispatch(searchWomenProduct(event.target.value));
  };

  const SearchHere = (ev) => {
    switch (window.location.pathname) {
      case "/category/men's%20clothing":
        return SearchManProducts(ev);
      case "/category/jewelery":
        return SearchJewelProducts(ev);
      case "/category/electronics":
        return SearchElectronicsProducts(ev);
      case "/category/women's%20clothing":
        return SearchWomenProducts(ev);
      default:
        return SearchProducts(ev);
    }
  };

  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        zIndex="1"
        width="100%"
        backgroundColor="rgba(255,255,255,0.95)"
      >
        <Box display="flex" alignItems="center" height="60px" color="black">
          <Box
            display="flex"
            alignItems="center"
            width="90%"
            margin="auto"
            justifyContent="space-between"
          >
            <Box
              onClick={() => navigate("/")}
              sx={{ "&:hover": { cursor: "pointer" }, fontWeight: "bold" }}
              color={shades.primary[500]}
              fontSize="20px"
            >
              Navbar
            </Box>
            <Box display="flex" columnGap="5px" marginLeft="10px">
              <Box
                sx={{
                  visibility: `${
                    location.pathname === "/cart" ? "hidden" : "visible"
                  }`,
                }}
              >
                <TextField
                  onClick={() =>
                    navigate(
                      location.pathname === "/"
                        ? "/category/all-products"
                        : location.pathname
                    )
                  }
                  id="outlined-basic"
                  label="Search Products Here"
                  variant="outlined"
                  size="small"
                  onChange={(e) => SearchHere(e)}
                />
              </Box>
              <Badge
                badgeContent={totalQty.length}
                color="secondary"
                invisible={totalQty.length === 0}
                sx={{
                  "& .MuiBadge-badge": {
                    right: 5,
                    top: 5,
                    padding: "0 4px",
                    height: "14px",
                    minWidth: "14px",
                  },
                }}
              >
                <IconButton
                  sx={{ color: "black" }}
                  onClick={() => dispatch(setIsCartOpen())}
                >
                  <ShoppingBagOutlined />
                </IconButton>
              </Badge>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          width="90%"
          margin="auto"
          justifyContent="space-between"
        >
          {routes.map((page) => (
            <Box
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: `${shades.secondary[500]}`,
                },
              }}
              paddingRight="5px"
              onClick={() => navigate("category/" + page.category)}
            >
              {page.name.toUpperCase()}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
export default Navbar;
