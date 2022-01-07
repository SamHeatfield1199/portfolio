import { Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./style.css"


const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    overflow: "hidden",
    marginLeft: "10em",
    height: "100vh",

  },
  wrapper:{
    display: "flex",
    maxWidth: "803px",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    justifyContent: "center",
    gap: "14px",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  button: {
    border: "1px solid #B958A5",
    borderRadius: "6px",
    marginTop: "2em",
    padding: "0.8em 0.7em",
    transitionDuration: "0.5s",
    "&:hover": {
      transitionDuration: "0.5s",
      background: "#B958A5",
    },

  },

}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className={classes.wrapper}>
      <Typography
        variant="h2"
        style={{
          fontSize: "64px",
          color: "#EEE6FF",
          fontFamily: "Montserrat",
          lineHeight: "78px",
        }}
      >
        Смирнова Анастасия
      </Typography>
      <Typography
        variant="h3"
        style={{
          fontSize: "48px",
          color: "#4C3F91",
          fontFamily: "Montserrat",
          lineHeight: "59px",
        }}
      >
        Frontend developer
      </Typography>
      <p
        style={{
          fontSize: "27px",
          color: "#FFFFFF",
          fontFamily: "Montserrat",
          lineHeight: "33px",
        }}
      >
        &lt;The only time you should ever look back, is to see how far you've
        come /&gt;
      </p>

      <a
        href="#contact"
        className={classes.button}
        style={{
          fontSize: "24px",
          color: "#FFFFFF",
          fontFamily: "Montserrat",
          lineHeight: "29px",
          textDecoration: "none",
        }}
      >
        Связаться со мной
      </a>
      </div>
    </div>
  );
};

export default Home;
