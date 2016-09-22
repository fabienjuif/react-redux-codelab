import { getId } from 'redux/router'
import { helpers } from 'redux/tvshows'
import { getEpisodes } from 'redux/episodes'
import { add } from '../View/view.actions'

export const tohere = id => (dispatch, getState) => {
  const seen = getEpisodes(getState())
  const showId = Number(getId(getState()))

  const episodes = helpers.getById(getState(), showId).episodes
    // Only unseen episodes
    .filter(e => seen.find(s => s === e.id) === undefined)

  let lastId
  for (let i = 0; i < episodes.length && lastId !== id; i += 1) {
    lastId = episodes[i].id
    dispatch(add(lastId))
  }
}
