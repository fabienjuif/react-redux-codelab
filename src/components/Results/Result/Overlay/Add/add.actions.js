import { getUser } from 'redux/user'

export const add = id => (dispatch, getState) => {
  const user = getUser(getState())

  firebase.database().ref(`${user.uid}/tvshows`).push(id)
}
