import React from 'react'
import AuthFormContainer from './AuthFormContainer'

// any component that uses redux data or redux actions
// must be connected
import { connect } from 'react-redux'
import { login } from '../actions'

class LoginForm extends React.Component {
  // this is an enclosure
  // an enclosure is a function that wraps
  // another function call so it can be used
  // at the right time
  submit = async (name, password) => {
    this.props.login(name, password)
  }

  render () {
    // callback methods, like all other callbacks,
    // must be passed as function definitions,
    // not funciton calls. Don't include the
    // parentheses when passing a callback. If
    // you need to define arguments to the callback,
    // you must use an enclosure
    return <AuthFormContainer
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