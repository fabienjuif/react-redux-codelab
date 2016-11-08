import uniq from 'lodash/uniq'
import { ADD_EPISODE, ADD_EPISODES, REMOVE_EPISODE } from './episodes.actions'

export const initState = []
export const initAction = { type: 'UNKOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case REMOVE_EPISODE: return [...state].filter(id => id !== action.payload)
    case ADD_EPISODE: return uniq([...state, action.payload])
    case ADD_EPISODES: return uniq([...state, ...action.payload])
    default: return state
  }
}
