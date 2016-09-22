import { getUser } from 'redux/user'
import { addEpisode } from 'redux/episodes'

// TODO : move global into eslintrc
/* global firebase */
export const add = id => (dispatch, getState) => {
  const user = getUser(getState())

  firebase.database().ref(`${user.uid}/episodes`).push(id)
  dispatch(addEpisode(id))
}
