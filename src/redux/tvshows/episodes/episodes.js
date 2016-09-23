import { SET_EPISODES } from './episodes.actions'

export const initState = []
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_EPISODES: return action.payload.episodes
    default: return state
  }
}
