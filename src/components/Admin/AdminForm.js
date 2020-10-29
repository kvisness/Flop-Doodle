import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AdminForm extends Component {
    state = {
        username: '',
        password: '',
    };

    adminLogin = (event) => {
        event.preventDefault();

        if (this.state.username && this.state.password) {
            this.props.dispatch({
                type: 'ADMIN_LOGIN',
                payload: {
                    username: this.state.username,
                    password: this.state.password,
                },
            });
        } else {
            this.props.dispatch({ type: 'ADMIN_LOGIN_INPUT_ERROR' });
        }
    }; // end adminLogin

    handleInputChangeFor = (propertyName) => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    };

    render() {
        return (
            <form className="adminFormPanel" onSubmit={this.adminLogin}>
                <h2>Login</h2>
                {this.props.store.errors.loginMessage && (
                    <h3 className="alert" role="alert">
                        {this.props.store.errors.loginMessage}
                    </h3>
                )}
                <div>
                    <label htmlFor="username">
                        Username:
            <input type="text"
                            name="username"
                            required
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}
                        />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password:
            <input type="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}
                        />
                    </label>
                </div>
                <div>
                    <input className="btn" type="submit" name="submit" value="Admin Log In" />
                </div>
            </form>
        );
    }
}

export default connect(mapStoreToProps)(AdminForm);
