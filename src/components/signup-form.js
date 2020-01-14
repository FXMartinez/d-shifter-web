import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

class SignupForm extends React.Component {

  render () {

    return (


  <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Create Account
      </Header>
      <Form size='large' >
        <Segment stacked>

          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='Username' 
            onChange={this.props.usernameHandler}
          />

          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={this.props.passwordHandler}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Confirm Password'
            type='password'
            onChange={this.props.confirmPasswordHandler}
          />

          <Button color='black' fluid size='large' type='submit' onClick={ this.props.createUser } as={ Link } to={'/'}>
            Submit
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  
  )}
}

export default SignupForm;