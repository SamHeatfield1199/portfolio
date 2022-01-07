import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

import html from "./data/img/skills/html.png";
import css from "./data/img/skills/css.png";
import sass from "./data/img/skills/sass.png";
import js from "./data/img/skills/js.png";
import react from "./data/img/skills/react.png";
import git from "./data/img/skills/git.png";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    maxWidth: "1024px",
    margin: "40px auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "3.5rem",
    justifyContent: "center",
  },

  el1: {
    width: "300px",
    height: "300px",
    border: "4px solid #4c3f91",
    borderRadius: "10px",
    overflow: "hidden",
    position: "relative",
    background: "transparent",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "13px",
  },

  cards: {
    marginTop: "105px",
  },
  img: {
    width: "180px",
    height: "183px",
  },
  span: {
    fontFamily: "Montserrat",
    fontSize: "36px",
    lineHeight: "29px",
    color: "#4C3F91",
  },
  title: {
    fontSize: "48px",
    color: "#EEE6FF",
    fontFamily: "Montserrat",
    lineHeight: "59px",
    marginBottom: "102px",

    textAlign: "left",
    paddingLeft: "2.5em",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "0",
    },
  },
}));
const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.cards}>
      <Typography variant="h2" className={classes.title}>
        <span
          style={{
            color: "#B958A5",
          }}
        >
          02/
        </span>
        Навыки
      </Typography>

      <div className={classes.cardGrid}>
        <div className={classes.el1}>
          <img className={classes.img} src={html} alt="html" />
          <span className={classes.span}>HTML5</span>
        </div>
        <div className={classes.el1}>
          <img className={classes.img} src={css} alt="css" />
          <span className={classes.span}>CSS3</span>
        </div>
        <div className={classes.el1}>
          <img className={classes.img} src={js} alt="js" />
          <span className={classes.span}>JS/ES6</span>
        </div>
        <div className={classes.el1}>
          <img className={classes.img} src={sass} alt="sass" />
          <span className={classes.span}>Sass</span>
        </div>
        <div className={classes.el1}>
          <img className={classes.img} src={react} alt="react" />
          <span className={classes.span}>React</span>
        </div>
        <div className={classes.el1}>
          <img className={classes.img} src={git} alt="git" />
          <span className={classes.span}>Git</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
