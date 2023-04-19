import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Stack, Tooltip, IconButton } from '@mui/material';
import Add from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import DrawerAfterworkOrganizer from './DrawerAfterworkOrganizer';

class ActivityEdit extends Component {

    emptyItem = {
        name: '',
        type: '',
        organisator: '',
        collaborator: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const activity = await (await fetch(`/activities/${this.props.match.params.id}`)).json();
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
        const title = <h2>{item.id ? 'Add Activity' : 'Edit Activity'}</h2>;
    
        return <div>
            <AppNavbar/>
            <DrawerAfterworkOrganizer />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" placeholder="Please enter the activity name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Type</Label>
                        <Input type="text" name="type" placeholder="Please enter the activity type" id="type" value={item.type || ''}
                               onChange={this.handleChange} autoComplete="type"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="organisator">Organisator</Label>
                        <Input type="text" name="organisator" placeholder="Please enter the activity organisator" id="organisator" value={item.organisator || ''}
                               onChange={this.handleChange} autoComplete="organisator"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="collaborator">Collaborator</Label>
                        <Input type="text" name="collaborator" placeholder="Please enter the collaborator" id="collaborator" value={item.collaborator || ''}
                               onChange={this.handleChange} autoComplete="collaborator"/>
                    </FormGroup>
                    <FormGroup>
                    <Stack direction="row" spacing={2}>
                            <Tooltip title="Add/Edit Activity">
                            <IconButton type="submit" variant="outlined" color="info"><Add /></IconButton></Tooltip>
                            <Tooltip title="Cancel">
                                <IconButton type="cancel" variant="outlined" size="sm" color="error" tag={Link} to={'/activities'}> <CancelIcon /></IconButton>
                            </Tooltip> 
                        </Stack>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(ActivityEdit);