import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {NavLink, withRouter} from 'react-router-dom'

class UserPage extends Component {

  onSubmit(){

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1 id="welcome">Welcome {this.props.store.user.username}!</h1>
          <p>Ready To Play?</p>
          <br />
          <NavLink to="/games">Go To Games</NavLink>{/*THIS needs to link to the GAMES page*/}<br />
          <br />
          <LogOutButton className="log-in" />
        </form>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(UserPage));
