import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    fontFamily: "Montserrat",
    fontSize: "36px",
    lineHeight: "44px",

    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "3em",
    textAlign: "left",
  },
  desc: {
    paddingLeft: "2.2em",
    maxWidth: "1500px",
    marginTop: "75px",
    display: "flex",
    flexDirection: "column",
    gap: "42px",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0",
      alignItems: "center",
    },
  },
  study: {
    display: "flex",
    flexDirection: "column",
    gap: "29px",
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
    color: "white",
    "&:hover": {
      transitionDuration: "0.5s",
      color: "#4C3F91",
    },
  },
}));

const About = () => {
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
        }}
      >
        <span
          style={{
            color: "#B958A5",
          }}
        >
          03/
        </span>
        Обо мне
      </Typography>
      <div className={classes.desc}>
        <p>
          Начинающий фронтенд разработчик, влюбленный в своё дело. Моя цель -
          создание качественных, адаптивных, кроссбраузерных веб-сервисов.
        </p>
        <div className={classes.study}>
          <p>
            <span style={{ borderBottom: " 3px solid #B958A5",  paddingBottom: "7px" }}>Обучение</span>
          </p>
          <span>
            Курс{" "}
            <a
              className={classes.link}
              href="https://coursera.org/share/b41ab3f1ec3f14bc7477599a5ceba40d"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Web Design for Everybody: Basics of Web Development &amp; Coding”
            </a>{" "}
            by Coursera. 2020
          </span>
          <span>
            Курс{" "}
            <a
              className={classes.link}
              href="https://freecodecamp.org/certification/sam_heatfield/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              “Responsive Web Design”
            </a>{" "}
            by freecodecamp. 2021
          </span>
          <span>
            Специалитет “Компьютерная безопасность” Дальневосточный Федеральный
            Университет. 2017-2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
