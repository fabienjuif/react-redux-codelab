import { SET_TEXT } from './search.actions'

export const initState = { text: '' }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_TEXT: return { ...state, text: action.payload }
    default: return state
  }
}
