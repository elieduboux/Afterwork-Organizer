import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo_appnavbar from './logo_appnavbar.png';
import Home from '@mui/icons-material/Home';
import { AppBar, Toolbar, Box } from '@mui/material';

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
                <NavbarBrand tag={Link} to="/"><Home /></NavbarBrand>
                            <Box
                                component="img"
                                sx={{
                                    height: 64,
                                }}
                                alt="Your logo."
                                src={logo_appnavbar} />
            </Navbar>
        )
    }
}