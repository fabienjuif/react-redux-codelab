import { getId } from 'redux/router'
import { helpers } from 'redux/tvshows'

export const getEpisodes = (state) => {
  const id = getId(state)
  const tvshow = helpers.getById(state, Number(id))

  return tvshow.episodes
}
