import { setUser, resetUser, isConnected } from 'redux/user'

/* global firebase */
export const login = () => (dispatch, getState) => {
  if (isConnected(getState())) return

  const provider = new firebase.auth.GoogleAuthProvider()

  firebase.auth().signInWithPopup(provider)
    .then(user => dispatch(setUser(user.user)))
    .catch(console.error)
}

export const retrieveLogin = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(setUser(user))
    } else {
      dispatch(resetUser())
    }
  })
}
