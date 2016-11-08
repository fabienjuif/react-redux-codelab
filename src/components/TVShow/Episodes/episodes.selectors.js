import sortBy from 'lodash/sortBy'
import { getId } from '../../../redux/router'
import { helpers } from '../../../redux/tvshows'
import { defaultArray } from '../../../redux/defaults'

export const getEpisodes = (state) => {
  const id = Number(getId(state))
  const tvshow = helpers.getById(state, Number(id))
  const episodes = tvshow.episodes || defaultArray

  return sortBy(episodes, ['season', 'number']).reverse()
}
