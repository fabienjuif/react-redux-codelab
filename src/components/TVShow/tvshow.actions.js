import { getId } from 'redux/router'
import { fetchTvShow } from 'redux/tvshows'
import { addEpisode } from 'redux/episodes'

/* global firebase */
export const connectFirebase = () => (dispatch, getState) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const showId = Number(getId(getState()))
      const ref = firebase.database().ref(`${user.uid}/episodes/${showId}`)

      ref.on('child_added', (data) => { // TODO : detach event on willUnmount
        const id = data.val()
        dispatch(addEpisode(id))
      })
    }
  })
}

export const load = () => (dispatch, getState) => {
  const id = getId(getState())
  dispatch(fetchTvShow(id))
  dispatch(connectFirebase())
}
