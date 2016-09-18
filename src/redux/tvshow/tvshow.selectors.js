import { defaultShow, defaultImage } from '../defaults'

// TODO : tests
export const getTVShow = state => state.tvshow
export const getEpisodes = state => getTVShow(state).episodes
export const getEpisode = (state, id) => getEpisodes(state).find(e => e.id === id)

export const helpers = {
  getImage: (tvshow = defaultShow) => (tvshow.image || defaultImage).medium,
  enhanceTVShow: (tvshow = defaultShow) => {
    return { ...tvshow, image: helpers.getImage(tvshow) }
  },
}
