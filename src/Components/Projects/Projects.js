import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { projects } from "../data/projects";
import Project from "./Project";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
  },
  projects: {
    display: "flex",
    justifyContent: "center",
    marginTop: "85px",
  },

  cardGrid: {
    maxWidth: "1300px",
    display: "flex",
    flexWrap: "wrap",
    gap: "126px",
    justifyContent: "center",
  },

  el1: {
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
  title: {
    fontSize: "48px",
    color: "#EEE6FF",
    fontFamily: "Montserrat",
    lineHeight: "59px",
    textAlign: "left",
    paddingLeft: "2.5em",

    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingLeft: "0",
    },
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <Typography variant="h2" className={classes.title}>
        <span
          style={{
            color: "#B958A5",
          }}
        >
          01/
        </span>
        Проекты
      </Typography>
      <div className={classes.projects}>
        <div className={classes.cardGrid}>
          {projects.map((project) => (
            <div className={classes.el1}>
              <Project project={project} key={project.id} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
