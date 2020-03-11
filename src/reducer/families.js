import { ALL_FAMILIES } from '../actions'

// const state = state || []
function reducer (state = [], action = {}) {
  switch (action.type) {
    case ALL_FAMILIES:
      // {
      //   type: ALL_FAMILIES,
      //   payload: [
      //     {
      //       name: 'tree'
      //     },
      //     ...
      //   ]
      // }
      return action.payload
    default:
      return state   
  }
}

export default reducer