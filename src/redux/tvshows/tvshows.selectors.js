import { defaultShow, defaultImage } from '../defaults'

export const getTVShows = state => state.tvshows
export const helpers = {
  getImage: (tvshow = defaultShow) => (tvshow.image || defaultImage).medium,
  enhanceTVShow: (tvshow = defaultShow) => {
    return { ...tvshow, image: helpers.getImage(tvshow) }
  },
  getById: (state, id) => helpers.enhanceTVShow(getTVShows(state).find(tvshow => tvshow.id === id)),
}
