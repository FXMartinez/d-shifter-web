import React, { Component } from 'react';
import Navigation from '../components/navigation';
import Nav from '../components/nav'
import LoginForm from '../components/login-form';

class Main extends Component {
    
    state = { 
        users: [],
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
                        <span>D Shifter</span>
                    </div>
                    <div className="nav-section right">
                       <span>Login</span>
                       <span>Sign Up</span>
                    </div>
                </div>
                { 
                this.props.user 
                ? 
                <Nav state={this.state} user={this.props.user}/>
                :
                <LoginForm />
                }
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