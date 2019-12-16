import React, { Component } from 'react';
import './App.scss';
// import LoginForm from './components/login-form';
import Main from './containers/main';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   // Route,
//   // Link,
//   // useRouteMatch,
//   // useParams
// } from "react-router-dom";

// const API = 'http://localhost:3000/api/v1/characters'

class App extends Component {

  state = {
  }

  render() {

    // console.log(this.state)

    return (

      <div>
        <Main />
        {/* <LoginForm/> */}
      </div>

    );
  }
}

export default App;
