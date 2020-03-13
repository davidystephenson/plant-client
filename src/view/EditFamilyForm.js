import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  updateFamily,
} from '../actions'

class EditFamilyForm extends Component {
  state = {
    name: '',
    location: ''
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

    this.props.updateFamily(
      this.props.match.params.id,
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

  render () {
    console.log('this.props.test:', this.props)
    
    return <form onSubmit={this.onSubmit}>
      <div>
        Name
        {' '}
        <input
          type='text'
          name='name'
          onChange={this.onChange}
          value={this.state.name}
        />
      </div>

      <div>
        Location
        {' '}
        <input
          type='text'
          name='location'
          value={this.state.location}
          onChange={this.onChange}
        />
      </div>

      <div>
        <button>Edit</button>
      </div>
    </form>
  }
}

// Putting data into the store
// Downloading
// Storing
// Organizing
const mapDispatchToProps = {
  updateFamily
}

// const connector = connect()
// const connected = connector(App)
// export default connected
export default connect(null, mapDispatchToProps)(EditFamilyForm)