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
import ri from '../../../assets/images/1025545688-preview.mp4'


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
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        {/* <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player> */}
        {/* <video className='videoTag' autoPlay loop muted>
          <source src={ri} type='video/mp4' />
        </video> */}
        <div className={blurred ? "image" : "image slide-out-blurred-right"}>
        </div>

      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
  );
}