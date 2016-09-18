import { getId } from 'redux/router'
import { setTVShow } from 'redux/tvshow'

export const load = () => (dispatch, getState) => {
  const id = getId(getState())

  fetch(`http://api.tvmaze.com/shows/${id}`)
    .then(raw => raw.json())
    .then(tvshow =>
      fetch(`http://api.tvmaze.com/shows/${id}/episodes`)
        .then(raw => raw.json())
        .then(episodes => dispatch(setTVShow({ ...tvshow, episodes })))
    )
}
