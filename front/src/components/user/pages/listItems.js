import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
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
    <ListSubheader inset>Refacto</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <WbSunnyIcon />
      </ListItemIcon>
      <ListItemText primary="Météo" />
    </ListItem>
  </div>
);