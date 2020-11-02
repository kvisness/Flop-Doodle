import React, { Component } from 'react';
import { connect } from 'react-redux';
//import LogOutButton from '../LogOutButton/LogOutButton';
//import mapStoreToProps from '../../redux/mapStoreToProps';
//import WordList from '../Admin/WordList';
import { Howl } from 'howler';
import LogOutButton from '../LogOutButton/LogOutButton';
class CurrentGame extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_MISSED_WORDS'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        // simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_MISSEDWORDS',
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
                    <thead>{/* this is where I would like a voice file to say 'Congratualtions Flop-Doodle!  Here's your score'*/}
                        <tr>{/*<td>{word.audio}</td>*/}
                            <th>Final Score!</th><br />
                            <th>Words missed:</th><br />
                        </tr>
                    </thead>
                {/*<td>{word.audio}</td>*/}
                    <tbody>{/*this will need to show the words missed */}
                        {this.props.missedWords && this.props.missedWords.map((word) => <WordList word={word} />)}
                    </tbody>
                    <div><br />
                        <button type="submit">Play again!</button>
                    </div>
                </table><LogOutButton/>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    missedWords: reduxState.missedWords//calls words, if any, from the missedWordsRedcuer
})
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(CurrentGame);
