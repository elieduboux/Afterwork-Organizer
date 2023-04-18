import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavbar';
import DrawerAfterworkOrganizer from './DrawerAfterworkOrganizer';

class RegistrationSignUp extends Component {

    emptyItem = {
        username: '',
        password: ''
    };

    constructor(props) {
      super(props);
      this.state = {
        item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('/signup')
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
        this.props.history.push('/signup');
    }
    
    render(){
        const {item} = this.state;
        const title = <h2>{RegistrationSignUp}</h2>;

        return <div>
            <AppNavbar/>
            <DrawerAfterworkOrganizer />
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="mail">Mail *</Label>
                        <Input type="mail" name="mail" id="mail" value={item.mail || ''}
                               onChange={this.handleChange} autoComplete="mail"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password *</Label>
                        <Input type="password" name="password" id="password" value={item.password || ''}
                               onChange={this.handleChange} autoComplete="password"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="fistName" id="fistName" value={item.fistName || ''}
                               onChange={this.handleChange} autoComplete="fistName"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={item.lastName || ''}
                               onChange={this.handleChange} autoComplete="mail"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="adresse">Adresse</Label>
                        <Input type="text" name="adresse" id="adresse" value={item.adresse || ''}
                               onChange={this.handleChange} autoComplete="adresse"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" onClick={() => window.open('/activities')}>Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}
export default withRouter(RegistrationSignUp);