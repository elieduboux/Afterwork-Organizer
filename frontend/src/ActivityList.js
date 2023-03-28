import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import AppNavbar from './AppNavbar';
import JsonDataDisplay from './DataDisplayJson';
import glasses from './glasses_50.png';
import beer from './beer.png';
import { Button, Container } from 'reactstrap';
import logo from './logo_50.png';
import DrawerAfterworkOrganizer from './DrawerAfterworkOrganizer';
import './Activity.css';

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
    /* 
    const styles = theme => ({
      tableCell: {
        '&:hover': {
          backgroundColor: "blue !important"
        }
      }
    });
  */
    const {isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <>
      <div>
        <AppNavbar position="fixed" />
        <DrawerAfterworkOrganizer />
        <div className='img-container'>
          <img src={glasses} alt="Glasses" />
          <br />
        </div>

        <JsonDataDisplay />
        <div className='img-container'>
          <img src={beer} alt="Beer" />
        </div>
      </div>
      </>
    )
    }
}
export default withRouter(ActivityList);