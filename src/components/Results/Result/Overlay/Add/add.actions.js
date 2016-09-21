import { getUser } from 'redux/user'

// TODO : move global into eslintrc
/* global firebase */
export const add = id => (dispatch, getState) => {
  const user = getUser(getState())

  firebase.database().ref(user.uid).push(id)
}
