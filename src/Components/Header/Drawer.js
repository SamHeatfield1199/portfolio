import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  link: {
    fontFamily: "Montserrat",
    textDecoration: "none",
    color: "#100e1d",
    fontSize: "24px",
    transitionDuration: "0.5s",
    "&:hover": {
      transitionDuration: "0.5s",
      color: "#B958A5",
    },
  },
  icon: {
    color: "white",
  },
  resumeButton: {
    fontFamily: "Montserrat",
    textDecoration: "none",
    color: "#100e1d",
    fontSize: "24px",
    border: "1px solid #B958A5",
    borderRadius: "6px",
    padding: "0.5em",
    "&:hover": {
      transitionDuration: "0.5s",
      backgroundColor: " #B958A5",
      color: "white"
    },
  },
}));

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <a href="#projects" className={classes.link}>
                Проекты
              </a>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <a href="#skills" className={classes.link}>
                Навыки
              </a>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <a href="#about" className={classes.link}>
                Обо мне
              </a>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <a href="#contact" className={classes.link}>
                Контакты
              </a>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
        
              <a className={classes.resumeButton}
                href="https://drive.google.com/file/d/1IzOoFXANkCHT7csl7zy_X7S-zKRMP70I/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                
              >
                Резюме
              </a>
           
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon style={{ fill: "white" }} />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
