import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
//import mapStoreToProps from '../../redux/mapStoreToProps';
//import WordList from '../Admin/WordList';
import { Howl } from 'howler';
import { withRouter, NavLink } from 'react-router-dom';
//import WordCounter from '../Admin/WordCounter';

class CurrentGame extends Component {

    state = {
        wordIndex: 0,
        correctWord: 0
    }


    componentDidMount() {
        this.props.dispatch({//brings in words from the db randomly as page reloads
            type: 'FETCH_CURRENT_WORDS',
            payload: this.props.wordLength//to the saga, bringing in a number that represents the word length needed
        })
        this.props.dispatch({//brings in words from the db randomly as page reloads
            type: 'UNSET_CORRECT_WORDS'
        })        
        this.props.dispatch({//brings in words from the db randomly as page reloads
            type: 'UNSET_MISSED_WORDS'
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
    playWord = (file_url) => {//Howler, plays audio
        console.log(file_url);
        let sound = new Howl({
            src: file_url,
            format: ['wav']
        });
        sound.play();
    }
    playGame = () => {//plays the audio for each word in the index
        this.playWord(this.props.currentWords[this.state.wordIndex].audio);
    }       
    checkWord = (event) => {
        console.log('in checkWord index is', this.state.wordIndex)
        //let correct = []; 
        console.log(event.target.value)//check to see if word was correct
        if (event.target.value === this.props.currentWords[this.state.wordIndex].sight_word) {
            this.playWord('/Awesome_job_Flop_Doodle.m4a')
            alert("YAY! FLOP-DOODLE!");//keep track of correct
            this.setState({
                correctWord: this.state.correctWord + 1,
            });
            this.props.dispatch({
                type: 'SET_CORRECT_WORDS',
                payload: this.props.currentWords[this.state.wordIndex].sight_word
            })//this should keep track of the correctWords selected and display them on this page
        } else {//
            this.playWord('/Nice_Try_Flop_Doodle.m4a')
            alert("Please try a new word!");//keep track of missed
            this.props.dispatch({
                type: 'SET_MISSED_WORDS',
                payload: this.props.currentWords[this.state.wordIndex]
            })
        }
        //check to see if game is over
        if (this.state.wordIndex >= (this.props.currentWords.length - 1)) {
            //alert("GREAT JOB FLOP-DOODLE!");
            this.props.history.push('/finalResults');
        } else {//sets up next round
            this.setState({ wordIndex: this.state.wordIndex + 1 });
            this.playWord(this.props.currentWords[this.state.wordIndex + 1].audio);
        }
     }
      
    //checkWord will check the selected word to the correct word, 
    //if correct use alert of some kind, if missed, use alert and store this word to display on FinalResults.
    render() {
        const word = this.props.currentWords

        return (
            <div>
                <h2>Flop-Doodle!</h2><br /><br />
                    Correct Words: {this.state.correctWord} 
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
                        <button onClick={this.playGame}>Let's PLAY! </button><br />
                        <br /><NavLink to="/games">~--Go Back</NavLink><br />
                    </div>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    currentWords: reduxState.currentWords,
    wordLength: reduxState.wordLength//calls games from the wordsRedcuer
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withRouter(CurrentGame));
