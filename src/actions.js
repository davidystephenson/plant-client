import superagent from 'superagent'

export const ALL_FAMILIES = 'ALL_FAMILIES'

function allFamilies (families) {
  return {
    type: ALL_FAMILIES,
    payload: families
  }
}

export function getAllFamilies () {
  return async function (dispatch) {
    try {
      const response = await superagent
        .get('http://localhost:4000/family')

      const action = allFamilies(response.body)

      dispatch(action)
    } catch (error) {
      console.error(error)
    }
  }
}