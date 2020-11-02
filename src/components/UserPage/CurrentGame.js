import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
//import mapStoreToProps from '../../redux/mapStoreToProps';
import WordList from '../Admin/WordList';
import { Howl } from 'howler';
class CurrentGame extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ADMINWORDS'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
// simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_ADMINWORDS',
            payload: this.state
        });
    }
    playWord = (file_url) => {
        console.log('attempting to play file', file_url);
        let sound = new Howl({
            src: file_url,
            format: ['wav']
        });
        sound.play();
    }
    render() {
        return (
                <div>
                    <table>
                        <thead>
                            <tr>
                            <th>Words List:</th><br />
                            </tr>
                        </thead>
                    
                        <tbody>
                        {this.props.adminWords && this.props.adminWords.map((word) => <WordList word={word} />)}
                        </tbody>
                    <div><br />
                        <button type="submit">LET'S PLAY!</button>
                    </div>
                    </table>
                </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    adminWords: reduxState.admin//calls games from the wordsRedcuer
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CurrentGame);
