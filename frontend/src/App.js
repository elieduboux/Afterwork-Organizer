import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActivityList from './ActivityList';
import ActivityEdit from './ActivityEdit';
import ActivitySubscribe from './ActivitySubscribe';

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/activities' exact={true} component={ActivityList}/>
            <Route path='/activities/:id' component={ActivityEdit}/>
            <Route path='/activities/:id/subscribe' component={ActivitySubscribe} />
          </Switch>
        </Router>
    )
  }
}

export default App;
