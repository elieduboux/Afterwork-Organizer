import React, { useState } from 'react';
import { Container} from "reactstrap";
import { Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { IconButton, Button, Box, Stack } from "@mui/material";
import {Table, TableBody, TableHead, TableRow} from "@mui/material";
import JsonData from './activities.json';
import Modal from './Modal';
import './Activity.css';

function JsonDataDisplay(){

  const [openModal, setOpenModal] = useState(false);

 



  let ActivityList = JsonData.map(activity => {
    return <tr key={activity.id}>
      <td style={{whitespace: 'nowrap'}}>{activity.name}</td>
      <td>{activity.type}</td>
      <td>{activity.organisator}</td>
      <td>{activity.collaborator}</td>
      <td>
        <Box>
          <Stack spacing={2} direction="row">
            <Tooltip title="Edit Activity">
            <IconButton variant="contained" size="sm" color="success" underline="hover" onClick={ () => window.open(`/activities/${activity.id}`) }>
              <EditIcon /></IconButton>
            </Tooltip>
            
            <Tooltip title="Delete Activity">
              <IconButton size="sm" variant="outlined" color="error" underline="hover" onClick={
                () => JsonData.splice(activity.id, 1)}>
                <DeleteIcon /></IconButton> 
            </Tooltip>
             <Tooltip title="Subscribe to Activity">
             <IconButton variant="contained" size="small" color="info" underline="hover" onClick={ () => window.open(`/subscribe/${activity.id}`) }>
              <SubscriptionsIcon /></IconButton>
             </Tooltip>
            
          </Stack>
        </Box>
      </td>
    </tr>
  });
 
  return (
    <div>
      <Container fluid>
        <div className="float-right">
          <Button color="success" variant="outlined" onClick={ () => window.open("/activities/new") }>Add Activity<AddIcon /></Button>
        </div>
        <h3>Activities</h3>
        <Table className="mt-4">
          <TableHead>
            <TableRow hover>
              <th width="10%">Name</th>
              <th width="10%">Type</th>
              <th width="10%">Organisator</th>
              <th width="10%">Collaborator</th>
            </TableRow>
          </TableHead>
          <TableBody className="trbody">{ActivityList}</TableBody>
        </Table>
        <Button className="openModal"
          onClick={() => {
            setOpenModal(true)
          }}
        >Open</Button>
        {openModal && <Modal closeModal={setOpenModal}/>}
      </Container>
    </div>
  );
 }
 
 export default JsonDataDisplay;