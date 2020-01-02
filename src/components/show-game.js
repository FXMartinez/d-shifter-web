// import React, { useEffect, useState } from 'react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'
import GameComments from './game-comments';


class ShowGame extends React.Component {

    state = {
        game: {},
        follows: [],
        comments: []
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
    // console.log('outside', this.state.game)
    
    return (
        
        <div>
        
            <h1>{ this.state.game.name }</h1> <br/>
            <img src={ this.state.game.image } alt=''/> <br/>
                <p> Release Date: { this.state.release_date } <br/>
                Description: { this.state.game.description } <br/>
                Rating: { this.state.game.rating } <br/>
                Follows: { this.state.follows.length } <br/>
                </p> <br/><br/>
                <div>
                    <GameComments 
                        game={ this.state } 
                        findUsername={ this.props.findUsername } 
                        user={this.props.user}
                        newComment={this.props.newComment}
                    />
                </div>
                    
            <Button as={ Link } to='/Dopegames'> Go Back </Button>

        </div>
        
        )
    }
}
    
export default ShowGame;
