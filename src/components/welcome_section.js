import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import LanguageIcon from "@material-ui/icons/Language"
import FormatShapes from "@material-ui/icons/FormatShapes"
import CloudQueue from "@material-ui/icons/CloudQueue"
import Code from "@material-ui/icons/Code"

import "./welcome.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  iconAlign: {
    marginLeft: "50%",
  },
}))

export default function WelcomeSection({ jsonData }) {
  const classes = useStyles()

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <h2 className={classes.paper}>{jsonData.header1}</h2>
          </Grid>
        </Grid>
        <div className="welcomeBox">
          <div className="welcomeBoxItem">
            <div className="welcomeBoxItemInside">
              <div>
                <Code />
              </div>
              <h3>{jsonData.subheader1}</h3>
            </div>
          </div>
          <div className="welcomeBoxItem">
            <div className="welcomeBoxItemInside">
              <div>
                <FormatShapes />
              </div>
              <h3>{jsonData.subheader2}</h3>
            </div>
          </div>
          <div className="welcomeBoxItem">
            <div className="welcomeBoxItemInside">
              <div>
                <CloudQueue />
              </div>
              <h3>{jsonData.subheader3}</h3>
            </div>
          </div>
          <div className="welcomeBoxItem">
            <div className="welcomeBoxItemInside">
              <div>
                <LanguageIcon />
              </div>
              <h3>{jsonData.subheader4}</h3>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}
