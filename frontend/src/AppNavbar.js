import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo_50 from './logo_appnavbar.png';
import Home from '@mui/icons-material/Home';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/"><Home />Home</NavbarBrand>
            
        </Navbar>
        )
    }
}