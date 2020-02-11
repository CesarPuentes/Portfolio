import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import WorkIcon from "@material-ui/icons/Work"
import { Link } from "gatsby"

import "./portfolioCard.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icon: {
    height: "40px",
    width: "40px",
    color: "black",
    "&:hover": {
      color: "gold",
    },
  },
}))

export default function PortfolioCard({ jsonData }) {
  const classes = useStyles()

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>{jsonData.header2}</h2>
          <div>
            <WorkIcon className={classes.icon} />
          </div>
          <h2>
            {jsonData.header2b}{" "}
            <Link to="/portfolioPage">{jsonData.header2c}</Link>{" "}
          </h2>
        </Grid>
      </Grid>
    </div>
  )
}
