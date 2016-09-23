import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createStoreWithRouter, initializeCurrentLocation } from 'redux-little-router'
import thunkMiddleware from 'redux-thunk'
import router from './router'
import search from './search'
import user from './user'
import seen from './seen'
import tvshows from './tvshows'
import results from './results'
import episodes from './episodes'

const store = createStore(
  combineReducers({ // TODO : cut it like this : data, ui
    search,
    user,
    seen,
    tvshows,
    results,
    episodes,
  }),
  compose(
    applyMiddleware(thunkMiddleware),
    createStoreWithRouter({
      routes: router,
      pathname: window.location.pathname,
    }),
    /* eslint-env browser */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const initialLocation = store.getState().router
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation))
}

export default store
