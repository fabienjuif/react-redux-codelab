import { getEpisodes } from '../episodes.selectors'

export const getEpisode = (state, id) => {
  const episodes = getEpisodes(state)

  return episodes.find(e => e.id === id)
}
