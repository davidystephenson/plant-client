import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  updateFamily,
  getAllFamilies
} from './actions'
import EditFamilyForm from './EditFamilyForm'
import { Route } from 'react-router-dom'

class Family extends Component {
  state = {
    name: '',
    location: ''
  }

  componentDidMount () {
    this.props.getAllFamilies()
  }

  onSubmit = event => {
    event.preventDefault()

    // Send a PUT request to the server
    // Include the new name and new location
    // in the body
    const update = {
      name: this.state.name,
      location: this.state.location
    }

    const family = this.pickFamily()
    this.props.updateFamily(
      family.id,
      update
    )

    console.log('submit test')
  }

  onChange = event => {
    const { value, name } = event.target
    // const value = event.target.value
    // const name = event.target.name

    const update = { [name]: value }

    this.setState(update)
  }

  reset = () => {
    this.setState({ name: '', location: '' })
  }

  pickFamily (props) {
    const { familiesList, match } = this.props

    if (match) {
      if (!familiesList.length) {
        return 'Loading...' 
      }

      const { id } = match.params
      const idNumber = parseInt(id)

      console.log('familiesList test:', familiesList)
      console.log('id test:', id)

      const idFamily = familiesList
        .find(family => family.id === idNumber)

      console.log('idFamily test:', idFamily)

      return idFamily
    }

    return this.props.family
  }

  render () {
    console.log('this.props.test:', this.props)
    
    const family = this.pickFamily()
    
    console.log('family test:', family)

    return <div>
      <marquee>{family.name}</marquee>

      <p>{family.location}!</p>

      <Route path='/family/:id' component={EditFamilyForm} />
    </div>
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
  updateFamily,
  getAllFamilies
}

// const connector = connect()
// const connected = connector(App)
// export default connected
export default connect(mapStateToProps, mapDispatchToProps)(Family)