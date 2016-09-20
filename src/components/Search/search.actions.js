import { setText, setResults } from 'redux/search'
import { API_URL } from 'redux/constants'

export const search = value => (dispatch) => {
  dispatch(setText(value))

  fetch(`${API_URL}search/shows?q=${value}`)
    .then(raw => raw.json())
    .then(shows => dispatch(setResults(shows)))
}
