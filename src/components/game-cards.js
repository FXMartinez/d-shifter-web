import React from 'react'
import { Link } from 'react-router-dom'
// import { Card, Icon } from 'semantic-ui-react'
// import ShowGame from '../components/show-game'

class Gamecard extends React.Component {

    state = {
        followObject: '',
        isFollowed: '',
        follows: [],
        comments: [],
        showNew: false
    }

    componentDidMount(){
        fetch(`http://localhost:3000/api/v1/games/${this.props.game.id}`)
            .then(res => res.json())
            .then( data => {
            this.setState({
                follows: [...data.follows],
                comments: [...data.comments]
            })
        },
        // console.log('component mounted')
        )
    }

    isFollowed = (userId) => {
        return this.state.follows.find( follow => {
            return (this.followExists(userId) === follow.id)
        })
    }

    unFollow = (followId) => {
        // console.log('unfollow', followId);
        return fetch(`http://localhost:3000/api/v1/follows/${followId}`, {
            method: 'delete'
          })
          .then(response => response.json())
          .then(data => {
              this.setState({
                  follows: this.filterFollows(data)
            })
        })
    }

    createFollow = (userId, gameId) => {
        fetch('http://localhost:3000/api/v1/follows', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
          },
          body: JSON.stringify({
            user_id: userId,
            game_id: gameId
          })
        })
        .then( resp => resp.json())
        .then( follow => {
          this.setState({
            follows: [...this.state.follows, follow],
            followObject: {...this.followExists(this.props.user.id)}
            })
        }, console.log('follow Created', this.state.follows))
    }

    followExists = (userId) => {
        return this.state.follows.find( follow => {
            return follow.user_id === userId
        })
    }

    filterFollows = (followOb) => {
        return this.state.follows.filter( follow => {
            return follow.id != followOb.id;
            debugger
        })
    }

    render () {

    const thisFollow = this.followExists(this.props.user.id)

    // console.log('state follows', this.state.follows)

    return (
  
        <div className="ui card">
            <div className="image"> <img id={ this.props.game.id } src={ this.props.game.image } onClick={ this.props.test } alt='' /></div>
                <div className="content">
                    <div className="header">
                        <Link to={ `/Games/${this.props.game.id}` }> { this.props.game.name } </Link>
                    </div>
                        <div className="meta">Game</div>
                            <div className="description">
                                { this.props.game.description }
                            </div>
                        </div>
                        <div className="extra content">
                            <a>
                            <i aria-hidden="true" className="calendar icon"></i>
                                Release Date: { this.props.game.release_date } <br/>
                            </a>
                        </div>
                        <div className="extra content">
                           { 
                            this.followExists(this.props.user.id)
                            ?
                            <a onClick={ () => this.unFollow(thisFollow.id) }>
                                <i aria-hidden='false' className='heart icon'></i>
                                Follows: { this.state.follows.length }
                            </a>
                            :
                            <a onClick={ () => this.createFollow(this.props.user.id, this.props.game.id) } >
                                <i aria-hidden="false" className='heart outline icon'></i>
                                Follows: { this.state.follows.length }
                            </a>
                            }
                        </div>
                    </div>
    )}
}

export default Gamecard;

// <Card
//     image={this.props.game.image} 
//     onClick={ (e) => console.log(e.target.key) }
//     header={this.props.game.name}
//     meta='Game'
//     description={this.props.game.description}
//     extra= {
//         <div>
//             <a>
//                 <Icon name='calendar' />
//                 Release Date: { this.props.game.release_date }<br/>
//             </a>
//             <a>
//                 <Icon name='heart outline' />
//                 Follows: { this.state.follows.length }
//             </a>
//         </div>
//     }
// />