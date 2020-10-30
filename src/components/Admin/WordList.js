import React, { Component } from 'react';
import { connect } from 'react-redux';


class WordList extends Component {

    addWord = (sight_word) => (event) => {
        this.props.dispatch({
            type: 'ADD_WORD',
            payload: { words: sight_word }
        })//REPLACED THE ORIGINAL AXIOS REQUEST
    }
    render() {
        console.log(this.props)
        const word = this.props.word
        return (
            <tr>
                <td>{word.sight_word}</td>
                <td><button onClick={this.addWord('dad')}>Add Word</button></td>
                <td><button onClick={this.addWord('mom')}>Remove Word</button></td>
            </tr>
        );
    }
}


export default connect()(WordList);
