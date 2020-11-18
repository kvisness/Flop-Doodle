import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
//import mapStoreToProps from '../../redux/mapStoreToProps';
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
          <h1 id="welcome">Welcome To FLOP-DOODLE--> {this.props.user.username}!</h1>
          <h2>Your Current High Score is:{this.props.user.highscore}</h2>
          <h2>Ready To Play?</h2>
          <h2>Catch the button!</h2>
          <div><br />
            <button id="goto">Go To Games{/*This will link to the GAMES page*/}</button><br />
          </div>
          <br />
          
          <div className="logout">
            <LogOutButton id="logoutbutton" />
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
