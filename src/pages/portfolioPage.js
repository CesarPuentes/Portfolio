import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import GridList from "@material-ui/core/GridList"
import GridListTile from "@material-ui/core/GridListTile"
import GridListTileBar from "@material-ui/core/GridListTileBar"
import IconButton from "@material-ui/core/IconButton"
import LinkIcon from "@material-ui/icons/Link"
import GitHub from "@material-ui/icons/GitHub"
import Typography from "@material-ui/core/Typography"
import WorkIcon from "@material-ui/icons/Work"
import tileData from "../json/portfolioList"
import { GlobalStateContext } from "../context/GlobalContextProvider"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/css/portfolioCard.css"
import "./portfolioPage.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    cols: "1",
  },
  gridList: {
    width: "auto",
    height: "450",
  },
  gridListItem: {
    border: "5px solid #3C76A5",
    marginBottom: "20px",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  icon2: {
    height: "60px",
    width: "60px",
    color: "black",
    "&:hover": {
      color: "gold",
    },
  },
}))

export default function PortfolioPage() {
  const classes = useStyles()
  const state = useContext(GlobalStateContext)
  return (
    <Layout>
      <SEO title="Page two" />
      <div className={classes.root}>
        <Typography variant="h2" component="h2" align="center" gutterBottom>
          <p className={classes.titleStyle}>{state.portfolioTitle}</p>
          <div className="jello-horizontal">
            <WorkIcon className={classes.icon2} />
          </div>
        </Typography>

        <GridList cols={1} cellHeight={280} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile className={classes.gridListItem} key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Tech Stack → {tile.Tech_Stack}</span>}
                actionIcon={
                  <div>
                    <IconButton
                      aria-label={`Web Link to ${tile.title}`}
                      className={classes.icon}
                      href={tile.pageLink}
                    >
                      <LinkIcon />
                    </IconButton>
                    <IconButton
                      aria-label={`Link to GitHub of ${tile.title}`}
                      className={classes.icon}
                      href={tile.gitLink}
                    >
                      <GitHub />
                    </IconButton>
                  </div>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Layout>
  )
}
