import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import React from "react";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    display: "flex",
    boxShadow: "none",
    background: "transparent",
    marginTop: "2em",
  },

  navlinks: {
    display: "flex",
    alignItems: "center",
    gap: "2em",
  },
  logo: {
    flexGrow: "1",
    paddingLeft: "5em",
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
  },
  resumeButton: {
    border: "1px solid #B958A5",
    borderRadius: "6px",
    padding: " 0.3em 0.7em",
    marginLeft: "1.5em",
    marginRight: "3em",
    fontFamily: "Montserrat",
    textDecoration: "none",
    color: "white",
    fontSize: "24px",
    transitionDuration: "0.5s",
    "&:hover": {
      transitionDuration: "0.5s",
      backgroundColor: " #B958A5",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar className={classes.appBar}>
      <CssBaseline />

      <Toolbar>
        <Typography className={classes.logo}>
          <a href="#home" className={classes.link}>
            SH
          </a>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
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
              href="https://drive.google.com/file/d/1pLWolp0PgRW4krv8UJ-CM_a78H4-7k8w/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.resumeButton}
            >
              Резюме
            </a>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
