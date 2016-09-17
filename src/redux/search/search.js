import { SET_SEARCH, SET_RESULTS } from './search.actions'

export const initState = { text: '', results: [] }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_SEARCH: return { ...state, text: action.payload }
    case SET_RESULTS: return { ...state, results: action.payload }
    default: return state
  }
}
