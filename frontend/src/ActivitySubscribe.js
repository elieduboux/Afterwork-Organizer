import React, { Component, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Tooltip } from "@mui/material";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Unsubscribe  from '@mui/icons-material/Unsubscribe';
import { IconButton, Button, Box, Stack } from "@mui/material";
import Preferences from './Preferences';
import DrawerAfterworkOrganizer from './DrawerAfterworkOrganizer';

class ActivitySubscribe extends Component {

   
    emptyItem = {
        name: '',
        surname: '',
        preferences: '',
        collaborator: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem,
            shouldShowSubscribe: false
        };
        this.showSubscribe = this.showSubscribe.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showSubscribe() {
        this.setState({ shouldShowSubscribe: true });
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const activity = await (await fetch(`/activities/${this.props.match.params.id}/subscribe`)).json();
            this.setState({item: activity});
        }
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
    
        await fetch('/activities' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/activities');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Subscribe to an Activity' : 'Subscribe to an activity'}</h2>;

        return <div>
            <AppNavbar/>
            <DrawerAfterworkOrganizer />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" placeholder="Please enter your name" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="surname">Surname</Label>
                        <Input type="text" name="surname" placeholder="Please enter your surname" id="surname" value={item.surname || ''}
                               onChange={this.handleChange} autoComplete="surname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Preferences</Label><Preferences />
                    </FormGroup>
                    <FormGroup>
                        <Label for="collaborator">Collaborator</Label>
                        <Input type="text" name="collaborator" placeholder="Please enter collaborator username" id="collaborator" value={item.collaborator || ''}
                               onChange={this.handleChange} autoComplete="collaborator"/>
                    </FormGroup>
                
                    <FormGroup>                      
                        <Stack direction="row" spacing={2}>
                            <Tooltip title="Subscribe">
                            <IconButton type="submit" variant="underlined" color="info">
                                <SubscriptionsIcon /></IconButton></Tooltip>
                            <Tooltip title="Cancel Subscription">
                                <IconButton variant="contained" size="sm" color="error" tag={Link} to={"/activities"}>
                                    <Unsubscribe /></IconButton>
                            </Tooltip> 
                        </Stack>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(ActivitySubscribe);