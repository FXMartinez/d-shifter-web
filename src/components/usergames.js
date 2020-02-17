import React from 'react';
import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserGames extends React.Component {

    state = {
        user: {}
    }

    componentWillMount(){
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`)
            .then( resp => resp.json())
            .then( data => this.setState({
                user: {...data}
            })
         )
    }

    render() {

        console.log('user games', this.state.user)

    return (

            <div>

                <div className='profile'>
                    { 
                    this.props.user.image 
                    ? 
                    <img src={ this.props.user.image } alt='' className='img-fit' /> 
                    : 
                    <img src='https://muhka-ensembles.imgix.net/assets/public/000/017/626/large/blank.png?w=768&h=768&dpr=2.625&ch=DPR&auto=format%2Ccompress' alt='' className='img-fit' /> 
                } <br/>
                    <Header as='h3'>
                        {this.props.user.username}
                    </Header> <br/>
                    {/* active: {props.user.active} <br/>
                    sex: { props.user.sex } <br/>
                    bio: { props.user.bio } <br/> */}
                </div>

                <div className='account-comments'>  
                    <Header as='h3' dividing>
                        <Link to='/Account'> Comments </Link> | <Link to='/UserGames'> Games </Link>
                    </Header>

                    {/* { this.state.user.games.map( (game) => { return <p> { game.name } </p> } ) } */}
                
                </div>

            </div>
        )
    }
}

export default UserGames;