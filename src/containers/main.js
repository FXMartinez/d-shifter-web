import React, { Component } from 'react';
import Nav from '../components/nav'
// import Navigation from '../components/navigation';
// import LoginForm from '../components/login-form';
// import SignupForm from '../components/signup-form'
// import { Switch, Link, Route } from 'react-router-dom'

class Main extends Component {
    
    state = { 
        games: [],
        comments: []
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
    }
    
    render() {     
        
        return ( 
            <div className="main-wrapper">
                <div className='top-bar'>
                    <div className="nav-section left">
                        <img src="https://www.mtsac.edu/asac/images/temp_logo_testing.png" className="ui mini image" alt='' />
                        <span>Shifter</span>
                    </div>
                    <div className="nav-section right">
                       
                    </div>
                </div>
                <Nav state={this.state} user={this.props.user} logout={ this.props.logout }/>
                {/* { 
                this.props.user 
                ?
                null
                :
                <LoginForm />
                } */}
            </div>
         );
        }
    }
    
    export default Main;



    // fetch('http://localhost:3000/api/v1/users')
    //     .then(res => res.json())
    //     .then( data => {
    //     this.setState({
    //         users: [...data]
    //     })
    // })
    // fetch('http://localhost:3000/api/v1/follows')
    //     .then(res => res.json())
    //     .then(data => {
    //         this.setState({
    //             follows: [...data]
    //     })
    // })