// external
import React from 'react'

// local
import AuthForm from './AuthForm'

export default class AuthFormContainer extends React.Component {
  state = {
    name: '',
    password: '',
    message: ''
  }

  onChange = (key, event) => {
    // const update = {}
    // update[key] = event.target.value

    const update = { [key]: event.target.value }

    this.setState(update)
  }

  onSubmit = async (event) => {
    // stop the page reloading
    event.preventDefault()

    try {
      const { name, password } = this.state
      let message = `You ${this.props.description} as ${name}`
      // we dont save the output because submit
      // does not return anything

      await this.props.submit(name, password)

      // const x = await this.props.submit(name, password)
      // x === undefined


      this.setState({ message })  
      // this.setState({ message: message })
      // when using the short syntax
      // dont forget to check the property's value variable
      // if you don't get the result you expect
    } catch (error) {
      console.error(error)
    }
  }

  // render and componentDidMount do not need
  // to be arrow functions even though they may
  // use 'this'
  render () {
    const { title } = this.props

    const { name, password } = this.state

    const user = { name, password }

    return <AuthForm
      onSubmit={this.onSubmit}
      title={title}
      onChange={this.onChange}
      user={user}
      messsage={this.state.message}
    />
  }
}