import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

class SelectGamesPage extends Component {

    onSubmit() {

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1 id="welcome">OK FLOP-DOODLE, HERE WE GO!!!</h1>
                    <p>Select your game!</p>
                    <div>
                        <button type="submit">3-letter words</button><br />
                    </div><br />
                    {/*<LogOutButton className="log-in" />*/}
                </form>
            </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(SelectGamesPage);
