import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import { Button } from '@material-ui/core';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <div className="grid">
        <div>
          <p className="text">
            Welcome to Gear Guide!
            <br />
            <br />
            Gear Guide was created for musicians and gear heads to come
            together and build upon the knowledge base of the industry, and to
            help upcoming musicians find the gear they love!
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <Button
              variant="contained"
              color="primary"
              className="btn btn_sizeSm"
              onClick={onLogin}
            >
              Login
            </Button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
