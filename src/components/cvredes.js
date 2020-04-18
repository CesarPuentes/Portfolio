import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import DescriptionIcon from "@material-ui/icons/Description"
import { Link } from "gatsby"

import "./css/cv.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
  },
  icon: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    width: "50%",
    "&:hover": {
      color: "gold",
    },
  },
}))

export default function CvRedes({ jsonData }) {
  const classes = useStyles()
  const state = useContext(GlobalStateContext)

  return (
    <div className="mainContainer">
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2 className={classes.paper}>{jsonData.header3}</h2>
          </Grid>
        </Grid>
        <div className="cv-container">
          <div>GitHub</div>
          <div>LinkedIn</div>
          <div>CV</div>
          <a href="https://github.com/CesarPuentes?tab=repositories">
            <GitHubIcon className={classes.icon} />
          </a>
          <a href="https://www.linkedin.com/in/c%C3%A9sar-david-p-510238a1/">
            <LinkedInIcon className={classes.icon} />
          </a>
          <a href="">
            <DescriptionIcon className={classes.icon} />
          </a>
        </div>
      </Paper>
    </div>
  )
}
