import React from 'react'

export default class AuthForm extends React.Component {
  render () {
    const {
      title: label, // control variable names when destructuring
      onSubmit, // callback props
      onChange, // callback props
      user, // custom defined object
      message
    } = this.props

    return <form onSubmit={onSubmit}>
      <h4>{label}</h4>

      <h5>Name</h5>
      <input
        onChange={event => {
          // this is an enclosure

          // if you want to do multiple things inside of an arrow
          // function (for example, log and then call another function)
          // you must add a body with curly braces
          console.log('event.target test:', event.target)
          onChange('name', event)
        }}
        type='text'
        value={user.name}
      />

      <h5>Password</h5>

      {/* this input also uses an enclosure. You can write neat enclosure */}
      <input
        onChange={event => onChange('password', event)}
        type='text'
        value={user.password}
      />

      <button>{label}</button>

      <p>{message}</p>
    </form>
  }
}