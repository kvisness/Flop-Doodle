import React, { Component } from 'react';
import { connect } from 'react-redux';
//import WordList from './WordList';


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
        this.setState({
            sight_word: '',
            audio: ''
        })
    // clear your local state
    }

    render() {
        // Added the two inputs, track them to local state with onChange
        return (
            <>
                <form onSubmit={this.onSubmit}>

                    <h2>Add New Words and Audio Files</h2>
                
               Add Word:
               <input onChange={(e) => this.setState({ sight_word: e.target.value })} value={this.state.sight_word}>
                </input>
                    <br />
               Add Audio: <input onChange={(e) => this.setState({ audio: e.target.value })} value={this.state.audio} />
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        );
    }
}


    export default connect()(EditForm);
