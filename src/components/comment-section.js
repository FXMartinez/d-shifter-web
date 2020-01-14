import React from 'react'
import { Divider, Segment, Grid, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CommentSection extends React.Component {
  
  state = {
    newComment: '',
    game: {},
    user: {}
  }

  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/comments/${this.props.comment.id}`)
      .then( resp => resp.json() )
      .then( data => {
        this.setState({
          game: {...data.game},
          user: {...data.user}
        })
      })
  }

  render() {

    const goTo = {
      pathname: `/Account/${this.state.user.username}`,
      param1: this.state.user
    }


    return (
      
      <div>

        <Segment basic textAlign='center'>
          <Divider horizontal> <h3> <Link to={`/Games/${this.state.game.id}`}> {this.state.game.name} </Link> </h3> </Divider>
        </Segment>

        <Grid>
          <Grid.Column width={2}>
            {
              this.state.user.image
              ?
              <Image src={ this.state.user.image } />
              :
              <Image src='https://muhka-ensembles.imgix.net/assets/public/000/017/626/large/blank.png?w=768&h=768&dpr=2.625&ch=DPR&auto=format%2Ccompress'/>
            }
          </Grid.Column>
            <Grid.Column width={12}>
              <h3>
                <Link to={ goTo }> 
                  {`@${this.state.user.username}`}
                </Link> 
              </h3>
              <div>
                {this.props.comment.content}
              </div>
            </Grid.Column>
          </Grid>

          <Header as='h3' dividing></Header>
      
      </div>


  )}
}

export default CommentSection;