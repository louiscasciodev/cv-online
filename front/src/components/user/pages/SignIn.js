import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Copyright } from '../common'
import backgroundVideo from '../../../assets/images/video.mp4'
import backgroundImage from '../../../assets/images/CV-Louis-Cascio-JavaScript.png'

// import { Player } from 'video-react';
// import "video-react/dist/video-react.css"

import "../../../assets/css/user/SignIn.css"

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  },
  videoTag: {
    height: '100vh',
  },
}));

export default () => {
  const classes = useStyles();

  const [blurred, setBlurred] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlurred(!blurred)
  }

  useEffect(() => {
    if (blurred === false) {
      setTimeout(function () {
        const element = document.getElementsByClassName("image slide-out-blurred-right")
        element[0].classList.add("display-none")
      }, 410);
    }
  });

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid className="left-pane" xs={false} sm={5} md={7}>
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
        <Grid item xs={12} sm={7} md={5} component={Paper} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
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