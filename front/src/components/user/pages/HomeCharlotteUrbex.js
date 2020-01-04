// Modules
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { loadCSS } from 'fg-loadcss'

// Personals Components
import { GithubReadMe } from './'
import backgroundImage from '../../../assets/images/charlotte-urbex.jpg'

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Icon,
  IconButton,
} from '@material-ui/core/'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ShareIcon from '@material-ui/icons/Share'
import StarIcon from '@material-ui/icons/Star'

// Styling with JSS
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: 345,
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
      .get('https://api.github.com/repos/louiscasciodev/CharlotteUrbex')
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
    <Grid container className={classes.container} spacing={4}>
      <Grid item xs={false} md={8} lg={8}>
        <Card className={classes.cardMedia}>
          <CardMedia
            className={classes.media}
            image={backgroundImage}
            title="Portfolio de Charlotte Urbex"
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
                      <Avatar aria-label="recipe" className={classes.avatar}>JS</Avatar>
                  // <Avatar aria-label="recipe" src={data.owner.avatar_url} className={classes.avatar} />
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