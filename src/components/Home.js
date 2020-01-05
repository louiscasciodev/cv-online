// Modules
import React from 'react'
import clsx from 'clsx'
import {
  Switch,
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom"

// Personals Components
import { Copyright, HomeCharlotteUrbex, HomeCv, HomeJuleEtLili, HomePlantMe, Github, ListItems } from './'

// Personal CSS
import "../assets/css/home.css"

// MUI Components
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
  Tab,
  Tabs,
} from '@material-ui/core/'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import AttachmentIcon from '@material-ui/icons/Attachment'
import Filter1Icon from '@material-ui/icons/Filter1'
import Filter2Icon from '@material-ui/icons/Filter2'
import Filter3Icon from '@material-ui/icons/Filter3'
import ListIcon from '@material-ui/icons/List'

// Styling with JSS
const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  root2: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    display: 'block',
    margin: 'auto',
    position: 'absolute',
    bottom: 0,
    flexGrow: 1,
    maxWidth: 500,
    backgroundColor: '#DFE0E0',
  },
  tabs: {
    width: '100%',
    display:'flex',
    justifyContent: 'center',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    backgroundColor: '#3B4358',
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    backgroundColor: '#DFE0E0',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  avatar: {
    marginRight: '10px',
    boxShadow: theme.shadows[1],
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

export default () => {
  const path = useRouteMatch()
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      {window.screen.width > 600 ? (
        <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <ChevronRightIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              CV en ligne
          </Typography>
          </Toolbar>
        </AppBar>) : (
          <AppBar position="absolute" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton)}
              >
                <ChevronRightIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                CV en ligne
                  </Typography>
            </Toolbar>
          </AppBar>
        )}
      {window.screen.width > 600 ?
        (
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <Avatar aria-label="recipe" src="https://avatars1.githubusercontent.com/u/55145958?v=4" className={classes.avatar} />
              <Typography variant="subtitle2" color="inherit">
                Louis Cascio
            </Typography>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItems />
            </List>
          </Drawer>
        )
        :
        (
          <Box square className={classes.root2}>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabs}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="inherit"
              aria-label="icon tabs example"
            >
              <Tab icon={<Link to={`${path.path}/all`}><ListIcon /></Link>} aria-label="all" />
              <Tab icon={<Link to={`${path.path}/3`}><Filter3Icon /></Link>} aria-label="3" />
              <Tab icon={<Link to={`${path.path}/2`}><Filter2Icon /></Link>} aria-label="2" />
              <Tab icon={<Link to={`${path.path}/1`}><Filter1Icon /></Link>} aria-label="1" />
              <Tab icon={<Link to={`${path.path}/cv`}><AttachmentIcon /></Link>} aria-label="cv" />
            </Tabs>
          </Box>
        )
      }
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Switch>
            <Route exact path={`${path.path}/`} component={Github} />
            <Route path={`${path.path}/all`} component={Github} />
            <Route path={`${path.path}/3`} component={HomeJuleEtLili} />
            <Route path={`${path.path}/2`} component={HomePlantMe} />
            <Route path={`${path.path}/1`} component={HomeCharlotteUrbex} />
            <Route path={`${path.path}/cv`} >
              <HomeCv />
            </Route>
          </Switch>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div >
  )
}