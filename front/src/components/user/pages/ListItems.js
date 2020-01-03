// Modules
import React from 'react'
import {
  Link,
  useRouteMatch,
} from "react-router-dom"

// MUI Components
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core/'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AttachmentIcon from '@material-ui/icons/Attachment'
import LocalFloristIcon from '@material-ui/icons/LocalFlorist'
import ListIcon from '@material-ui/icons/List'

export default () => {
  // const location = useLocation()
  // const history = useHistory()
  const path = useRouteMatch()

  return (
    <div>
      <ListSubheader inset>Projets</ListSubheader>
      <Link to={`${path.path}/allprojects`}>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="All projects" />
        </ListItem>
      </Link>
      <Link to={`${path.path}/juleetlili`}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Jule et Lily Store" />
        </ListItem>
      </Link>
      <Link to={`${path.path}/plantme`}>
        <ListItem button>
          <ListItemIcon>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Plant Me" />
        </ListItem>
      </Link>
      <Link to={`${path.path}/cv`}>
        <ListItem button>
          <ListItemIcon>
            <AttachmentIcon />
          </ListItemIcon>
          <ListItemText primary="Curriculum vitæ" />
        </ListItem>
      </Link>
    </div>
  )
}