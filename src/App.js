import React, { Component } from 'react';
import './App.scss';
import Main from './containers/main';
import LoginForm from './components/login-form';
import SignupForm from './components/signup-form';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  state = {
    games: [],
    comments: [],
    users: [],
    user: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  findUsername = (userId) => {
    return this.state.users.find(user => {
      return user.id === userId ? user.username : null
    })
  }

  findGamename = (gameId) => {
    return this.state.games.find(game => {
      return game.id === gameId ? game.name : null
    })
  }

  findComment = (id) => {
    return this.state.comments.filter(comment => {
      return comment.user_id === id
    })
  }

  newComment = (comment) => {
    this.setState({
      comments: [...this.state.comments, comment]
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/games')
        .then(res => res.json())
        .then( data => {
        this.setState({
            games: [...data]
        })
    })
    fetch('http://localhost:3000/api/v1/comments')
        .then(res => res.json())
        .then(data => {
        this.setState({
            comments: [...data]
        })
    })
    fetch('http://localhost:3000/api/v1/users')
        .then(res => res.json())
        .then( data => {
        this.setState({
            users: [...data]
        })
    }) 
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
        user: data,
        users: [...this.state.users, data]
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
    // console.log('clicking', this.state.username)
    this.state.users.forEach( user => {
      if ( user.username === 'Flexington') {
        this.setState({
          user: user
        })
      } else {
        // console.log('user doesnt exist')
      }
    })
  }

  logoutFunction = () => {
    this.setState({
      user: ''
    })
  }

  render() {



    return (

      
      <div className='home'>
        {
          this.state.user
          ?
          <Route path='/' render={(routerProps) => <Main
            findUsername={ this.findUsername } 
            {...routerProps} 
            user={this.state.user} 
            logout={this.logoutFunction}
            games={this.state.games}
            comments={this.state.comments}
            users={this.state.users}
            newComment={this.newComment}
            findComment={this.findComment}
            findGamename={this.findGamename}
            />} />
            :
            <Switch>
            <Route exact path='/' render={ () => <LoginForm link={ this.renderSignup } userAuth={ this.userAuth } test={ this.onClickTest } /> } />
            <Route exact path='/Signup' render={ () => <SignupForm createUser={this.createUser} usernameHandler={this.usernameHandler} passwordHandler={this.passwordHandler} confirmPasswordHandler={this.confirmPasswordHandler}/> } />
          </Switch>
        }
        </div>
      
    );
  }
}

export default App;
