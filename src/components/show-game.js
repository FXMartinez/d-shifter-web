import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import GameComments from './game-comments';


class ShowGame extends React.Component {

    state = {
        game: {},
        follows: [],
        comments: []
    }

    newComment = (comment) => {
        this.setState({
          comments: [...this.state.comments, comment]
        })
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/${this.props.location.pathname.toLowerCase()}`)
        .then( resp => resp.json())
        .then( gameObject => {
            this.setState({
                game: {...gameObject.game},
                follows: [...gameObject.follows],
                comments: [...gameObject.comments]
            })
        })
    }
    
    render() {
    
    return (
        
        <div>

            <div className='profile'>
                <h1>{ this.state.game.name }</h1> <br/>
                <img className='img-fit' src={ this.state.game.image } alt=''/> <br/><br/>
            </div> <br/><br/>

            <div className='font'>
                <p> <strong>Release Date: </strong> { this.state.game.release_date } <br/><br/>
                <strong>Description: </strong> { this.state.game.description } <br/><br/>
                <strong>Rating: </strong> { this.state.game.rating } <br/><br/>
                <strong>Follows: </strong> { this.state.follows.length } <br/><br/>
                </p> <br/><br/>
            </div>

            <div>
                <GameComments 
                    game={ this.state } 
                    findUsername={ this.props.findUsername } 
                    user={this.props.user}
                    newComment={this.newComment}
                />
            </div> <br/> <br/>
                    
            <Button as={ Link } to='/Games'> Go Back </Button>

        </div>
        
        )
    }
}
    
export default ShowGame;
