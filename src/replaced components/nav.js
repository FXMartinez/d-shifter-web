import React from 'react'
import Main from '../containers/main'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import ShowGame from '../components/show-game'
import CommentSection from '../components/comment-section'
import Gamecard from '../components/game-cards'
import AccountInfo from '../components/accountinfo'
// import Friendcard from '../components/friend-card'
// import ReactDOM from 'react-dom'
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
// import SignupForm from './signup-form'
// import LoginForm from './login-form'
// import SignupForm from './signup-form'
 
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
                chosenGame: {...data}
            })
        })
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

        // let selectedGame = this.props.state.games.find(game => game.id === this.state.gameId)

        const { activeItem } = this.state

        return (

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
                                        return  <div key={ game.id }> <Gamecard game={ game } test={ this.test } /> </div> })  } 
                                    </div>  } />

                            <Route exact path="/Games" render={ () => 
                                    <div className='game-cards'>
                                { this.props.state.games.map( game => {
                                        return  <div key={game.id}> <Gamecard game={ game } test={ this.test } /> </div> })}
                                    </div> } />

                            <Route exact path="/" render={ () =>  this.props.state.comments.map( comment => {
                                                                    return <div key={comment.id}> <CommentSection comment={ comment }/> </div>  })} />

                            <Route exact path='/Account' render={ () => <AccountInfo user={ this.props.user }/> } />

                            <Route path='/Games/:id' render={ () => <ShowGame {...this.props} /> }/>

                        </Switch>
                    </Segment>
                </Grid.Column>
            </Grid>


    )}
}

export default Nav;