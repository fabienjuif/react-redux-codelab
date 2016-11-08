import { setText } from '../../../redux/search'
import { addTVShow } from '../../../redux/tvshows'
import { setResults } from '../../../redux/results'
import { API_URL } from '../../../redux/constants'

export const fetchTVShows = (text, dispatch) => {
  fetch(`${API_URL}search/shows?q=${text}`)
    .then(raw => raw.json())
    .then((results) => {
      dispatch(setResults(results.map(result => result.show.id)))

      results.forEach(result => dispatch(addTVShow(result.show)))
    })
}

export const search = (value, dispatch) => {
  dispatch(setText(value))
  fetchTVShows(value, dispatch)
}
