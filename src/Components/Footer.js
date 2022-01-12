import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    background: "rgba(76, 63, 145, 0.5)",
    marginTop: "103px",
    paddingTop: "60px",
    
  },

  navlinks: {
    display: "flex",
    alignItems: "center",
    gap: "2em",
 
  },
  title: {
    flex: 1,
    fontFamily: "Montserrat",
    fontSize: "36px",
    lineHeight: "44px",
    marginLeft: "3em",
    color: "#FFFFFF",
 
  },
  link: {
    fontFamily: "Montserrat",
    textDecoration: "none",
    color: "white",
    fontSize: "24px",
    transitionDuration: "0.5s",
    "&:hover": {
      transitionDuration: "0.5s",
      color: "#4C3F91",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  resumeButton: {
    border: "1px solid #B958A5",
    borderRadius: "6px",
    padding: " 0.3em 0.7em",
    fontFamily: "Montserrat",
    textDecoration: "none",
    color: "white",
    fontSize: "24px",
    transitionDuration: "0.5s",
    marginRight: "3em",
    "&:hover": {
      transitionDuration: "0.5s",
      backgroundColor: " #B958A5",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div style={{ display: "flex", marginBottom: "60px" }}>
        <Typography className={classes.title}>Personal portfolio</Typography>
        <div className={classes.navlinks}>
          <a href="#projects" className={classes.link}>
            Проекты
          </a>
          <a href="#skills" className={classes.link}>
            Навыки
          </a>
          <a href="#about" className={classes.link}>
            Обо мне
          </a>
          <a href="#contact" className={classes.link}>
            Контакты
          </a>

          <a
            href="https://drive.google.com/file/d/1IzOoFXANkCHT7csl7zy_X7S-zKRMP70I/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.resumeButton}
          >
            Резюме
          </a>
        </div>
      </div>
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          color: "#FFFFFF",
          marginBottom: "50px",
        }}
      >
        &copy;2022{" "}
      </span>
    </div>
  );
};

export default Footer;
