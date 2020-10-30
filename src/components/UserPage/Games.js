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
                        <NavLink to="/currentGame">3-letter words</NavLink>{/*THIS needs to link to the CurrentGame page*/}<br />
                        {/*<button onClick={this.addWord('dad')}>Add Word</button>*/}
                        {/*<button type="submit">2-letter words</button><br /> <br /> 
                           <button type="submit">3-letter words</button><br /><br /> 
                           <button type="submit">4-letter words</button><br /><br /> 
                           <button type="submit">5-letter words</button><br /><br /> 
                           <button type="submit">6-letter words</button><br /><br /> 
                           <button type="submit">7-letter words</button><br /> <br /> */}
                    </div><br />
                    {/*<LogOutButton className="log-in" />*/}
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withRouter(Games));
