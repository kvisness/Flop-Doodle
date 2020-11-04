import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom'

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
                    <h1 id="welcome">LET'S GOOOOOOO!!!</h1>
                    
                    <div>
                        <p>How to Play Flop-Doodle:</p>
                        <ol>
                            <li>Select length of words to learn.</li>
                            <li>Push Play.</li>
                            <li>Listen For The Word.</li>
                            <li>Select Correct Word and score</li>
                        </ol>

                    </div><br />
                    <p>Select your game!</p>
                    <div>
                        {/*THIS needs to link to the CurrentGame page*/}
                        <button value={2} onClick={this.onSubmit}>2-letter words</button><br /><br />
                        <button value={3} onClick={this.onSubmit}>3-letter words</button><br /><br />
                        <button value={4} onClick={this.onSubmit}>4-letter words</button><br /><br />
                        <button value={5} onClick={this.onSubmit}>5-letter words</button><br /><br />
                        <button value={6} onClick={this.onSubmit}>6-letter words</button><br /><br />
                        <button value={7} onClick={this.onSubmit}>7-letter words</button><br /><br />
                    </div><br />
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(Games));
