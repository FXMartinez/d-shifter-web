import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Post from '../components/post'
import CommentSection from '../components/comment-section'
import Gamecard from '../components/game-cards'
import Friendcard from '../components/friend-card'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default class Navigation extends Component {
  state = { 
      activeItem: 'Home'
    }

  gameHandleClick = () => { console.log('clicking') }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render() {
    
    let dopeGames = this.props.state.games.sort(( a, b ) => b.rating - a.rating).slice(0-4)
    // console.log(dopeGames)

    const { activeItem } = this.state
    
    let display;

    switch (this.state.activeItem) {
        case 'Home':
            display = 
            <div className='home'>
              {
                this.props.state.comments.map( comment => {
                  return <div key={comment.id}> <CommentSection comment={ comment }/> </div>
                })
              }
            </div>

            break;
        case 'Dope Games':
            display = 
              <div className='game-cards'>  
                { 
                dopeGames.map( game => { 
                  return <div key={ game.id }>
                      <Gamecard game={ game } gameHandleClick={ this.gameHandleClick } /> 
                  </div> } )
                }  
              </div>
            break;
        case 'Games':
            display =
              <div className='game-cards'>
                  { 
                    this.props.state.games.map( game => {
                      return  <div key={game.id}> <Gamecard game={ game } gameHandleClick={ this.gameHandleClick } /> </div>
                    })
                  }
              </div>
            break;
        case 'Account':
            display = 'Account'
            break;
        case 'Friends':
            display = <Friendcard />
            break;
        case 'Log Out':
            display = 'Logging Out'
            break;
        default:
            display = <CommentSection />
    }

    return (
      <Router>
        <Grid>
          <Grid.Column width={2}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='Home'
                active={activeItem === 'Home'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='Dope Games'
                active={activeItem === 'Dope Games'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='Games'
                active={activeItem === 'Games'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='Account'
                active={activeItem === 'Account'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='Friends'
                active={activeItem === 'Friends'}
                onClick={this.handleItemClick}
                />
              <Menu.Item
                name='Log Out'
                active={activeItem === 'Log Out'}
                onClick={this.handleItemClick}
                />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>

              { display }

            </Segment>
          </Grid.Column>
        </Grid>

        <Switch>
          <Route path="/Home">
            <CommentSection />
          </Route>
          <Route path="/Games">
            <Gamecard />
          </Route>
        </Switch>
      </Router>
    )
  }
}