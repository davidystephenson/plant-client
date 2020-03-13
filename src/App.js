import React, { Component } from 'react';
import Families from './Families'
import Family from './Family'
import { Route } from 'react-router-dom'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

// class App extends React.Component {
class App extends Component {
  render () {
    return <main>
      <SignupForm />
      <LoginForm />
      <Route exact path='/' component={Families} />
      <Route path='/family/:id' component={Family} />
    </main>
  }
}

export default App;
