import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import AppNavbar from './AppNavbar';
import JsonDataDisplay from './DataDisplayJson';
import glasses from './glasses_50.png';
import beer from './beer.png';
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
    const {isLoading} = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    }
    return (
      <>
      <div>
        <AppNavbar />
        <DrawerAfterworkOrganizer />
        <div class="row">
          <div class="column">
            <div className='img-container'>
              <div className="glasses">
                <img src={glasses} alt="Glasses" width="200" height="200"/>
              </div>
            </div>
          </div>
          <div class="column">
            
          </div>
          <div class="column">
            <div className='img-container' >
              <div className='beer'>
                <img src={beer} alt="Beer" width="200" height="200"/>
              </div>
            </div>
          </div>
        </div>
        <JsonDataDisplay />
      </div></>
    )
    }
}
export default withRouter(ActivityList);