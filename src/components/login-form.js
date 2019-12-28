import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
// import SignupForm from '../components/signup-form';

class LoginForm extends React.Component {

  state = {
    username: '',
    password: ''
  }

  usernameHandler = (e) => {
    this.setState({
      username: e.target.value
    })
    // console.log(e.target.value)
  }

  passwordHandler = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  render () {

    return (


  <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        {/* <Image src='/logo.png' />  */}
        Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' onChange={this.usernameHandler}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.passwordHandler}
          />

          <Button color='black' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>

      <Message>
        New to us? <Link to='http://localhost:3001/SignupForm'> Sign Up </Link>
      </Message>

    </Grid.Column>
  </Grid>
  
  )}
}

export default LoginForm