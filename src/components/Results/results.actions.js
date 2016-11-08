import { fetchTvShow } from 'redux/tvshows'
import { addSeen } from 'redux/seen'

export const connectFirebase = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const ref = firebase.database().ref(`${user.uid}/tvshows`)

      ref.on('child_added', (data) => {
        const id = Number(data.val())
        dispatch(addSeen(id))
        dispatch(fetchTvShow(id))
      })
    }
  })
}
