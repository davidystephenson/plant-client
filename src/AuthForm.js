import React from 'react'
import superagent from 'superagent'

export default class AuthForm extends React.Component {
  state = {
    name: '',
    password: '',
    message: ''
  }

  onChange (key, event) {
    this.setState({ [key]: event.target.value })
  }

  onSubmit = async (event) => {
    event.preventDefault()

    try {
      const { name, password } = this.state
      await this.props.submit(name, password)

      const message = `You ${this.props.description} as ${name}`

      this.setState({ message })  
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { title } = this.props

    return <form onSubmit={this.onSubmit}>
      <h4>{title}</h4>

      <h5>Name</h5>
      <input
        onChange={event => {
          console.log('event.target test:', event.target)
          this.onChange('name', event)
        }}
        type='text'
        value={this.state.name}
      />

      <h5>Password</h5>
      <input
        onChange={event => this.onChange('password', event)}
        type='text'
        value={this.state.password}
      />

      <button>{title}</button>

      <p>{this.state.message}</p>
    </form>
  }
}