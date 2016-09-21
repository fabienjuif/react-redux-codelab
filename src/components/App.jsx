import React from 'react'
import Appbar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'
import { RelativeFragment, AbsoluteFragment, Link } from 'redux-little-router'
import Search from './Search'
import Results from './Results'
import TVShow from './TVShow'
import User from './User'
import TVShows from './TVShows'
import styles from './App.style'

const App = () => {
  return (
    <div>
      <Appbar className={styles.appbar}>
        <Link href="/">
          <Button
            variant="fab"
            color="primary"
            className={styles.button}
          >
            <i className="material-icons">home</i>
          </Button>
        </Link>
        <Search className={styles.search} />
        <User className={styles.user} />
      </Appbar>
      <RelativeFragment forRoute="/tvshow/:id" children={<TVShow />} />
      <AbsoluteFragment forRoute="/">
        <Results />
        <TVShows />
      </AbsoluteFragment>
    </div>
  )
}

export default App
