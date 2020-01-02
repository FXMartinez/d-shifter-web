import React from 'react'
import { Divider, Segment, Grid, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import DividerComp from '../components/divider'
// import { Button, Comment, Form, Header } from 'semantic-ui-react'


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

    // console.log('comment', this.state.game)
    // console.log('comment', this.state.user)

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


  )} // end of render
} // end of class

export default CommentSection;

// <div className='home'>
      //   {/* <div className='game-title'>
      //   </div> */}
      //   <h3>
      //     <Link> 
      //       @{this.state.user.username}
      //     </Link> 
      //   </h3>
      //   <div>
      //     {this.props.comment.content}
      //   </div>


// <Comment.Group threaded>
//   <Header as='h3' dividing>
//     Comments
//   </Header>

//   <Comment>
//     <Comment.Avatar as='a' src='/images/avatar/small/matt.jpg' />
//     <Comment.Content>
//       <Comment.Author as='a'>Matt</Comment.Author>
//       <Comment.Metadata>
//         <span>Today at 5:42PM</span>
//       </Comment.Metadata>
//       <Comment.Text>How artistic!</Comment.Text>
//       <Comment.Actions>
//         <a>Reply</a>
//       </Comment.Actions>
//     </Comment.Content>
//   </Comment>

//   <Comment>
//     <Comment.Avatar as='a' src='/images/avatar/small/elliot.jpg' />
//     <Comment.Content>
//       <Comment.Author as='a'>Elliot Fu</Comment.Author>
//       <Comment.Metadata>
//         <span>Yesterday at 12:30AM</span>
//       </Comment.Metadata>
//       <Comment.Text>
//         <p>This has been very useful for my research. Thanks as well!</p>
//       </Comment.Text>
//       <Comment.Actions>
//         <a>Reply</a>
//       </Comment.Actions>
//     </Comment.Content>

//     <Comment.Group>
//       <Comment>
//         <Comment.Avatar as='a' src='/images/avatar/small/jenny.jpg' />
//         <Comment.Content>
//           <Comment.Author as='a'>Jenny Hess</Comment.Author>
//           <Comment.Metadata>
//             <span>Just now</span>
//           </Comment.Metadata>
//           <Comment.Text>Elliot you are always so right :)</Comment.Text>
//           <Comment.Actions>
//             <a>Reply</a>
//           </Comment.Actions>
//         </Comment.Content>
//       </Comment>
//     </Comment.Group>
//   </Comment>

//   <Comment>
//     <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
//     <Comment.Content>
//       <Comment.Author as='a'>Joe Henderson</Comment.Author>
//       <Comment.Metadata>
//         <span>5 days ago</span>
//       </Comment.Metadata>
//       <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
//       <Comment.Actions>
//         <a>Reply</a>
//       </Comment.Actions>
//     </Comment.Content>
//   </Comment>

//   <Form reply>
//     <Form.TextArea />
//     <Button content='Add Reply' labelPosition='left' icon='edit' primary />
//   </Form>

// </Comment.Group>
