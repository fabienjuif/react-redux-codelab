import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import search from './search'

export default createStore(
  combineReducers({
    search,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
