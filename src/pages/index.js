import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Example from "./../components/deEncryptEffect"
import { GlobalStateContext } from "../context/GlobalContextProvider"
import languageData from "../json/languages"

import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

import WelcomeSection from "../components/welcome_section"
import CvRedes from "../components/cvredes"
import Contact from "../components/contact"
import PortfolioCard from "../components/portfolioCard"

import ComputerIcon from "@material-ui/icons/Computer"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import WorkIcon from "@material-ui/icons/Work"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

import "./index.css"

import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "white",
    flexGrow: 1,
  },
  landingContainer: {
    maxWidth: "xl",
  },
  landingContainerStyle: {
    backgroundColor: "#cfe8fc",
    height: "100vh",
  },
  textStyle: {
    fontFamily: "monospace",
    paddingTop: "1.4rem",
    textAlign: "center",
    color: "white",
  },
  computerIcon: {
    height: "40px",
    width: "40px",
    color: "white",
  },
  landingIcon: {
    margin: "0 auto",
    height: "40px",
    width: "40px",
    color: "white",
  },
}))

function IndexPage() {
  const classes = useStyles()
  const state = useContext(GlobalStateContext)
  return (
    <div className={classes.root}>
      <Layout
        titulo={languageData[state.language].title}
        footer={languageData[state.language].footer}
        jsonData={languageData[state.language]}
        cvData={languageData[state.language].cvLink}
        cvTitle={languageData[state.language].header3b}
        portafolioTitle={languageData[state.language].header2}
      >
        <div className="landing">
          <div className="portraitBox">
            <div className={classes.textStyle}>
              <br />
              <h1>Cesar Puentes</h1>
              <ComputerIcon className={classes.computerIcon} />
              <Example />
              <br />
              <h2>
                Programador con experiencia en desarrollo web y ciencia de datos
              </h2>
            </div>
          </div>
          <div className="section1">
            <div className="subSection1">
              <AccountCircleIcon className={classes.landingIcon} />
              <h3 className={classes.textStyle}>Consulta mi CV</h3>
            </div>
          </div>
          <div className="section2">
            <div className="subSection1">
              <WorkIcon className={classes.landingIcon} />
              <h3 className={classes.textStyle}>Visita mi portafolio</h3>
            </div>
          </div>
          <div className="section3">
            <div className="subSection1">
              <MailOutlineIcon className={classes.landingIcon} />
              <h3 className={classes.textStyle}>Contacta conmigo</h3>
            </div>
          </div>
        </div>

        <div className="mailSection">
            <WelcomeSection jsonData={languageData[state.language]} />
        </div>

        
        <div className="mailSection">
            <CvRedes jsonData={languageData[state.language]} />
        </div>

        <div className="mailSection">
            <Contact jsonData={languageData[state.language]} />
        </div>
 
              
 
      </Layout>
    </div>
  )
}

export default IndexPage
