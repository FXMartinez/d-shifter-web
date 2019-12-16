import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import Post from '../components/post'
import CommentSection from '../components/comment-section'
import Gamecard from '../components/game-cards'
import Friendcard from '../components/friend-card'

export default class Navigation extends Component {
  state = { 
      activeItem: 'Home'
    }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    // console.log(this.props.state)

    const { activeItem } = this.state
    
    let display;

    switch (this.state.activeItem) {
        case 'Home':
            display = <CommentSection />;
            break;
        case 'Dope Games':
            display = <Post />;
            break;
        case 'Games':
            display =
              <div className='game-cards'>
                  { 
                    this.props.state.games.map( game => {
                    return <Gamecard game={ game }/>;
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
    )
  }
}