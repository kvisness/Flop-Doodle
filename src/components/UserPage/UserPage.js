import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './UserPage.css';

class UserPage extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/games');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1 id="welcome">Welcome Back To FLOP-DOODLE {this.props.user.username}!</h1>
          <h2>Your Current High Score is:{this.props.user.highscore}</h2>
          <h2>Ready To Play?</h2>
          <div><br />
            <button id="goto">Go To Games{/*THIS needs to link to the GAMES page*/}</button><br />
          </div>
          <br />
          
          <div id="logout">
            <LogOutButton />
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
  user: reduxState.user
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withRouter(UserPage));
