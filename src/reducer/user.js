import {
  LOGGED_IN,
} from '../actions'

// const state = state || []
function reducer (state = '', action = {}) {
  switch (action.type) {
    case LOGGED_IN:
      return action.payload
    default:
      return state   
  }
}

export default reducer