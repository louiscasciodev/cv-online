// Modules
import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

// Personals Components
import { Copyright } from './'
import backgroundVideo from '../assets/videos/video.mp4'
import backgroundImage from '../assets/images/cv-louis-cascio-javaScript.png'

// Personal CSS
import "../assets/css/sign-in.css"

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography
} from '@material-ui/core/'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'

// Styling with JSS
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    height: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#5E6780',
    '&:hover': {
      backgroundColor: '#717EA3',
    }
  },
  field: {
    '& input + fieldset': {
      borderColor: theme.palette.grey[300],
    },
    '& input:valid + fieldset': {
      borderColor: theme.palette.grey[300],
      borderWidth: 2,
    },
    '& input:invalid + fieldset': {
      borderColor: theme.palette.grey[300],
      borderWidth: 2,
    },
    '& input:valid:focus + fieldset': {
      borderColor: theme.palette.secondary.main,
      borderLeftWidth: 6,
      padding: '4px !important',
    },
    '& input:invalid:focus + fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '& input:invalid:hover + fieldset': {
      borderColor: theme.palette.secondary.main,
    },
    '& input:valid:hover + fieldset': {
      borderColor: theme.palette.secondary.main,
    },
  },
  videoTag: {
    height: '100vh',
  },
}))

export default (props) => {
  const classes = useStyles()
  const realPass = 'javascript'

  const [blurred, setBlurred] = useState(true)
  const [textFieldValue, settextFieldValue] = useState('')
  // const location = useLocation()
  // const match = useRouteMatch()
  const history = useHistory()


  const handleTextFieldChange = (e) => {
    settextFieldValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (textFieldValue === realPass) {
      props.log()
      setBlurred(!blurred)
      if (blurred === false) {
        setTimeout(function () {
          const element = document.getElementsByClassName("image slide-out-blurred-right")
          element[0].classList.add("display-none")
        }, 410)
      }
      setTimeout(function () {
        history.push("/home")
      }, 410)
    }
    else {
      history.push("/sign-in")
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      {/* DEBUT | Cacher le fond vidéo & photo pour les écrans < 600px */}
      {window.screen.width > 600 ? (
        <Grid item className="left-pane" xs={false} sm={5} md={7}>
          <Grid item className="background-video" xs={false} sm={8} md={8} >
            <video className={classes.videoTag} autoPlay loop muted>
              <source src={backgroundVideo} type='video/mp4' />
            </video>
          </Grid>
          <Grid item className="background-video" xs={false} sm={1} md={11} >
            <img className={blurred ? "image" : "image slide-out-blurred-right"}
              src={backgroundImage}
              alt="Curriculum vitæ"
            />
          </Grid>
        </Grid>) : (null)}
      {/* FIN | Cacher le fond vidéo & photo pour les écrans < 600px */}
      <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {blurred ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
          </Avatar>
          <Typography component="h1" variant="h5">
            Débloquer le profil
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              value={textFieldValue}
              onChange={handleTextFieldChange}
              className={classes.field}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrer
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}