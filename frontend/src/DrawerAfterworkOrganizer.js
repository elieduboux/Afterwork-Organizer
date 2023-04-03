import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Edit from '@mui/icons-material/Edit';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import './App.css';
import Divider  from '@mui/material/Divider';
import AppNavbar from './AppNavbar';

export const drawerWidth = 240;
export default function DrawerAfterworkOrganizer() {
  const [ open, setOpen ] = React.useState(false);

  return (
    <>
    <Box >
    <Button onClick={() => setOpen(true)}>Menu</Button>
    <Drawer 
        variant="permanent"
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
        sx={{
          flexShrink: 0,
          backgroundColor: 'rgb(2, 7, 80)',
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { position: "absolute", backgroundColor: 'rgb(2, 7, 80)', width: drawerWidth, boxSizing: 'border-box' },
        }}
    >
      <AppNavbar/>
      <Divider />
     <List>
     <ListItem>
       <ListItemText>          
         <ListItemButton tag={Link} to="/login" style={{color: 'white'}}>
          <Login style={{color: 'white'}}/>Login</ListItemButton>
       </ListItemText>
     </ListItem>
     <ListItem>
       <ListItemText>          
         <ListItemButton tag={Link} to="/logout" style={{color: 'white'}}>
         <Logout style={{color: 'white'}}/>Logout</ListItemButton>
       </ListItemText>
     </ListItem>
     <ListItem>
       <ListItemText>       
      <ListItemButton tag={Link} to="/activities/new" style={{color: 'white'}}>
        <Edit style={{color: 'white'}}/>Add New Activity</ListItemButton>
       </ListItemText>
     </ListItem>
     <ListItem>
       <ListItemText>
         <ListItemButton tag={Link} to="/subscribe" style={{color: 'white'}}>
          <Subscriptions style={{color: 'white'}}/>Subscribe to Activity</ListItemButton>
       </ListItemText>
     </ListItem>
     </List>
    </Drawer>
      </Box>
      
      </>
  );
}