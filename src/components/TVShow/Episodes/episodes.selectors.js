import sortBy from 'lodash/sortBy'
import { createSelector } from 'reselect'
import { getId } from 'redux/router'
import { helpers, getTVShows } from 'redux/tvshows'
import { defaultArray } from 'redux/defaults'

export const getEpisodes = createSelector(
  [getId, getTVShows],
  (id, tvshows) => {
    const tvshow = helpers.getById({ tvshows }, Number(id))
    const episodes = tvshow.episodes || defaultArray

    return sortBy(episodes, ['season', 'number']).reverse()
  }
)

/* export const getEpisodes = (state) => {
  const id = Number(getId(state))
  const tvshow = helpers.getById(state, Number(id))
  const episodes = tvshow.episodes || defaultArray

  return sortBy(episodes, ['season', 'number']).reverse()
} */
