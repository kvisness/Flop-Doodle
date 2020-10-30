import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import WordList from '../Admin/WordList';

class CurrentGame extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_WORDS'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
// simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_WORDS',
            payload: this.state
        });
    }

    render() {
        return (
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>Words List:</th><br /><br />
                            </tr>
                        </thead>
                    <div>
                        <button type="submit">LET'S PLAY!</button><br />
                    </div>
                        <tbody>
                            {this.props.words && this.props.words.map((word) => <WordList word={word} />)}
                        </tbody>
                    </table>
                </div>
        );
    }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(CurrentGame);
