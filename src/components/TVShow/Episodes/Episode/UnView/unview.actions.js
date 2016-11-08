import { getUser } from 'redux/user'
import { removeEpisode } from 'redux/episodes'
import { getId } from 'redux/router'

export const remove = id => (dispatch, getState) => {
  const user = getUser(getState())
  const showId = Number(getId(getState()))
  const showRef = firebase.database().ref(`${user.uid}/episodes/${showId}`)

  showRef.once('value', (data) => {
    const val = data.val()
    const keys = Object.keys(val)
    const values = Object.values(val)

    values.forEach((v, idx) => {
      if (v === id) showRef.child(keys[idx]).remove()
    })
  })
  dispatch(removeEpisode(id))
}
