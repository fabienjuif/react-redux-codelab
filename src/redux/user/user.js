import { SET_USER, RESET_USER } from './user.actions'

export const initState = { displayName: '', photoURL: '' }
export const initAction = { type: 'UNKOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_USER: return action.payload
    case RESET_USER: return initState
    default: return state
  }
}
