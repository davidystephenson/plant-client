import React, { Component } from 'react';
import { connect } from 'react-redux'

import Family from './Family'
import {
  getAllFamilies,
  createNewFamily
} from './actions'

// class App extends React.Component {
class App extends Component {
  state = {
    name: '',
    location: ''
  }

  async componentDidMount () {
    this.props.getAllFamilies()
  }

  onSubmit = event => {
    event.preventDefault()
    // Send a POST request to the server
    // Include the name and location in the body

    console.log('submit test')

    this.props.createNewFamily(
      this.state.name,
      this.state.location
    )
  }

  onChange = event => {
    const { value, name } = event.target
    // const value = event.target.value
    // const name = event.target.name

    const update = { [name]: value }

    this.setState(update)
  }

  onChangeEnclosed = (key, value) => {
    this.setState({ [key]: value })
  }

  reset = () => {
    this.setState({ name: '', location: '' })
  }

  render () {
    const families = this
      .props
      .familiesList
      .map(family => <Family
        key={family.id}
        family={family}
      />)

    return <main>
      <form onSubmit={this.onSubmit}>
        <label>
          <h3>Name</h3>
          <input
            type='text'
            name='name'
            onChange={this.onChange}
            value={this.state.name}
          />
        </label>

        <label>
          <h3>Location</h3>
          <input
            type='text'
            value={this.state.location}
            onChange={
              event => {
                this.onChangeEnclosed(
                  'location',
                  event.target.value
                )
              }
            }
          />
        </label>

        <div>
          <button>Submit</button>
        </div>
      </form>

      <button onClick={this.reset}>Reset</button>

      {families}
    </main>
  }
}

// Getting data out of the store
// Reading
// Drawing
// Using
function mapStateToProps (reduxState) {
  // Add a prop to my component named "familiesList"
  // with the same value as the "families" property
  // of the Redux state
  return {
    familiesList: reduxState.families
  }
}

// Putting data into the store
// Downloading
// Storing
// Organizing
const mapDispatchToProps = {
  getAllFamilies,
  createNewFamily
}

// const connector = connect()
// const connected = connector(App)
// export default connected
export default connect(mapStateToProps, mapDispatchToProps)(App);
