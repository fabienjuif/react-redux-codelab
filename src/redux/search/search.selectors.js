import { helpers } from '../tvshow'
import { defaultObject } from '../defaults'

export const getSearch = state => state.search
export const getResults = state => getSearch(state).results
export const getText = state => getSearch(state).text

export const getShow = (state, id) => {
  const result = getResults(state).find(r => r.show.id === id) || defaultObject
  return helpers.enhanceTVShow(result.show)
}
