import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBarColor: {
    backgroundColor: "#1E2630",
  }
}))

export default function Footer({ titulo }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarColor} position="static">
        <Toolbar></Toolbar>
      </AppBar>
    </div>
  )
}
