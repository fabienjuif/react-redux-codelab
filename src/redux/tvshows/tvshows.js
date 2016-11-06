import findIndex from 'lodash/findIndex'
import { ADD_TVSHOW } from './tvshows.actions'
import episodes, { SET_EPISODES } from './episodes'

export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_EPISODES: {
      const idx = findIndex(state, ['id', action.payload.id])
      if (idx === -1) return state

      const newState = [...state]
      newState[idx] = { ...newState[idx], episodes: episodes(newState[idx.episodes], action) }

      return newState
    }
    case ADD_TVSHOW: return [...state, action.payload]
    default: return state
  }
}
