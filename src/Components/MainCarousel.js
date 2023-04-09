import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import fashion from "./fashion.jpg";
import fashion2 from "./fashion2.jpg";
import fashion1 from "./fashion1.jpg";
import React from "react";
import { shades } from "../theme";

export default function MainCarousel() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <>
    <Box
    marginTop="87px"
    >
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateBeforeIcon sx={{fontSize: 40}}/>
          </IconButton>
        )}
        renderArrowNext={(onClickHandler, hasNext, label) => (
          <IconButton
            onClick={onClickHandler}
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              color: "white",
              padding: "5px",
              zIndex: "10",
            }}
          >
            <NavigateNextIcon sx={{fontSize: 40}}/>
          </IconButton>
        )}
      >

        <Box>
          <img
          src={fashion}
          alt="First slide"
          style={{
            width:"100%",
            height:"500px",
            backgroundAttachment:"fixed"
          }}
          />
          <Box
          position="absolute"
          top="45%"
          left="10%"
          maxWidth={isNonMobile ? undefined : "200px"}
          height={isNonMobile ? undefined : "100px"}
          backgroundColor="rgba(255,255,255,0.95)"
          color="red"
          fontWeight="bold"
          fontSize={isNonMobile ? "30px" : "20px"}
          zIndex="10"
          padding="20px"
          >SUMMER SALE</Box>
        </Box>
        <Box>
          <img
          src={fashion1}
          alt="Second slide"
          style={{
            width:"100%",
            height:"500px",
            backgroundAttachment:"fixed"
          }}
          />
          <Box
          position="absolute"
          top="45%"
          left="10%"
          maxWidth={isNonMobile ? undefined : "200px"}
          height={isNonMobile ? undefined : "100px"}
          backgroundColor="rgba(255,255,255,0.95)"
          color="black"
          fontWeight="bold"
          fontSize={isNonMobile ? "30px" : "20px"}
          zIndex="10"
          padding="20px"
          >UPTO 50% OFF
          </Box>
        </Box>
        <Box>
          <img
          src={fashion2}
          alt="Third slide"
          style={{
            width:"100%",
            height:"500px",
            backgroundAttachment:"fixed"
          }}
          />
          <Box
          position="absolute"
          top="45%"
          left="10%"
          maxWidth={isNonMobile ? undefined : "200px"}
          height={isNonMobile ? undefined : "100px"}
          backgroundColor="rgba(255,255,255,0.95)"
          color="red"
          fontWeight="bold"
          fontSize={isNonMobile ? "30px" : "20px"}
          zIndex="10"
          padding="20px"
          >NEW ARRIVALS</Box>
        </Box>

      </Carousel>
      </Box>
    </>
  );
}
