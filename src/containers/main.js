import React, { Component } from 'react';
// import Main from '../containers/main'
import { Grid, Menu, Segment, Header } from 'semantic-ui-react'
import ShowGame from '../components/show-game'
import CommentSection from '../components/comment-section'
import Gamecard from '../components/game-cards'
import AccountInfo from '../components/accountinfo'
import { 
    //   BrowserRouter as Router,
    //   Redirect,
    //   useRouteMatch,
    //   useParams,
    //   NavLink
      Switch,
      Route,
      Link
    } from "react-router-dom";
// import Navigation from '../components/navigation';
// import LoginForm from '../components/login-form';
// import SignupForm from '../components/signup-form'
// import { Switch, Link, Route } from 'react-router-dom'

class Main extends Component {
    
    state = { 
        activeItem: 'Home',
        chosenGame: {},
        gameId: ''
     }

    gameHandleClick = () => { console.log('clicking') }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    // test = (e) => { console.log(e.target.id)
    //     fetch(`http://localhost:3000/api/v1/games/${e.target.id}`)
    //         .then( resp => resp.json() )
    //         .then( data => {
    //         this.setState({
    //             chosenGame: {...data}
    //         })
    //     })
    // }

    renderFeed = () => {
        if (this.props.user) {
            this.props.state.comments.map( comment => {
                return <div key={comment.id}> <CommentSection comment={ comment }/> </div>
            })
        } else {
            return <Main />
        }
    }
    
    render() { 
        
        // console.log(this.props.user)

        let topRatedGames = this.props.games.sort(( a, b ) => b.rating - a.rating).slice(0-4)

        const { activeItem } = this.state
        
        // let selectedGame = this.props.state.games.find(game => game.id === this.state.gameId)
        
        // console.log('main', this.props)

        return ( 
            <div className="main-wrapper">
                <div className='top-bar'>
                    <div className="nav-section left">
                        <Header as='h2'> SHIFTER </Header>
                    </div>
                    <div className="nav-section right">
                       
                    </div>
                </div>

                <Grid>
                <Grid.Column width={2}>
                    <Menu fluid vertical tabular>
                    
                    <Menu.Item
                        as= { Link }
                        to='/'
                        name='Home'
                        active={activeItem === 'Home'}
                        onClick={this.handleItemClick}
                        />

                    <Menu.Item
                        as={ Link }
                        to='/Dopegames'
                        name='Dope Games'
                        active={activeItem === 'Dope Games'}
                        onClick={this.handleItemClick}
                        />

                    <Menu.Item
                        as={ Link }
                        to='/Games'
                        name='Games'
                        active={activeItem === 'Games'}
                        onClick={this.handleItemClick}
                        />

                    <Menu.Item
                        as={ Link }
                        to='/Account'
                        name='Account'
                        active={activeItem === 'Account'}
                        onClick={this.handleItemClick}
                        />

                    <Menu.Item
                        as={ Link }
                        to={'/'}
                        name='Log Out'
                        active={activeItem === 'Log Out'}
                        onClick={ this.handleItemClick, this.props.logout }
                        />

                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <Switch>

                            <Route exact path='/Game' render={ () => <div> <ShowGame /> </div> } />

                            
                            <Route exact path='/Dopegames' render={ () => 
                                    <div className='game-cards'>
                                {  topRatedGames.map( game => { 
                                        return  <div key={ game.id }> <Gamecard game={ game } test={ this.test } user={ this.props.user } /> </div> })  } 
                                    </div>  } />

                            <Route exact path="/Games" render={ () => 
                                    <div className='game-cards'>
                                { this.props.games.map( game => {
                                        return  <div key={game.id}> <Gamecard game={ game } test={ this.test } user={ this.props.user }/> </div> })}
                                    </div> } />

                            <Route exact path="/" render={ () =>  this.props.comments.map( comment => {
                                                                    return <div key={comment.id}> <CommentSection comment={ comment }/> </div>  })} />

                            <Route exact path='/Account' render={ () => 
                                <AccountInfo 
                                    user={ this.props.user } 
                                    findComment={this.props.findComment}
                                    findGamename={this.props.findGamename}
                                /> 
                            }/>

                            <Route path='/Games/:id' render={ () => 
                                <ShowGame 
                                    {...this.props} 
                                    findUsername={ this.props.findUsername } 
                                    user={ this.props.user } 
                                /> 
                            }/>

                        </Switch>
                    </Segment>
                </Grid.Column>
            </Grid>
                
            </div>
         );
        }
    }
    
    export default Main;