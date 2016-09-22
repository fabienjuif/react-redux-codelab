import { setText } from 'redux/search'
import { addTVShow } from 'redux/tvshows'
import { setResults } from 'redux/results'
import { getTitle } from 'redux/router'
import { API_URL } from 'redux/constants'
import { PUSH } from 'redux-little-router'

export const search = value => (dispatch, getState) => {
  dispatch(setText(value))

  fetch(`${API_URL}search/shows?q=${value}`)
    .then(raw => raw.json())
    .then((results) => {
      dispatch(setResults(results.map(result => result.show.id)))

      results.forEach(result => dispatch(addTVShow(result.show)))
    })

  const title = getTitle(getState())
  if (title !== 'HOME') {
    dispatch({
      type: PUSH,
      payload: '/',
    })
  }
}
