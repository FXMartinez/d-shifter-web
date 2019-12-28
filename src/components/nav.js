import React, { Component } from 'react'
import Main from '../containers/main'
import ReactDOM from 'react-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ShowGame from '../components/show-game'
import CommentSection from '../components/comment-section'
import Gamecard from '../components/game-cards'
import Friendcard from '../components/friend-card'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";
import LoginForm from './login-form'
import SignupForm from './signup-form'
 
class Nav extends React.Component {

    state = { 
        activeItem: 'Home',
        showNew: false,
        chosenGame: {},
        gameId: ''
        // dopeGames: []
      }
  
    gameHandleClick = () => { console.log('clicking') }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    test = (e) => { console.log(e.target.id)
        fetch(`http://localhost:3000/api/v1/games/${e.target.id}`)
            .then( resp => resp.json() )
            .then( data => {
            this.setState({
                chosenGame: data
            })
        })
    //     this.setState({
    //   showNew: !this.state.showNew,
    //   gameId: e.target.id
    //   })
    }

    renderGames = () => {
        if (this.props.user) {
            this.props.state.games.map( game => {
                return  <div key={game.id}> 
                            <Gamecard game={ game } test={ this.test } /> 
                        </div>
            })
        } else {
            return <Main />
        }
    }

    dopeGames = () => { 
        let topRatedGames = this.props.state.games.sort(( a, b ) => b.rating - a.rating).slice(0-4)
        if (this.props.user) {
            topRatedGames.map( game => { 
                return  <div key={ game.id }>
                            <Gamecard game={ game } test={ this.test } /> 
                        </div> 
            })
        } else {
            return <Main />
        }
    }

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

        let topRatedGames = this.props.state.games.sort(( a, b ) => b.rating - a.rating).slice(0-4)

        let selectedGame = this.props.state.games.find(game => game.id === this.state.gameId)

        // console.log('game object', this.state.chosenGame.game )

        const { activeItem } = this.state

        return (

            <Grid>
                <Grid.Column width={2}>
                    <Menu fluid vertical tabular>
                    
                    <Menu.Item
                        as= { Link }
                        to='/Home'
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
                        to='/Friends'
                        name='Friends'
                        active={activeItem === 'Friends'}
                        onClick={this.handleItemClick}
                        />

                    <Menu.Item
                        as={ Link }
                        name='Log Out'
                        active={activeItem === 'Log Out'}
                        onClick={this.handleItemClick}
                        />

                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <Switch>

                            <Route exact path='/Game' render={ () => <div> <ShowGame /> </div> } />

                            <Route exact path='/Dopegames' render={ () => topRatedGames.map( game => { 
                                                                    return  <div key={ game.id }> <Gamecard game={ game } test={ this.test } /> </div> 
                                                                    }) } />

                            {/* <Route exact path="/Games" render={ this.renderGames } /> */}

                            <Route exact path="/Home" render={ () =>  this.props.state.comments.map( comment => {
                                                                    return <div key={comment.id}> <CommentSection comment={ comment }/> </div>
                                                                    })} />

                            <Route exact path='/Friends' render={ () => <h1> Friend stuff </h1> } />

                            <Route exact path='/Account' render={ () => <h1> Account info </h1> } />

                        </Switch>
                    </Segment>
                </Grid.Column>
            </Grid>


    )}
}

export default Nav;
 
// Step 2. Changed to have router coordinate what is displayed

