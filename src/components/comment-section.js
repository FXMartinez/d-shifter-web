import React from 'react'
import DividerComp from '../components/divider'
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

    // console.log(this.state.user.username)

    return (

      <div className='home'>
        <div className='game-title'>
          <h1>
            {this.state.game.name}
          </h1>
        </div>
        <h3>
          @{this.state.user.username}
        </h3>
        <div>
          {this.props.comment.content}
        </div>
        <DividerComp></DividerComp>
      </div>
  )}
}

export default CommentSection;




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
