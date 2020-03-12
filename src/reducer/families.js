import {
  ALL_FAMILIES,
  NEW_FAMILY,
  CHANGE_FAMILY
} from '../actions'

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
    case NEW_FAMILY:
      return [action.payload, ...state]
    case CHANGE_FAMILY:
      const newState = state.map(family => {
        const condition = family.id === action.payload.id

        if (condition) {
          return action.payload
        }

        return family
      })

      return newState
    default:
      return state   
  }
}

export default reducer