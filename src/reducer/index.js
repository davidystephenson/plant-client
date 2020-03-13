import { combineReducers } from 'redux'
import families from './families'
import user from './user'

const reducer = combineReducers({
  families,
  user
})

export default reducer