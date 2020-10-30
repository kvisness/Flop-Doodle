import React, { Component } from 'react';
import { connect } from 'react-redux';


class WordList extends Component {

    render() {
        console.log(this.props)
        const word = this.props.word
        return (
            <tr>
                <td>{word.sight_word}</td>
                <td><button>Add Word</button></td>
                <td><button>Remove Word</button></td>
            </tr>
        );
    }
}


export default connect()(WordList);
