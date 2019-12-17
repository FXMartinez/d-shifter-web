import React, { Component } from 'react';
import './App.scss';
// import LoginForm from './components/login-form';
import Main from './containers/main';
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
  }

  render() {

    return (

      <div>
        <Router>
          <Main />
        </Router>
      </div>

    );
  }
}

export default App;
