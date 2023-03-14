import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { CSSTransition }from "react-transition-group"; 
import AppNavbar from './AppNavbar';
import { Tooltip } from "@mui/material";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Select";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Unsubscribe  from '@mui/icons-material/Unsubscribe';
import { IconButton, Button, Box, Stack } from "@mui/material";
import { green, blue, red} from "@mui/material/colors";

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
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="organisator">Surname</Label>
                        <Input type="text" name="surname" id="organisator" value={item.organisator || ''}
                               onChange={this.handleChange} autoComplete="surname"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="type">Preferences</Label>
                        <Select 
                            defaultValue="Video Game Competition" placeholder="Please enter preferences or select suggested preferences"
                            sw={{
                                width: 200,
                                height: 50,
                            }}
                        >
                        <Option value="escape game">Escape Game</Option>
                        <Option value="video game competition">Video Game Competition</Option>
                        <Option value="bar">Bar</Option>
                        <Option value="watching football">Watching Football on TV</Option>
                        <Option value="pizzeria">Pizzeria</Option>
                        <Option value="sports">Sports</Option>
                        <Option value="other">Other</Option>
                        </Select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="collaborator">Collaborator</Label>
                        <Input type="text" name="collaborator" id="collaborator" value={item.collaborator || ''}
                               onChange={this.handleChange} autoComplete="collaborator"/>
                    </FormGroup>
                    <FormGroup>
                        
                        <Stack direction="row" spacing={2}>
                            <IconButton type="submit" variant="underlined" color="info"><SubscriptionsIcon /></IconButton>
                            <Tooltip title="Cancel Subscription">
                                <IconButton variant="contained" size="sm" color="error" tag={Link} underlined="hover" to="/activities">
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