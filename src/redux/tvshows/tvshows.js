import { ADD_TVSHOW } from './tvshows.actions'

export const initState = []
export const initAction = { type: 'UNKNOWN' }

// TODO : handle duplicate network call when firebase has duplicate objects
export default (state = initState, action = initAction) => {
  switch (action.type) {
    case ADD_TVSHOW: return [...state, action.payload]
    default: return state
  }
}
