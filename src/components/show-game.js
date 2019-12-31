import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

// let game;

function ShowGame({match}) {
    
    useEffect(() => {
        fetchItem();
        // console.log('show game', match);
    }, []);
    
    const [item, setItem] = useState({
        game: {},
        follows: [],
        comments: []
    });
    
    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:3000/api/v1/games/${match.params.id}`)
        const item = await fetchItem.json();
        setItem(item);
        console.log('show game', item)
    }
    

    console.log('outside', item)
    return (
        <div>
            
            <h1>{item.game.name}</h1>
            <img src={item.game.image} alt=''/>
            <p> Release Date: {item.game.release_date} </p>
            <p> Description: {item.game.description} </p>
            <p> Rating: {item.game.rating} </p>
            <p> Follows: {item.follows.length} </p>
            <p> Comments: 
            {item.comments.map(comment => {
                return <p> {comment.content} </p>
            })}
            </p>    


            <Button as={ Link } to='/Dopegames'> Go Back </Button>
        </div>
    )
}

export default ShowGame

