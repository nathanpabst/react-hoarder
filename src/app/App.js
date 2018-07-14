import React from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

import Navbar from '../components/Navbar/Navbar';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home/Home';
import AllThings from '../components/AllThings/AllThings';
import MyThings from '../components/MyThings/MyThings';
import Item from '../components/Item/Item';
import SingleItem from '../components/SingleItem/SingleItem';
import fbConnection from '../firebaseRequests/connection';
fbConnection();

const PrivateRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/myThings', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({ component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/myThings', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state={
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      };
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  runAway = () => {
    this.setState({authed: false});
  }

  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar
              authed={this.state.authed}
              runAway={this.runAway}
            />
            <div className="container">
              <div className="row">
                <Switch>
                  <Route path="/" exact component={Home}/>
                  <PrivateRoute
                    path="/myThings"
                    authed={this.state.authed}
                    component={MyThings}
                  />
                  <PrivateRoute
                    path="/item/:id"
                    authed={this.state.authed}
                    component={Item}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PublicRoute
                    path="/Login"
                    authed={this.state.authed}
                    component={Login}
                  />

                  <PrivateRoute
                    path="/allThings"
                    authed={this.state.authed}
                    component={AllThings}
                  />
                  <PrivateRoute
                    path="/singleItem"
                    authed={this.state.authed}
                    component={SingleItem}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
