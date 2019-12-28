import React from 'react'
// import { Card, Icon } from 'semantic-ui-react'
// import ShowGame from '../components/show-game'
import { Link } from 'react-router-dom'

class Gamecard extends React.Component {

    state = {
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
        })
    }

    render () {

    // console.log('this', this.props.test)

    return (
  
        <div className="ui card">
            <div className="image"> <img alt='' id={ this.props.game.id } src={this.props.game.image} onClick={ this.props.test } as={ Link } to={ '/Game' } /></div>
                <div className="content">
                    <div className="header">{this.props.game.name}</div>
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
                            <a>
                                <i aria-hidden="false" className="heart outline icon"></i>
                                Follows: { this.state.follows.length }
                            </a>
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