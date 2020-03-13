import React from 'react'
import superagent from 'superagent'
import AuthForm from './AuthForm'
import { connect } from 'react-redux'
import { login } from './actions'

class LoginForm extends React.Component {
  submit = async (name, password) => {
    this.props.login(name, password)
  }

  render () {
    return <AuthForm
      submit={this.submit}
      description='logged in'
      title='Log in'
    />
  }
}

const mapDispatchToProps = {
  login
}

export default connect(null, mapDispatchToProps)(LoginForm)