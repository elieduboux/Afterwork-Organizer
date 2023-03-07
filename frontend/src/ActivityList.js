import React, {Component} from 'react';
import { Button, ButtonGroup, Container, Table} from "reactstrap";
import AppNavbar from "./AppNavbar";
import { Link } from "react-router-dom";

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
          <ButtonGroup>
            <Button size="sm" color="primary" tag={Link} to={"/activities/" +activity.id}>Edit</Button>
            <Button Button size="sm" color="danger" onClick={() => this.remove(activity.id)}>Delete</Button>

          </ButtonGroup>
        </td>
      </tr>
    });

    return (
        <div>
        <AppNavbar />
            <Container fluid>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/activities/new">Add Activity</Button>
                </div>
            <h3>Activities</h3>
            <Table className="mt-4">
                <thead>
                    <tr>
                        <th width="30%">Name</th>
                        <th width="30%">Type</th>
                        <th width="40%">Organisator</th>
                        <th width="40%">Collaborator</th>
                    </tr>
                </thead>
                <tbody>{ActivityList}</tbody>
            </Table>
            </Container>
        </div>
    );
    }
}
export default ActivityList;
