import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import PhotoIcon from '@material-ui/icons/Photo';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

export const mainListItems = (
  <div>
    <ListSubheader inset>Projets</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Jule et Lily Store" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalFloristIcon />
      </ListItemIcon>
      <ListItemText primary="Plant Me" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PhotoIcon />
      </ListItemIcon>
      <ListItemText primary="Charlotte Urbex" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Téléchargements</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <FindInPageIcon />
      </ListItemIcon>
      <ListItemText primary="Curriculum vitæ" />
    </ListItem>
  </div>
);