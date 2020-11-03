import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
//import mapStoreToProps from '../../redux/mapStoreToProps';
//import WordList from '../Admin/WordList';
import { Howl } from 'howler';
class CurrentGame extends Component {

    state = {
        wordIndex: 0
    }

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_CURRENT_WORDS'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        // simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_CURRENT_WORDS',
            payload: this.state
        });
    }
    playWord = (file_url) => {//Howler
        console.log('In CurrentGame.js attempting to play file', file_url);
        let sound = new Howl({
            src: file_url,
            format: ['wav']
        });
        sound.play();
    }
    playGame = () => {//plays the audio
        this.playWord(this.props.currentWords[this.state.wordIndex].audio);

    }
    checkWord = (event) => {
        let correct = []; 
        console.log(event.target.value)//check to see if word was correct
        if (event.target.value === this.props.currentWords[this.state.wordIndex].sight_word) {
            alert("YAY! FLOP-DOODLE!");//keep track of correct
            correct.push('/finalResults')
        } else {//
            alert("Please try again!");//keep track of missed
        }
        //check to see if game is over
        if (this.state.wordIndex >= (this.props.currentWords.length - 1)) {
            alert("GREAT JOB FLOP-DOODLE!");
            this.props.history.push('/finalResults');
        } else {//sets up next round
            this.setState({ wordIndex: this.state.wordIndex + 1 });
            this.playWord(this.props.currentWords[this.state.wordIndex + 1].audio);
        }

    }
    //letsPlay will check the selected word to the correct word, 
    //if correct use alert of some kind, if missed, use alert and store this word to display on FinalResults.
    render() {
        const word = this.props.currentWords
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Words List:</th><br />
                        </tr>
                    </thead>

                    <tbody>
                        {word && word.map((currentWord) => <button onClick={this.checkWord} value={currentWord.sight_word}>{currentWord.sight_word}</button>)}
                    </tbody>
                    <div><br />
                        <button onClick={this.playGame}>Let's PLAY! </button>
                    </div>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    currentWords: reduxState.currentWords//calls games from the wordsRedcuer
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CurrentGame);
