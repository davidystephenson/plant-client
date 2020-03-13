// external dependencies
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

// local dependencies
import Families from './Families'
import Family from './Family'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

// class App extends React.Component {
class App extends Component {
  render () { // draws on the page
    return <main> {/* not HTML. jsx is like HTML but different */}
      <SignupForm /> {/* components not in routes show up everywhere */}
      <LoginForm />
      <Route
        exact
        path='/' 
        component={Families}
      />
      {/*
        <Route
          exact // sets if anything can not come after the path
          // exact={true}
          // not writing "exact" means exact={false}
          path='/' // what must be at the end of the URL
          component={Families} // what shows up at that URL
        />
      */}
      <Route
        path='/family/:id' component={Family}
      />
      {/*
        parameters work like function arguments.
        the paramater's value is set in the url
      */}
    </main>
  }
}

// dont connect the app because it does not use redux
export default App;
