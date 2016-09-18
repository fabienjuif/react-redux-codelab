import React from 'react'
import { RelativeFragment } from 'redux-little-router'
import Search from './Search'
import Results from './Results'
import TVShow from './TVShow'

const App = () => (
  <div>
    <Search />
    <RelativeFragment forRoute="/tvshow/:id" children={<TVShow />} />
    <RelativeFragment forRoute="/" children={<Results />} />
  </div>
)
export default App
