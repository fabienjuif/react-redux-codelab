import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createStoreWithRouter, initializeCurrentLocation } from 'redux-little-router'
import thunkMiddleware from 'redux-thunk'
import router from './router'
import search from './search'
import tvshow from './tvshow'

const store = createStore(
  combineReducers({
    search,
    tvshow,
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
