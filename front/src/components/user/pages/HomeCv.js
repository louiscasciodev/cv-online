// Modules
import React from 'react'

// Personals Components
import Cv from '../../../assets/images/cv-louis-cascio-javascript.pdf'

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Paper,
} from '@material-ui/core/'

// Styling with JSS
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  media: {
    width: "100%",
    height: "70vh",
  },
}))


export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={8} lg={9}>
        <Paper>
          <embed src={Cv} className={classes.media} type="application/pdf"></embed>
        </Paper>
      </Grid>
    </Grid>
  );
}
