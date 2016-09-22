import { getId } from 'redux/router'
import { fetchTvShow } from 'redux/tvshows'

export const load = () => (dispatch, getState) => {
  const id = getId(getState())
  dispatch(fetchTvShow(id))
}
