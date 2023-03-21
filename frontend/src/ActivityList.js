import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import JsonDataDisplay from './DataDisplayJson';

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
    /*const styles = theme => ({
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
      <JsonDataDisplay/>
    )
    }
}
export default withRouter(ActivityList);