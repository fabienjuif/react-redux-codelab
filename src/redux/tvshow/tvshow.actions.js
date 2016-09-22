import { API_URL } from '../constants'

export const SET_TVSHOW = 'SET_TVSHOW'
export const setTVShow = (tvshow) => {
  return {
    type: SET_TVSHOW,
    payload: tvshow,
  }
}

export const fetchTvShow = id => (dispatch) => {
  fetch(`${API_URL}shows/${id}`)
    .then(raw => raw.json())
    .then(tvshow =>
      fetch(`${API_URL}shows/${id}/episodes`)
        .then(raw => raw.json())
        .then(episodes => dispatch(setTVShow({ ...tvshow, episodes })))
    )
}
