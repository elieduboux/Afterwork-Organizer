import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Edit from '@mui/icons-material/Edit';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Menu from '@mui/icons-material/Menu';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import './App.css';
import Divider  from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AppNavbar from './AppNavbar';
import Grid from '@mui/material/Grid';

export const drawerWidth = 240;

export default function DrawerAfterworkOrganizer({ variant, ...props })  {
  const [ open, setOpen ] = React.useState(false);

  return (
    <>
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item>
        <Drawer
          variant='variant'
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            flexShrink: 0,
            backgroundColor: 'rgb(2, 7, 80)',
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: { backgroundColor: 'rgb(2, 7, 80)', width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <AppNavbar />
          <Divider />
          <List>
          <ListItem onClick={() => setOpen(false)}>
            <ListItemText>          
              <ListItemButton tag={Link} to="/login" style={{color: 'white'}}>
              <Login style={{color: 'white'}}/>Login</ListItemButton>
            </ListItemText>
          </ListItem>
          <ListItem>
           <ListItemText onClick={() => setOpen(false)}>          
             <ListItemButton tag={Link} to="/logout" style={{color: 'white'}}>
             <Logout style={{color: 'white'}}/>Logout</ListItemButton>
           </ListItemText>
         </ListItem>
         <ListItem>
           <ListItemText onClick={() => setOpen(false)}>       
          <ListItemButton tag={Link} to="/activities/new" style={{color: 'white'}}>
            <Edit style={{color: 'white'}}/>Add New Activity</ListItemButton>
           </ListItemText>
         </ListItem>
         <ListItem>
           <ListItemText onClick={() => setOpen(false)}>
             <ListItemButton tag={Link} to="/subscribe" style={{color: 'white'}}>
              <Subscriptions style={{color: 'white'}}/>Subscribe to Activity</ListItemButton>
           </ListItemText>
         </ListItem>
          </List>
        </Drawer>
      </Grid>

      <Grid item>
      <IconButton variant="contained" onClick={() => setOpen(!open)}><Menu />
          {open ? "Hide" : "Show"} Drawer
          </IconButton>
      </Grid>
    </Grid>

      </>
  );
}