import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordList from './WordList';


class EditForm extends Component {

    state = {
        sight_word: '',
        audio: ''
    }

    onSubmit = (event) => {
        event.preventDefault();

        // simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_WORD',
            payload: this.state
        });
    addWord = (sight_word, audio) => (event) => {
        this.props.dispatch({
            type: 'ADD_WORD',
            payload: { words: sight_word, audio }
        })//REPLACES THE ORIGINAL AXIOS REQUEST
    }
    removeWord = (sight_word, audio) => (event) => {
        this.props.dispatch({
            type: 'REMOVE_WORD'
        })
    }
        // clear local state
        this.setState({
            sight_word: '',
            audio: '',
        })
    render() {

    
        return (
            <>
           
                <form onSubmit={this.onSubmit}>
                    <label for="addword">Add Word</label>
                    <input type="text" placeholder='Add Word'></input><br />
                    <label for="removeword">Remove Word</label>
                </form>
            </>
        );
    }
}


    export default connect()(EditForm);
