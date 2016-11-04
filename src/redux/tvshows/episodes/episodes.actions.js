import { API_URL } from '../../constants'

export const SET_EPISODES = 'SET_EPISODES'
export const setEpisodes = (id, episodes) => {
  return {
    type: SET_EPISODES,
    payload: {
      id,
      episodes,
    },
  }
}

export const fetchEpisodes = id => (dispatch) => {
  fetch(`${API_URL}shows/${id}/episodes`)
    .then(raw => raw.json())
    .then(episodes => dispatch(setEpisodes(id, episodes)))
}
