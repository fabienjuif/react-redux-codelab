import React from 'react'
// FIXME(router): import { RelativeFragment, AbsoluteFragment } from 'redux-little-router'
import Results from './Results'
import TVShow from './TVShow'
import Appbar from './Appbar'

const App = () => {
  return (
    <div>
      <Appbar />
      <Results />
      <TVShow />
    </div>
  )
}

export default App
