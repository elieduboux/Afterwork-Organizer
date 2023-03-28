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

export default function DrawerAfterworkOrganizer() {
  const [ open, setOpen ] = React.useState(false);


  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
    
    <Drawer sx={{
      width: 10,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 10,
        boxSizing: 'border-box'
      }
     }}
     variant="permanent"
     anchor="left" />
     <Toolbar />
     <Divider />
     <List>
      {['Login', 'Subscribe', 'Edit'].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {[<Login />, <Subscriptions />, <Edit />][index]}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        )
      )}
     </List>
    </Box>
      
  );
}