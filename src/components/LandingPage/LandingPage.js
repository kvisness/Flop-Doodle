import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class LandingPage extends Component {
  state = {
    heading: 'FLOP-DOODLE',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };
  onLoginAdmin = (event) => {
    this.props.history.push('/admin');
  };

  render() {
    return (
      <div className="container">
        <h2>{this.state.heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p>What's up Flop-Doodle! <br /><br />
              Get ready to learn some words!<br /><br />
              Please register or login.
            </p>
          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <button className="btn btn_sizeSm" onClick={this.onLogin}>
                Login
              </button>
              <h4>Admin Login</h4>
              <button className="btn btn_sizeSm" onClick={this.onLoginAdmin}>
                Admin Login
              </button>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
