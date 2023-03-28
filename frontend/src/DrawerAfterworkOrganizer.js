import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Edit from '@mui/icons-material/Edit';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Login from '@mui/icons-material/Login';
import { CssBaseline, MenuItem, Toolbar } from '@mui/material';
import ActivityList from './ActivityList';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

export default function DrawerAfterworkOrganizer() {
  const [ open, setOpen ] = React.useState(false);


  return (
    <Box >
    <Drawer 
      open={open}
      variant="permanent"
      anchor="left"
      sx={{
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        boxSizing: 'border-box',
      }
     }}/>
     <Divider />
     <List>
      <ListItem>
        <ListItemText>          
          <ListItemButton><Login /><Link to={"/login"}>Login</Link></ListItemButton>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <ListItemButton><Edit /><Link to={'/activities/new'}>Add New Activity</Link></ListItemButton>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <ListItemButton><Subscriptions /><Link to={'/subscribe/'}>Subscribe to Activity</Link></ListItemButton>
        </ListItemText>
      </ListItem>
      
      </List>
      </Box>
  );
}