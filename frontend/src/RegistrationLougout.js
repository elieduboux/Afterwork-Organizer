import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Container} from 'reactstrap';
import AppNavbar from './AppNavbar';
import DrawerAfterworkOrganizer from './DrawerAfterworkOrganizer';


class RegistrationLogout extends Component {

    constructor(props) {
      super(props);
      this.state = {
        item: this.emptyItem
        };
    }
    
    render(){
        // const {item} = this.state;
        const title = <h2>{RegistrationLogout}</h2>;

        return <div>
            <AppNavbar/>
            <DrawerAfterworkOrganizer />
            <Container>
                {title}
                <p>TODO : Logout</p>
            </Container>
        </div>
    }
}
export default withRouter(RegistrationLogout);