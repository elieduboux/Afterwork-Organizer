import React from 'react';
import { Container} from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link} from "react-router-dom";
import { Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { IconButton, Button, Box, Stack } from "@mui/material";
import {Table, TableBody, TableHead, TableRow} from "@mui/material";
import JsonData from './activities.json';

function JsonDataDisplay(){
    const ActivityList = JsonData.map(activity => {
        return <tr key={activity.id}>
          <td style={{whitespace: 'nowrap'}}>{activity.name}</td>
          <td>{activity.type}</td>
          <td>{activity.organisator}</td>
          <td>{activity.collaborator}</td>
          <td>
            <Box>
              <Stack spacing={2} direction="row">
                <Tooltip title="Edit Activity">
                <IconButton variant="contained" size="sm" color="success" underline="hover" onClick={ window.open("/activities/" + activity.id)}>
                  <EditIcon /></IconButton>
                </Tooltip>
                
                <Tooltip title="Delete Activity">
                  <IconButton size="sm" variant="outlined" color="error" underline="hover" onClick={() => this.remove(activity.id)}>
                    <DeleteIcon /></IconButton> 
                </Tooltip>
                 <Tooltip title="Subscribe to Activity">
                 <IconButton variant="contained" size="small" color="info" underline="hover" onClick={ window.open("/activities-subscribe/" + activity.id) }>
                  <SubscriptionsIcon /></IconButton>
                 </Tooltip>
                
              </Stack>
            </Box>
          </td>
        </tr>
      });
 
      return (
        <div>
        <AppNavbar />
            <Container fluid>
                <div className="float-right">
                    <Button color="success" variant="outlined" onClick={ () => window.open("/activities/new") }>Add Activity<AddIcon /></Button>
                </div>
            <h3>Activities</h3>
            <Table className="mt-4">
                <TableHead>
                    <TableRow hover>
                        <th width="30%">Name</th>
                        <th width="30%">Type</th>
                        <th width="40%">Organisator</th>
                        <th width="40%">Collaborator</th>
                    </TableRow>
                </TableHead>
                <TableBody>{ActivityList}</TableBody>
            </Table>
            </Container>
        </div>
      );
 }
 
 export default JsonDataDisplay;