import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import FormControl from "@material-ui/core/FormControl"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import AccountCircle from "@material-ui/icons/AccountCircle"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import Button from "@material-ui/core/Button"
import * as emailjs from "emailjs-com"

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0),
  },
}))

export default function Contact({ jsonData }) {
  const classes = useStyles()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("Subject")
  const [message, setMessage] = useState("")

  const handleSubmit = evt => {
    evt.preventDefault()
    console.log(`Submitting name ${name}`)
    console.log(`Submitting email ${email}`)
    console.log(`Submitting message ${message}`)

    let templateParams = {
      from_name: email,
      to_name: "cdpuentesf@gmail.com",
      subject: subject,
      message_html: message,
    }

    emailjs.send(
      "gmail",
      "template_PdW5IJzv",
      templateParams,
      "user_2mDS4ZcQ0G5dl6uwGjD32"
    )
    resetForm()
  }

  const resetForm = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div id="seccion_contacto">
      <Grid container>
        <Grid item xs={12}>
          <h1>{jsonData.header4}</h1>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">
              {jsonData.header4a}
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              onChange={e => setName(e.target.value)}
              value={name}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
          <TextField
            className={classes.margin}
            id="input-with-icon-textfield"
            onChange={e => setEmail(e.target.value)}
            label={jsonData.header4b}
            value={email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
        <br/>
          <TextField
            id="outlined-multiline-static"
            label={jsonData.header4c}
            multiline
            rows="4"
            variant="outlined"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />
        </Grid>
        
        <Grid item xs={12}>
        <br/>
          <Button
            variant="outlined"
            component="span"
            value="Submit"
            onClick={handleSubmit}
          >
            {jsonData.header4e}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
