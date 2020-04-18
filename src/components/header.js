import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import TranslateIcon from "@material-ui/icons/Translate"
import HomeIcon from "@material-ui/icons/Home"
import { Link } from "gatsby"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

import "./css/header.css"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    minWidth: 270
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeIcon: {
    color: "white",
  },
  appBarColor: {
    backgroundColor: "#1E2630",
  },
}))

export default function Header({
  titulo,
  data,
  cvLink,
  cvTitles,
  portafolioTitles,
}) {
  const classes = useStyles()
  const dispatch = useContext(GlobalDispatchContext)
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      {/* Este es el menú desplegable de la barra header */}
      <AppBar className={classes.appBarColor} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {titulo}
          </Typography>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link to="/">
              <HomeIcon className={classes.homeIcon} />
            </Link>
          </IconButton>


          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              dispatch({ type: "TOGGLE_LANG" })
            }}
          >
            <TranslateIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleClick} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>
              <a className="noUnderscore" href={cvLink}>{cvTitles}</a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link className="noUnderscore" to="/portfolioPage">{portafolioTitles}</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}
