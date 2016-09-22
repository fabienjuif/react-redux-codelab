import React, { PropTypes } from 'react'
import styles from './search.style'

const Search = ({ className, ...rest }) => {
  return <input className={`${styles.search} ${className}`} {...rest} />
}

Search.propTypes = {
  className: PropTypes.string,
}

export default Search
