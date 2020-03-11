import React, { Component } from 'react';
import superagent from 'superagent'
import { connect } from 'react-redux'
import { getAllFamilies } from './actions'

// class App extends React.Component {
class App extends Component {
  async componentDidMount () {
    this.props.getAllFamilies()
  }

  render () {
    console.log('this.props test:', this.props)
    const families = this
      .props
      .familiesList
      .map(family => <div key={family.id}>
        <h1>{family.name}</h1>
        <p>{family.location}</p>
      </div>)

    return <div>{families}</div>
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
  getAllFamilies
}

// const connector = connect()
// const connected = connector(App)
// export default connected
export default connect(mapStateToProps, mapDispatchToProps)(App);
