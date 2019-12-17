import React, { Component } from 'react';

const ShowGame = (props) => {

    console.log('this', props)

    return (
        <div>
            <button onClick={ props.test }>Go Back</button>
        </div>
    )
}

export default ShowGame