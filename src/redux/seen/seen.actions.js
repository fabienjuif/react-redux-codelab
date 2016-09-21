export const ADD_SEEN = 'ADD_SEEN'
export const addSeen = (id) => {
  return {
    type: ADD_SEEN,
    payload: id,
  }
}
