import React from 'react'
import { default as MuiAppbar } from 'muicss/lib/react/appbar'
import Search from './Search'
import User from './User'
import Home from './Home'
import styles from './appbar.style'

const Appbar = () => {
  return (
    <MuiAppbar className={styles.appbar}>
      <Home className={styles.button} />
      <Search className={styles.search} />
      <User className={styles.user} />
    </MuiAppbar>
  )
}

export default Appbar
