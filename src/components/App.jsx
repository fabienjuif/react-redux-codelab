import React from 'react'
import { RelativeFragment, AbsoluteFragment } from 'redux-little-router'
import Results from './Results'
import TVShow from './TVShow'
import Appbar from './Appbar'

const App = () => {
  return (
    <div>
      <Appbar />
      <RelativeFragment forRoute="/tvshow/:id" children={<TVShow />} />
      <AbsoluteFragment forRoute="/" children={<Results />} />
    </div>
  )
}

export default App
