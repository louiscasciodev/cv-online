import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
// import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import {
  Grid,
  Paper,
} from '@material-ui/core/';
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import StarIcon from '@material-ui/icons/Star';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },
  card: {
    width: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
    // filter: "grayscale(100%)",
  },
}));

export default () => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [dataReadMe, setDataReadMe] = useState([]);

  const getRepos = () => {
    axios
      .get('https://api.github.com/users/louiscasciodev/repos?sort=created')
      .then(result => setData(result.data));
  }

  const getReadMe = (repo) => {
    axios
      .get(`https://api.github.com/repos/louiscasciodev/${repo}/readme`)
      .then(result => setDataReadMe(result.data));
  }

  const getDate = (date) => {
    let dateobj = new Date(`${date}`);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let b = dateobj.toLocaleDateString('fr-CA', options)
    return b
  }

  const getContent = (content) => {
    const result = atob(content)
    return result
  }


  useEffect(() => {
    getRepos()
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);


  // const [repos, setRepos] = useState();

  // const getRepos = () => {
  //   axios.get('https://api.github.com/users/louiscasciodev/repos')
  //     .then((response) => {
  //       setRepos(response.data)
  //       console.log("test repos", repos)
  //       // console.log(response.data);
  //       // console.log(response.status);
  //       // console.log(response.statusText);
  //       // console.log(response.headers);
  //       // console.log(response.config);
  //     });
  // }

  // useEffect(() => {
  //   getRepos()
  // });

  return (
    <>
      {/* {console.log(data)}
      {data && data
      .map((item, key) => (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Mis à jour le {getDate(item.updated_at)}
            </Typography>
            <Typography variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly.
            <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Voir sur Github</Button>
          </CardActions>
        </Card> */}
      <Grid container className={classes.container}>
        {console.log("dateRepo", data)}
        {data && data
          .map((item, key) => (
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  item.description == "react" ?
                    <Icon className="fab fa-react fa-spin" style={{ color: "rgb(97, 218, 251)" }} /> :
                    item.description == "vue" ?
                      <Icon className="fab fa-vuejs" style={{ color: "rgb(65, 184, 131)" }} /> :
                      <Avatar aria-label="recipe" src={item.owner.avatar_url} className={classes.avatar} />
                }
                action={
                  <IconButton aria-label="settings" target="_blank" href={item.html_url} title="view more">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader={`Mis à jour: ${getDate(item.updated_at)}`}
              />
              {/* <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            /> */}
              <CardContent>
                {/* {item.description} */}
                {getReadMe(item.name)}
                    <Typography variant="body2" color="textSecondary" component="p">
                      {dataReadMe.name}
                    </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton href={item.html_url} title="star">
                  <StarIcon />
                </IconButton>
                {/* <Typography>
                {item.stargazers_count}
              </Typography> */}
                <IconButton href={item.html_url} title="fork">
                  <ShareIcon />
                </IconButton>
                {/* <Typography>
                {item.forks_count}
              </Typography> */}
              </CardActions>
            </Card>
          ))}
      </Grid>
    </>
  );
}
