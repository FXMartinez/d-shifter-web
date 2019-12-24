import React, { Component } from 'react';
import './App.scss';
import Main from './containers/main';
import LoginForm from './components/login-form';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

class App extends Component {

  state = {
    user: 'Flexington'
  }

  userLoggedIn = (username) => {
    this.setState({
      user: username
    })
  }

  render() {

    return (
      <Router>
        <div>
          {/* { */}
          {/* this.state.user */}
          {/* ? */}
          <Main user={this.state.user}/>
          {/* :
          <LoginForm />
        } */}
        </div>
      </Router>

    );
  }
}

export default App;
