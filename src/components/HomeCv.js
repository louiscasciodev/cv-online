// Modules
import React from 'react'

// Personals Components
import Cv from '../assets/images/cv-louis-cascio-javascript.pdf'

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Button,
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
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#5E6780',
    '&:hover': {
      backgroundColor: '#717EA3',
    }
  }
}))

export default () => {
  const classes = useStyles()

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={8} lg={9}>
        <Button
          fullWidth
          className={classes.submit}
          variant="contained"
          color="primary"
          href={Cv}
          download="cv-louis-cascio-javascript"
        >
          Télécharger le pdf
        </Button>
        {window.screen.width > 600 ?
          (<object aria-label="pdf" data={Cv} type='application/pdf' className={classes.media}></object>)
          :
          (null)
        }
      </Grid>
    </Grid>
  );
}
