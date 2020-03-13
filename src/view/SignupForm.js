import React from 'react'
import superagent from 'superagent'

// The AuthForm does all the real work
// SignupForm just defines a few customizations
import AuthFormContainer from './AuthFormContainer'

export default class SignupForm extends React.Component {
  // runs in the middle of AuthFormContainer.onSubmit
  submit = async (name, password) => { 
    try {
      // the POST endpoint will use the body
      // to define the fields of the table row
      const entity = { name, password }

      // normally we send requests using redux-thunk
      // we send directly here because we do not interact
      // with the redux store
      await superagent
        .post(`http://localhost:4000/user`)
        .send(entity)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return <AuthFormContainer
      submit={this.submit}
      description='signed up'
      title='Sign up'
    />
  }
}