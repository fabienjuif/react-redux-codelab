import { ADD_EPISODE } from './episodes.actions'

export const initState = []
export const initAction = { type: 'UNKOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case ADD_EPISODE: return [...state, action.payload]
    default: return state
  }
}
