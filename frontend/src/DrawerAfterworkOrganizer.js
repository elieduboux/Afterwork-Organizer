import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Edit from '@mui/icons-material/Edit';
import Subscriptions from '@mui/icons-material/Subscriptions';
import Login from '@mui/icons-material/Login';
import Logout from '@mui/icons-material/Logout';
import { CssBaseline, MenuItem, Toolbar } from '@mui/material';
import ActivityList from './ActivityList';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import './App.css';

export default function DrawerAfterworkOrganizer() {
  const [ open, setOpen ] = React.useState(false);

  return (
    <>
    <Box >
    <Button onClick={() => setOpen(true)}>Menu</Button>
    <Drawer 
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
        sx={{
          flexShrink: 0,
          backgroundColor: 'rgb(80, 2, 80)',
          width: 250,
          [`& .MuiDrawer-paper`]: { backgroundColor: 'rgb(80, 2, 80)', width: 250, boxSizing: 'border-box' },
        }}
    >
     <List>
     <ListItem>
       <ListItemText>          
         <ListItemButton><Login style={{color: 'white'}}/><Link to={"/login"} underline='hover'>Login</Link></ListItemButton>
       </ListItemText>
     </ListItem>
     <ListItem>
       <ListItemText>          
         <ListItemButton><Logout style={{color: 'white'}}/><Link to={"/logout"} underline='hover'>Logout</Link></ListItemButton>
       </ListItemText>
     </ListItem>
     <ListItem>
       <ListItemText>
         <ListItemButton><Edit style={{color: 'white'}}/><Link to={'/activities/new'} underline='hover'>Add New Activity</Link></ListItemButton>
       </ListItemText>
     </ListItem>
     <ListItem>
       <ListItemText>
         <ListItemButton><Subscriptions style={{color: 'white'}}/><Link to={'/subscribe/'} underline='hover'>Subscribe to Activity</Link></ListItemButton>
       </ListItemText>
     </ListItem>
     </List>
    </Drawer>
      </Box>
      </>
  );
}