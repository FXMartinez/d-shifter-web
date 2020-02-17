import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'


class GameComments extends React.Component {

    state = {
        comment: null,
        newComment: null
    }

    userFound = (userId) => {
      let user = this.props.findUsername(userId)
      console.log('in function', userId)
      return user.username
    }

    commentHandler = (e) => {
      this.setState({
        comment: e.target.value
      })
      console.log(this.state.comment)
    }

    resetForm = () => {
      document.getElementById('comment-field').reset();
    }

    submitComment = () => {
      this.state.comment
      ?
      fetch('http://localhost:3000/api/v1/comments/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
          body: JSON.stringify({
            user_id: this.props.user.id,
            game_id: this.props.game.game.id,
            content: this.state.comment
          })
        })
        .then(resp => resp.json())
        .then( data => {
          this.props.newComment(data)
        },
        this.resetForm())
        :
        alert('You cannot submit an empty comment')
    }
      
    render() {

        return (

        <Comment.Group>
            <Header as='h3' dividing>
            Comments
            </Header>

            <Form onChange={ this.commentHandler } id='comment-field'>
              <Form.TextArea />
              <Button content='Add Comment' type='submit' labelPosition='left' icon='edit' onClick={this.submitComment} primary />
            </Form>

            {this.props.game.comments.map(comment => {
                return  <Comment>
                        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>{ this.userFound(comment.user_id) }</Comment.Author>
                                <Comment.Metadata>
                                </Comment.Metadata>
                                <Comment.Text> { comment.content } </Comment.Text> <br/>
                            </Comment.Content>
                        </Comment>
            })}


        </Comment.Group>
        )
    }
}

export default GameComments;