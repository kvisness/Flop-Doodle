import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { NavLink, withRouter } from 'react-router-dom';
import './UserPage.css';

class UserPage extends Component {

  onSubmit() {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1 id="welcome">Welcome To FLOP-DOODLE {this.props.store.user.username}!</h1>
          <h2>Ready To Play?</h2>
          <div id="goto"><br />
            <NavLink to="/games">Go To Games</NavLink>{/*THIS needs to link to the GAMES page*/}<br />
          </div>
          <br />
          
          <div id="logout">
            <LogOutButton className="log-in" />
          </div>
        </form>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
