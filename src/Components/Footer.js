import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes";
import { Box, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "black !important" }} padding="20px">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={2} lg={2}>
            <Grid>
              <Typography variant="h3" color="white" >
                Navbar
              </Typography>
              <Typography variant="body2" color="white">
                © {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md lg>
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="h3" color="white" borderBottom="1px solid white" paddingBottom="5px">
                CATEGORIES
              </Typography>
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
                      padding="10px 10px 10px 0"
                      color="white"
                      className="CategoryNameBox"
                    >
                      {route.category.toUpperCase()}{" "}
                    </Box>
                  </Link>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md lg>
            <Box display="flex" justifyContent="flex-start">
              <Typography variant="h3" color="white" borderBottom="1px solid white" paddingBottom="5px">
                RESOURCES
              </Typography>
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
                      padding="10px 10px 10px 0"
                      color="white"
                      className="CategoryNameBox"
                    >
                      {route.category.toUpperCase()}{" "}
                    </Box>
                  </Link>
                );
              })}
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md lg>
              <Box display="flex" justifyContent="flex-start">
                <Typography variant="h3" color="white" borderBottom="1px solid white" paddingBottom="5px">
                  ABOUT
                </Typography>
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
                        padding="10px 10px 10px 0"
                        color="white"
                        className="CategoryNameBox"
                      >
                        {route.category.toUpperCase()}{" "}
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md lg>
              <Box display="flex" justifyContent="flex-start">
                <Typography variant="h3" color="white" borderBottom="1px solid white" paddingBottom="5px">
                  CONTACT
                </Typography>
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
                        padding="10px 10px 10px 0"
                        color="white"
                        className="CategoryNameBox"
                      >
                        {route.category.toUpperCase()}{" "}
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Grid>
        </Grid>
      </Box>

      {/* <footer>
        <div className="row">
          <div className="col-12 col-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="d-block mb-2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
              <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
              <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
              <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
              <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
              <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
            <small className="d-block mb-3 text-info">
              © {new Date().getFullYear()}
            </small>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-info">Categories</h5>
            <ul className="list-unstyled text-small">
              <li>
                {routes.map((route) => {
                  const { category, key } = route;
                  return (
                    <Link
                      key={key}
                      to={"category/" + route.category}
                      style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      <div>{category}</div>
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-info">Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-white" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Resource name
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Another resource
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-info">Resources</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-white" href="#">
                  Business
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Education
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Government
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Gaming
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-info">About</h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-white" href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Locations
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a className="text-white" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
    </>
  );
}
