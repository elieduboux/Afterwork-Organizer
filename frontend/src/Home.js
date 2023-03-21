import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import logo from './logo.png';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <img src={logo} alt="Logo"/>
                <Container fluid>
                    <Button color="link"><Link to="/activities">Activities</Link></Button>
                    
                </Container>
            </div>
        );
    }
}
export default Home;