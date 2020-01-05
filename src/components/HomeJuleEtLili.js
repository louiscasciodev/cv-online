// Modules
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { loadCSS } from 'fg-loadcss'

// Personals Components
import { GithubReadMe } from './'
import backgroundImage from '../assets/images/jule-et-lili.jpg'

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Icon,
  IconButton,
} from '@material-ui/core/'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ShareIcon from '@material-ui/icons/Share'
import StarIcon from '@material-ui/icons/Star'

// Styling with JSS
const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  containerGlobal: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  card: {
    [theme.breakpoints.down('sm')]: {
      width: 260,
      margin: 10,
    },
    [theme.breakpoints.up('md')]: {
      width: 300,
      margin: 20,
    },
    [theme.breakpoints.up('lg')]: {
      width: 350,
      margin: 20,
    },
  },
  cardHeader: {
    // backgroundColor: '#DFE0E0',
  },
  cardMedia: {
    boxShadow: theme.shadows[5],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    backgroundPosition: 'top left',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    filter: 'grayscale(100%)',
  },
}))

export default () => {
  const classes = useStyles()
  const [data, setData] = useState([])

  const getRepos = () => {
    axios
      .get('https://api.github.com/repos/louiscasciodev/jule-et-lili-clone')
      .then(result => setData(result.data))
  }

  // Convert UTC numeric date to String
  const getDate = (date) => {
    let dateobj = new Date(`${date}`)
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
    let result = dateobj.toLocaleDateString('fr-CA', options)
    return result
  }

  useEffect(() => {
    getRepos()
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    )
  }, []);

  return (
    <Grid container className={classes.containerGlobal} spacing={4}>
      <Grid item md={8} lg={8}>
        <Box className={classes.box}>
          <Typography variant='h6'>
            Projet 3: Jule et Lili
          </Typography>
        </Box>
        <Card className={classes.cardMedia}>
          <CardMedia
            className={classes.media}
            image={backgroundImage}
            title="E-shop Jule et Lili"
          />
        </Card>
      </Grid>
      <Grid item className={classes.container} xs={12} md={4} lg={4}>
        {data &&
          < div key={data.id}>
            <Card className={classes.card}>
              <CardHeader
                className={classes.cardHeader}
                avatar={
                  data.description === "react" ?
                    <Icon className="fab fa-react fa-spin" style={{ color: "rgb(97, 218, 251)" }} /> :
                    data.description === "vue" ?
                      <Icon className="fab fa-vuejs" style={{ color: "rgb(65, 184, 131)" }} /> :
                      <Icon className="fab fa-js-square" style={{ color: "rgba(0, 0, 0, 0.54)" }} />
                  // <Avatar aria-label="recipe" className={classes.avatar}>JS</Avatar>
                  // <Avatar aria-label="recipe" src={item.owner.avatar_url} className={classes.avatar} />
                }
                action={
                  <IconButton aria-label="settings" target="_blank" href={data.html_url} title="view more">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={data.name}
                subheader={`Mis à jour le ${getDate(data.updated_at)}`}
              />
              <Divider />
              {/* ReadMe Component*/}
              {console.log(data.name)}
              <GithubReadMe repo={data.name} />
              {/* ReadMe Component*/}
              <CardActions disableSpacing>
                <IconButton target="_blank" href={data.html_url} title="star">
                  <StarIcon />
                </IconButton>
                <IconButton target="_blank" href={data.html_url} title="fork">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>
          </div>
        }
      </Grid>
    </Grid>
  )
}