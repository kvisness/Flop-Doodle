import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Howl } from 'howler';
import { withRouter, NavLink } from 'react-router-dom';
import './CurrentGame.css';

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
        this.props.dispatch({//stores correct words
            type: 'UNSET_CORRECT_WORDS'
        })
        this.props.dispatch({//stores missed words
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
        console.log(event.target.value)//check to see if word was correct
        if (event.target.value === this.props.currentWords[this.state.wordIndex].sight_word) {
            this.setState({
                correctWord: this.state.correctWord + 1,//counter keeps track of correct words
            });
            this.playWord('/Your_awesome-ethan.m4a')
            setTimeout(() => {//this was added because the alert was disrupting the flow of the words played.
                alert("YAY! FLOP-DOODLE!");
                this.props.dispatch({
                    type: 'SET_CORRECT_WORDS',
                    payload: this.props.currentWords[this.state.wordIndex].sight_word
                });//this should keep track of the correctWords selected and display them on this page
                this.nextRound();
            }, 1000)
        } else {//

            this.playWord('/Ayden.m4a');
            setTimeout(() => {//this was added because the alert was disrupting the flow of the words played.
                alert("Please try a new word!");
                this.props.dispatch({
                    type: 'SET_MISSED_WORDS',
                    payload: this.props.currentWords[this.state.wordIndex]//keep track of missed
                });
                this.nextRound();
            }, 1000)
        }
        //check to see if game is over

    }
    nextRound = () => {//
        console.log('in nextRound', this.state.wordIndex)
        if (this.state.wordIndex >= (this.props.currentWords.length - 1)) {
            if(this.props.user.highscore < this.state.correctWord){this.props.dispatch({//
                type: 'SET_HIGH_SCORE',
                payload: {highscore: this.state.correctWord}//number of correct words requires the key from currentGame router
            })}

            this.props.history.push('/finalResults');
        } else {//sets up next round
            const nextIndex = this.state.wordIndex + 1;//created this variable so state wasn't updating before the next word played
            this.setState({ wordIndex: nextIndex });
            this.playWord(this.props.currentWords[nextIndex].audio);
            console.log('in nextRound this.playWord', this.props.currentWords[nextIndex].audio)
        }
    }
    //checkWord will check the selected word to the correct word, 
    //if correct use alert of some kind, if missed, use alert and store this word to display on FinalResults.
    render() {
        console.log(this.props)

        const word = this.props.currentWords

        return (
            <div>
                <h2>Great Score Flop-Doodle!</h2>
                <h2>Correct Words: {this.state.correctWord}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Words List:</th><br />
                        </tr>
                    </thead>

                    <tbody>
                        {word && word.map((currentWord) => <button onClick={this.checkWord} value={currentWord.sight_word}>{currentWord.sight_word}</button>)}
                    </tbody>
                    <div className="lets-play"><br />
                        <button onClick={this.playGame}>Let's PLAY! </button><br />
                    </div> 
                    <div className="go-back">   
                        <br /><NavLink to="/games">~--Go Back</NavLink><br />
                    </div>
                </table>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    currentWords: reduxState.currentWords,
    user: reduxState.user,
    wordLength: reduxState.wordLength//calls games from the wordsRedcuer
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withRouter(CurrentGame));
