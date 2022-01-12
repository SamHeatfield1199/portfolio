import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "550px",
    height: "750px",
    borderRadius: "12px",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      height: "53em",
    },
  },
  cardContent: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.4em",
    fontFamily: "Montserrat",
  },
  stack: {
    display: "flex",
    marginTop: "20px",
    fontWeight: "600",
    gap: "1em",
    fontSize: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "45px",
  },
  urlRepo: {
    border: "1px solid #B958A5",
    borderRadius: "6px",
    fontSize: "24px",
    color: "#B958A5",
    fontFamily: "Montserrat",
    textDecoration: "none",
    padding: "0.5em 1.5em",
    "&:hover": {
      transitionDuration: "0.5s",
      backgroundColor: " #4C3F91",
      color: "#FFFFFF",
    },
  },
  urlDemo: {
    border: "1px solid #B958A5",
    background: "#B958A5",
    borderRadius: "6px",
    fontSize: "24px",
    color: "#FFFFFF",
    fontFamily: "Montserrat",
    textDecoration: "none",
    padding: "0.5em 1.5em",

    "&:hover": {
      transitionDuration: "0.5s",
      backgroundColor: " #4C3F91",
    },
  },
}));

const Project = ({ project }) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={
        project.id === 2 || project.id === 3
          ? { backgroundColor: "rgba(76, 63, 145, 0.5)" }
          : { backgroundColor: " white" }
      }
    >
      <div>
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={project.img}
          alt="project"
        />
      </div>
      <CardContent
        style={
          project.id === 2 || project.id === 3
            ? { color: "white" }
            : { color: " #4C3F91" }
        }
      >
        <div className={classes.cardContent}>
          <Typography
            variant="h5"
            style={{
              fontSize: "36px",
              fontWeight: "600",
              fontFamily: "Montserrat",
              textAlign: "center",
            }}
          >
            {project.title}
          </Typography>
          <Typography
            variant="body2"
            style={{
              fontSize: "24px",
              paddingLeft: "45px",
              paddingRight: "45px",
              opacity: "0.7",
              textAlign: "center",
              
            }}
          >
            {project.desc}
          </Typography>
          <div className={classes.stack}>
            {project.stack.map((stack) => (
              <span>{stack}</span>
            ))}
          </div>
          <div className={classes.buttons}>
            {project?.urlDemo && (
              <a
                href={project.urlDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.urlDemo}
              >
                Demo
              </a>
            )}

            <a
              href={project.urlRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={classes.urlRepo}
            >
              Code
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Project;
