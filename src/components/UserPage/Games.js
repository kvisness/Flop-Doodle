import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { NavLink, withRouter } from 'react-router-dom'

class Games extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_GAMES'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        // simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_GAMES',
            payload: this.state
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1 id="welcome">LET'S GOOOOOOO!!!</h1>
                    <p>Select your game!</p>
                    <div>
                        <p>How to Play Flop-Doodle:</p>
                        <ol>
                            <li>Select length of words</li>
                            <li>Push Play</li>
                            <li>Listen For The Word</li>
                            <li>Select Correct Word</li>
                        </ol>

                    </div>
                    <div>
                        <NavLink to="/currentGame">2-letter words</NavLink>{/*THIS needs to link to the CurrentGame page*/}<br /><br />
                        <NavLink to="/currentGame">3-letter words</NavLink><br /><br />
                        <NavLink to="/currentGame">4-letter words</NavLink><br /><br />
                        <NavLink to="/currentGame">5-letter words</NavLink><br /><br />
                        <NavLink to="/currentGame">6-letter words</NavLink><br /><br />
                        <NavLink to="/currentGame">7-letter words</NavLink><br />
                    </div><br />
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(Games));
