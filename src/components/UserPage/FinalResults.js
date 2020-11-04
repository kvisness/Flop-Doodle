import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Howl } from 'howler';
import LogOutButton from '../LogOutButton/LogOutButton';
import { withRouter, NavLink } from 'react-router-dom';
class CurrentGame extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MISSED_WORDS'
        })
        this.props.dispatch({
            type: 'FETCH_CORRECT_WORDS'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        // simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_MISSED_WORDS',
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
    // playFinalMessage = () => {//plays the Congrats audio that is not stored anywhere yet
    //     this.playFinalMessage(this.props.currentWords[this.state.wordIndex].audio);
    // }
    render() {
        console.log(this.props)
        const words = this.props.missedWords
        return (
            <div className='finalResults'>
                <table>
                    <thead>{/* this is where I would like a voice file to say 'Congratualtions Flop-Doodle!  Here's your score'*/}
                        <th>Words missed:</th><br />
                        {/* <tr>{<td>{words.audio}</td>}</tr> */}
                    </thead>
                {/*<td>{word.sight_word}</td>*/}
                    <tbody>{/*this will need to show the words missed and have a Play Word button for each word */}
                       
                          {words && words.map((word) => <tr><td>{word.sight_word}</td><td><button onClick={() => this.playWord(word.audio)}>Play Word</button></td></tr>)}
                       
                    </tbody>
                    <div className='FRplaymorebutton'><br />
                        <NavLink to="/games">Play More Games!</NavLink><br />
                    </div><br />
                </table><LogOutButton/>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    missedWords: reduxState.missedWords,//calls words, if any, from the missedWordsRedcuer
    correctWords: reduxState.correctWords
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(withRouter(CurrentGame));
