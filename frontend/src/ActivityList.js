import React, {Component} from 'react';
import { Container} from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link, withRouter } from "react-router-dom";
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from 'react-transition-group';
import { Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { IconButton, Button, Box, Stack } from "@mui/material";
import { green, blue, red} from "@mui/material/colors";
import ActivityEdit from "./ActivityEdit";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

class ActivityList extends Component {
  constructor(props) {
    super(props);
    this.state = {activities: []};
    this.remove = this.remove.bind(this);
  }
  componentDidMount() {
    fetch('/activities')
        .then(response => response.json())
        .then(data => this.setState({activities: data}));
    }
  async remove(id) {
    await fetch(`/activities/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedActivities = [...this.state.activities]
        .filter(i => i.id !== id);
      this.setState({activities: updatedActivities});
    });
  }
  render() {
    const styles = theme => ({
      tableCell: {
        '&:hover': {
          backgroundColor: "blue !important"
        }
      }
    });

    const {activities, isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    }
    const ActivityList = activities.map(activity => {
      return <tr key={activity.id}>
        <td style={{whitespace: 'nowrap'}}>{activity.name}</td>
        <td>{activity.type}</td>
        <td>{activity.organisator}</td>
        <td>{activity.collaborator}</td>
        <td>
          <Box>
            <Stack spacing={2} direction="row">
              <Tooltip title="Edit Activity">
              <IconButton variant="contained" size="sm" color="success" tag={Link} underline="hover" to={"/activities/" + activity.id}>
                <EditIcon /></IconButton>
              </Tooltip>
              
              <Tooltip title="Delete Activity">
                <IconButton size="sm" variant="outlined" color="error" underline="hover" onClick={() => this.remove(activity.id)}>
                  <DeleteIcon /></IconButton> 
              </Tooltip>
               <Tooltip title="Subscribe to Activity">
               <IconButton variant="contained" size="small" color="info" tag={Link} underline="hover" to="/activities-subscribe/:id">
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
                  <Button color="success" variant="outlined" tag={Link} to="/activities/new">Add Activity<AddIcon /></Button>
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
}
export default withRouter(ActivityList);
