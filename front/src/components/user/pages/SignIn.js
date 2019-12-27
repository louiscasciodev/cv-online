import React, { useState, useEffect } from 'react'
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
import {
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import { makeStyles } from '@material-ui/core/styles'
import { Copyright } from '../common'
import backgroundVideo from '../../../assets/videos/video.mp4'
import backgroundImage from '../../../assets/images/CV-Louis-Cascio-JavaScript.png'
import "../../../assets/css/sign-in.css"

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
}));

export default () => {
  const classes = useStyles();

  const [blurred, setBlurred] = useState(true);

  let location = useLocation();
  let history = useHistory();
  let match = useRouteMatch();
  console.log("location", location);
  console.log("history", history);
  console.log("match", match);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlurred(!blurred);
    if (blurred === false) {
      setTimeout(function () {
        const element = document.getElementsByClassName("image slide-out-blurred-right")
        element[0].classList.add("display-none")
      }, 410);
    }
    setTimeout(function () {
      history.push("/home")
    }, 410);
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setBlurred(!blurred)
  // }

  // useEffect(() => {
  //   if (blurred === false) {
  //     setTimeout(function () {
  //       const element = document.getElementsByClassName("image slide-out-blurred-right")
  //       element[0].classList.add("display-none")
  //     }, 410);
  //   }
  // });

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
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
        </Grid>
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              {blurred ? <LockOutlinedIcon /> : <LockOpenOutlinedIcon />}
            </Avatar>
            <Typography component="h1" variant="h5">
              Unlock Profile
          </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.field}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Enter
            </Button>
              <Box mt={5}>
                <Copyright />
              </Box>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}