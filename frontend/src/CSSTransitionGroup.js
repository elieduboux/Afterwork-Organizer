import {React, Component} from "react";
import { Button, AppBar } from '@mui/material';
import styled from '@mui/styled-engine';

export default class CSSTransitionGroup extends Component {
    render() {
      const StyledButton = styled(Button)(({ theme, color = 'primary' }) => ({
        ':hover': {
          color: theme.palette[color].main,
          backgroundColor: 'white',
        },
      }));
      return (
        <AppBar>
        <StyledButton>
          Button Test
        </StyledButton>
      </AppBar>
      )
    }
}