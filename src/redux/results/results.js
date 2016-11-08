import { SET_RESULTS } from './results.actions'

export const initState = []
export const initAction = {}

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_RESULTS: return action.payload
    default: return state
  }
}
