import React, { Component } from 'react';
import { connect } from 'react-redux';


class WordList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ADMINWORDS'
        })
    }

    addWord = (sight_word) => (event) => {
        this.props.dispatch({
            type: 'ADD_WORD',
            payload: { words: sight_word }
        })//REPLACED THE ORIGINAL AXIOS REQUEST
    }
    removeWord = (id) => {
        console.log('about to delete word with id ', id);
        this.props.dispatch({
            type: 'REMOVE_WORD',
            payload: id
        })
    }
    render() {
        console.log(this.props)
        const word = this.props.word
        return (
            <>
            <tr>
                <td>{word.sight_word}</td>
                <td>{word.audio}</td>
                <td><button onClick={() => this.removeWord(word.id)}>Remove Word</button></td>
            </tr>
            </>
        );
    }
}


export default connect()(WordList);
