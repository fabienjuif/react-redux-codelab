import { API_URL } from '../constants'

export const ADD_TVSHOW = 'ADD_TVSHOW'
export const addTVShow = (tvshow) => {
  return {
    type: ADD_TVSHOW,
    payload: tvshow,
  }
}

export const fetchTvShow = id => (dispatch) => {
  fetch(`${API_URL}shows/${id}`)
    .then(raw => raw.json())
    .then(tvshow => dispatch(addTVShow(tvshow)))
}
