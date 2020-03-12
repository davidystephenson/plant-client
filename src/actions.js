import superagent from 'superagent'

export const ALL_FAMILIES = 'ALL_FAMILIES'

function allFamilies (families) {
  return {
    type: ALL_FAMILIES,
    payload: families
  }
}

export function getAllFamilies () {
  return async function (dispatch, getState) {
    try {
      const state = getState()

      const { families } = state

      const condition = families.length

      if (condition) {
        console.log('end early')
        return null
      }

      console.log('keep going')

      const response = await superagent
        .get('http://localhost:4000/family')

      const action = allFamilies(response.body)

      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export const NEW_FAMILY = 'NEW_FAMILY'

function newFamily (family) {
  return {
    type: NEW_FAMILY,
    payload: family
  }
}

export function createNewFamily (name, location) {
  console.log('createNewFamily test')
  return async function (dispatch) {
    try {
      // Make the body
      // must be a single object
      const body = { name, location }

      // send the request
      // don't foret to await the response
      // and attach the body with .send
      const response = await superagent
        .post('http://localhost:4000/family')
        .send(body)

      // according to REST principles,
      // the entity (database row) you added
      // should be in the body of the response
      // create a custom action object
      const action = newFamily(response.body)

      // send the action object to the reducer
      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}

export const CHANGE_FAMILY = 'CHANGE_FAMILY'

function changeFamily (newFamily) {
  return {
    type: CHANGE_FAMILY,
    payload: newFamily
  }
}

export function updateFamily (id, update) {
  return async function (dispatch) {
    try {
      const response = await superagent
        .put(`http://localhost:4000/family/${id}`)
        .send(update)

      const action = changeFamily(response.body)

      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}