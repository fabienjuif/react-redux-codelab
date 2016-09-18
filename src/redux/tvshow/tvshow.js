import { SET_TVSHOW } from './tvshow.actions'

export const initState = {}
export const initAction = { type: 'UNKNOWN_ACTION' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_TVSHOW: return action.payload
    default: return state
  }
}
