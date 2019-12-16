import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

class Gamecard extends React.Component {

    state = {
        follows: [],
        comments: []
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

    console.log('this', this.state)

    return (

    <Card
        image={this.props.game.image}
        header={this.props.game.name}
        meta='Game'
        description={this.props.game.description}
        extra= {
            <div>
                <a>
                    <Icon name='calendar' />
                    Release Date: { this.props.game.release_date }<br/>
                </a>
                <a>
                    <Icon name='heart outline' />
                    Follows: { this.state.follows.length }
                </a>
            </div>
        }
    />

  )}
}

export default Gamecard;
