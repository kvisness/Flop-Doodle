import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordList from './WordList';

class AdminPage extends Component {

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
        console.log(this.props)
        return (
            <div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Words List:</th><br />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.words[0] && this.props.words.map((word) => <WordList word={word}/>)}

                    </tbody>

                </table>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    words: reduxState.words//calls words from the wordsRedcuer
})

export default connect(mapStateToProps)(AdminPage);
