import uniq from 'lodash/uniq'
import { ADD_SEEN } from './seen.actions'

export const initState = []
export const initAction = { type: 'UNKOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case ADD_SEEN: return uniq([...state, action.payload])
    default: return state
  }
}
