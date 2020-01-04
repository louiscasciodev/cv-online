// Modules
import React from 'react'
import {
  Link,
  useRouteMatch,
} from "react-router-dom"

// MUI Components
import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@material-ui/core/'
import AttachmentIcon from '@material-ui/icons/Attachment'
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import ListIcon from '@material-ui/icons/List'

export default () => {
  // const location = useLocation()
  // const history = useHistory()
  const path = useRouteMatch()

  return (
    <div>
      <ListSubheader inset>Projets</ListSubheader>
      <Divider variant="inset" component="li" />
      <Link to={`${path.path}/all`}>
        <ListItem button>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary="Tous" />
        </ListItem>
      </Link>
      <Link to={`${path.path}/3`}>
        <ListItem button>
          <ListItemIcon>
            <Filter3Icon />
          </ListItemIcon>
          <ListItemText primary="Projet 3" />
        </ListItem>
      </Link>
      <Link to={`${path.path}/2`}>
        <ListItem button>
          <ListItemIcon>
            <Filter2Icon />
          </ListItemIcon>
          <ListItemText primary="Projet 2" />
        </ListItem>
      </Link>
      <Link to={`${path.path}/1`}>
        <ListItem button>
          <ListItemIcon>
            <Filter1Icon />
          </ListItemIcon>
          <ListItemText primary="Projet 1" />
        </ListItem>
      </Link>
      <ListSubheader inset>Téléchargements</ListSubheader>
      <Divider variant="inset" component="li" />
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