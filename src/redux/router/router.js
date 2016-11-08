import { SET_PARAMS } from './router.actions'

export const initState = { params: {} }
export const initAction = { type: 'UNKNOWN' }

export default (state = initState, action = initAction) => {
  switch (action.type) {
    case SET_PARAMS: return { ...state, params: action.payload }
    default: return state
  }
}

/* FIXME(router) export default {
  '/': {
    title: 'HOME',
    '/toto': {
      title: 'TOTO',
    },
    '/tvshow/:id': {
      title: 'TVSHOW',
    },
  },
}
*/
