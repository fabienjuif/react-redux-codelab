import { getUser } from 'redux/user'
import { removeEpisode } from 'redux/episodes'
import { getId } from 'redux/router'

export const remove = id => (dispatch, getState) => {
  const user = getUser(getState())
  const showId = Number(getId(getState()))
  // FIXME(unview): get the firebase reference

  /* FIXME(unview)
  showRef.once('value', (data) => {
    const val = data.val()
    const keys = Object.keys(val)
    const values = Object.values(val)

    values.forEach((v, idx) => {
      if (v === id) // FIXME(unview): call child(key).remove() from firebase
    })
  })
  */
  dispatch(removeEpisode(id))
}
