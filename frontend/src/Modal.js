import React from 'react';
import { Button } from '@mui/material';
import './Modal.css';

function Modal({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <Button onClick={() => closeModal(false)}> X </Button>
            <div className='title'>
                <h4>Are you Sure you Want to Continue?</h4>
            </div>
            <div className='body'>
                <p>Continue?</p>
            </div>
            <div className='footer'>
                <Button onClick={() => closeModal(false)} id="cacn">Cancel</Button>
                <Button>Continue</Button>
            </div>
        </div>
      
    </div>
  );
}

export default Modal
