import { getId } from 'redux/router'
import { fetchTvShow } from 'redux/tvshows'
import { addEpisodes } from 'redux/episodes'

/* global firebase */
export const connectFirebase = () => (dispatch, getState) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const showId = Number(getId(getState()))
      const ref = firebase.database().ref(`${user.uid}/episodes/${showId}`)

      ref.once('value', (data) => {
        const episodes = Object.values(data.val())
        dispatch(addEpisodes(episodes))
      })
    }
  })
}

export const load = () => (dispatch, getState) => {
  const id = Number(getId(getState()))
  dispatch(fetchTvShow(id))
  dispatch(connectFirebase())
}
