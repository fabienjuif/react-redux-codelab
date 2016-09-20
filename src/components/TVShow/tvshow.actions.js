import { getId } from 'redux/router'
import { setTVShow } from 'redux/tvshow'
import { API_URL } from 'redux/constants'

export const load = () => (dispatch, getState) => {
  const id = getId(getState())

  fetch(`${API_URL}shows/${id}`)
    .then(raw => raw.json())
    .then(tvshow =>
      fetch(`${API_URL}shows/${id}/episodes`)
        .then(raw => raw.json())
        .then(episodes => dispatch(setTVShow({ ...tvshow, episodes })))
    )
}
