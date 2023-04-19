import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Tooltip, IconButton } from '@mui/material';

import AppNavbar from './AppNavbar';
import DrawerAfterworkOrganizer from './DrawerAfterworkOrganizer';


class RegistrationLogin extends Component {

    emptyItem = {
        username: '',
        password: ''
    };

    constructor(props) {
      super(props);
      this.state = {
        item: this.emptyItem
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('/login')
            .then(response => response.json())
            .then(data => this.setState({activities: data}));
    }

    
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('/j_spring_security_check', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/login');
    }
    
    render(){
        const {item} = this.state;
        const title = <h2>{RegistrationLogin}</h2>;

        return <div>
            <AppNavbar/>
            <DrawerAfterworkOrganizer />
            <Container>
                {title}
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="text" name="username" id="username" value={item.username || ''}
                               onChange={this.handleChange} autoComplete="username"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" value={item.password || ''}
                               onChange={this.handleChange} autoComplete="password"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit" value='login'>Log in</Button>{' '}
                        <Button color="secondary" tag={Link} to={'/activities'}>Cancel</Button>
                    </FormGroup>
                </form>
                <Tooltip title="Click here to create a collaborator">
                <a href="/signup">No account ? Create one here</a>
                    {/* <IconButton type="cancel" variant="outlined" size="sm" color="error" tag={Link} to={'/signup'}> Create an account</IconButton> */}
                </Tooltip> 
            </Container>
        </div>
    }
}
export default withRouter(RegistrationLogin);