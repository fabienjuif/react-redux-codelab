import React from 'react'
import Appbar from 'muicss/lib/react/appbar'
import Button from 'muicss/lib/react/button'
import { RelativeFragment, Link } from 'redux-little-router'
import Search from './Search'
import Results from './Results'
import TVShow from './TVShow'
import styles from './App.style'

const App = () => (
  <RelativeFragment forRoute="/">
    <Appbar className={styles.appbar}>
      <Link href="/">
        <Button variant="fab" color="primary" className={styles.button}><i className="material-icons">home</i></Button>
      </Link>
      <Search className={styles.search} />
    </Appbar>
    <RelativeFragment forRoute="/tvshow/:id" children={<TVShow />} />
    <RelativeFragment forRoute="/" children={<Results />} />
  </RelativeFragment>
)
export default App
