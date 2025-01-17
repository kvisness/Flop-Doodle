import React, { Component } from 'react';
import {HashRouter as Router,Route,Redirect,Switch,} from 'react-router-dom';

import { connect } from 'react-redux';
import './App.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AdminPage from '../Admin/AdminPage';
import Games from '../UserPage/Games';
import CurrentGame from '../UserPage/CurrentGame';
import FinalResults from '../UserPage/FinalResults';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not), open to anyone.
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // if logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={UserPage}
            />
            <ProtectedRoute
              // if logged in shows UserPage else shows LoginPage
              exact
              path="/games"
              component={Games}
            />
            <ProtectedRoute
              // if logged in shows UserPage else shows LoginPage
              exact
              path="/currentGame"
              component={CurrentGame}
            />
              <ProtectedRoute
                // if logged in shows UserPage else shows LoginPage
                exact
                path="/finalResults"
                component={FinalResults}
              />
            <ProtectedRoute
              // if logged in shows AdminPage else shows LoginPage
              exact
              path="/admin"
              component={AdminPage}
            />
            <ProtectedRoute
              // if logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/user"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/user"
            />

            {/* If none of the other routes above matched like "/dinasour", we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </div>
    );
  }
}

export default connect()(App);
