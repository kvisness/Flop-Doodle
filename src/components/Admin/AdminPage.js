import React, { Component } from 'react';
import { connect } from 'react-redux';
import WordList from './WordList';

class AdminPage extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_ADMINWORDS'
        })
    }
    onSubmit = (event) => {
        event.preventDefault();

        // simple dispatch for the saga to take care of
        this.props.dispatch({
            type: 'ADD_ADMINWORDS',
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
                        {this.props.adminWords && this.props.adminWords.map((word) => <WordList word={word}/>)}

                    </tbody>

                </table>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    adminWords: reduxState.admin//calls games from the wordsRedcuer
})

export default connect(mapStateToProps)(AdminPage);
