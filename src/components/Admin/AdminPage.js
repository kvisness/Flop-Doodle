import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
//import LoginForm from '../LoginForm/LoginForm';

class AdminPage extends Component {
componentDidMount(){
    this.props.dispatch({
        type: 'FETCH_WORDS'
    })
}

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Words</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>dad</td>
                        </tr>
                    </tbody>
                  
              </table>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AdminPage);
