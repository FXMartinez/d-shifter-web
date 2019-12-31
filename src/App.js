import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.scss';
import Main from './containers/main';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

class App extends Component {

  state = {
    users: [],
    user: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  createUser = () => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
    },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  usernameHandler = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value
    })
  }
  
  confirmPasswordHandler = (e) => {
    this.setState({
      confirmPassword: e.target.value
    })
  }



  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then( data => {
        this.setState({
            users: [...data]
          })
      })
  }

  userAuth = (username) => {
    this.state.users.forEach(user => { 
      user.username === username
      ?
      this.setState({
        user: username
      })
      :
      alert('User does not exist')
    })
  }

  userLoggedIn = (username) => {
    this.setState({
      user: username
    })
  }

  renderSignup = () => {
    return <div>
      <Link to='/Signupform'> Signup </Link>
      </div>
  }

  onClickTest = () => {
    console.log('clicking', this.state.username)
    this.state.users.forEach( user => {
      if ( user.username === 'Flexington') {
        this.setState({
          user: user
        })
      } else {
        console.log('user doesnt exist')
      }
    })
  }

  logoutFunction = () => {
    this.setState({
      user: ''
    })
  }

  render() {

    console.log('app', this.state.username )
    console.log('app', this.state.password )

    return (
      <Router>
        <div>
        {
          this.state.user
          ?
          <Main user={this.state.user} logout={this.logoutFunction} />
          :
          // <LoginForm link={ this.renderSignup } userAuth={ this.userAuth } test={ this.onClickTest } />
          <Switch>
            <Route exact path='/' render={ () => <LoginForm link={ this.renderSignup } userAuth={ this.userAuth } test={ this.onClickTest } /> } />
            <Route exact path='/Signup' render={ () => <SignupForm createUser={this.createUser} usernameHandler={this.usernameHandler} passwordHandler={this.passwordHandler} confirmPasswordHandler={this.confirmPasswordHandler}/> } />
          </Switch>
        }
        </div>
      </Router>
    );
  }
}

export default App;
