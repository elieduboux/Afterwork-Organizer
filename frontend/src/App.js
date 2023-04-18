import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ActivityList from './ActivityList';
import ActivityEdit from './ActivityEdit';
import ActivitySubscribe from './ActivitySubscribe';
import RegistrationLogin from './RegistrationLogin';
import RegistrationLogout from './RegistrationLogout';
import RegistrationSignUp from './RegistrationSignUp';

class App extends Component {
  render() {
    return (
        <Router>
        <Switch>
        <Route path="/" exact={true}><Home/></Route>
        <Route path="/activities" exact={true}><ActivityList /></Route>
        <Route path="/activities/:id"><ActivityEdit /></Route>
        <Route path="/subscribe/:id"><ActivitySubscribe /></Route>
        <Route path="/subscribe"><ActivitySubscribe /></Route>
        <Route path="/login" ><RegistrationLogin /></Route>
        <Route path="/logout" ><RegistrationLogout /></Route>
        <Route path="/signup" ><RegistrationSignUp /></Route>
        </Switch>
        </Router>
    )
  }
}

export default App;