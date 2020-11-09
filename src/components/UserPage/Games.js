import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import './Games.css';

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
            type: 'SET_WORD_LENGTH',
            payload: event.target.value
        });
        this.props.history.push('/currentGame');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1 id="welcome">GAME SELECTION</h1>
                    <h2>How to Play Flop-Doodle:</h2>
                    <div className="games-js">
                        <p>1. Select length of words to learn.</p>
                        <p>2. Push Play.</p>
                        <p>3. Listen For The Word.</p>
                        <p>4. Select Correct Word and score!</p>
                        <p><span role="img" aria-labelledby='jsx-a11y /accessible-emoji'>⬇️👇TRY to select your game!👇⬇️</span></p>
                    </div><br />

                    <div className='btn-games'>
                        {/*THIS needs to link to the CurrentGame page*/}
                        <button id='btn-2' value={2} onClick={this.onSubmit}>2-letter words</button><br /><br />
                        <button id='btn-3' value={3} onClick={this.onSubmit}>3-letter words</button><br /><br />
                        <button id='btn-4' value={4} onClick={this.onSubmit}>4-letter words</button><br /><br />
                        <button id='btn-5' value={5} onClick={this.onSubmit}>5-letter words</button><br /><br />
                        <button id='btn-6' value={6} onClick={this.onSubmit}>6-letter words</button><br /><br />
                        <button id='btn-7' value={7} onClick={this.onSubmit}>7-letter words</button><br /><br />
                    </div><br />
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(Games));
