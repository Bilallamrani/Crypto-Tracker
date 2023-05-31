import React from "react";
import bannerImage from '../../Images/banner2.jpg';
import { Container, Typography, makeStyles } from "@material-ui/core";
import Carousel from "./Carousel";
  

const useStyles = makeStyles(() => ({
  
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
    <div style={{ backgroundImage: `url(${bannerImage})` }}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Sphere
          </Typography>
          <Typography
            variant="h6"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Unlock the power of the digital economy with cryptocurrency.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
    </div>
  );
};

export default Banner;
