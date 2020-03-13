import React from 'react'
import superagent from 'superagent'
import AuthForm from './AuthForm'

export default class SignupForm extends React.Component {
  submit = async (name, password) => {
    try {
      const body = { name, password }

      await superagent
        .post(`http://localhost:4000/user`)
        .send(body)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    return <AuthForm
      submit={this.submit}
      description='signed up'
      title='Sign up'
    />
  }
}