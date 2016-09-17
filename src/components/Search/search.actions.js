import { setText, setResults } from 'redux/search'

export const search = value => (dispatch) => {
  dispatch(setText(value))

  fetch(`http://api.tvmaze.com/search/shows?q=${value}`)
    .then(raw => raw.json())
    .then(shows => dispatch(setResults(shows)))
}
