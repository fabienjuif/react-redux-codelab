import { getUser } from 'redux/user'
import { addEpisode } from 'redux/episodes'
import { getId } from 'redux/router'

export const add = id => (dispatch, getState) => {
  const user = getUser(getState())
  const showId = Number(getId(getState()))

  firebase.database().ref(`${user.uid}/episodes/${showId}`).push(id)
  dispatch(addEpisode(id))
}
