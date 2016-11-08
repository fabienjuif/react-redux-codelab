import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import router from './router'
import search from './search'
import user from './user'
import seen from './seen'
import tvshows from './tvshows'
import results from './results'
import episodes from './episodes'

const store = createStore(
  combineReducers({
    search,
    user,
    seen,
    tvshows,
    results,
    episodes,
    router,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
