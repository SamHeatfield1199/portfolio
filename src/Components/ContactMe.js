import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import arrow from "./data/img/arrow.png";
import CallMadeIcon from "@material-ui/icons/CallMade";
const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat",
    fontSize: "36px",
    lineHeight: "44px",
    marginTop: "75px",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "3em",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      paddingLeft: "0",
      paddingRight: "1em"
    },
  },
  send: {
    display: "flex",
    borderBottom: " 1px solid white",
    lineHeight: "44px",
    paddingBottom: "7px",
    justifyContent: "space-between",
  },
  sends: {
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    marginTop: "70px",
    [theme.breakpoints.down("md")]: {
      paddingRight: "1em"
    },
  },
  arrow: {
    transition: "transform 250ms",
    cursor: "pointer",
    textDecoration: "none",
    color: "white",
    "&:hover ": {
      transform: "translateX(20px)",
    },
  },
  "@keyframes bounce": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(20px)",
    },
  },
}));

const ContactMe = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h2"
        style={{
          fontSize: "48px",
          color: "#EEE6FF",
          fontFamily: "Montserrat",
          lineHeight: "59px",
          marginBottom: "102px",
        }}
      >
        <span
          style={{
            color: "#B958A5",
          }}
        >
          04/
        </span>
        Контакты
      </Typography>
      <div style={{ paddingLeft: "2em" }}>
        <p style={{ maxWidth: "710px" }}>
          Свяжитесь со мной любым удобным для вас способом:{" "}
        </p>
        <div className={classes.sends}>
          <div className={classes.send}>
            <span>Почта</span>
            <a className={classes.arrow} href="mailto:asmirnova1199@gmail.com">
              <span>&#10230;</span>
            </a>
          </div>
          <div className={classes.send}>
            <span>Telegram</span>
            <a
              className={classes.arrow}
              href="https://t.me/samheatfield"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#10230;</span>
            </a>
          </div>
          <div className={classes.send}>
            <span>Github</span>
            <a
              className={classes.arrow}
              href="https://github.com/SamHeatfield1199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#10230;</span>
            </a>
          </div>
          <div className={classes.send}>
            <span>WhatsApp</span>
            <a
              className={classes.arrow}
              href="https://api.whatsapp.com/send/?phone=79140662753"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#10230;</span>
            </a>
          </div>
          <div className={classes.send}>
            <span>Instagram</span>
            <a
              className={classes.arrow}
              href="https://www.instagram.com/samheatfield/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>&#10230;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
