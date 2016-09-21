import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import styles from './search.style'

const Search = ({ className, ...rest }) => {
  return <input className={`${styles.search} ${className}`} {...rest} />
}

Search.propTypes = {
  className: PropTypes.string,
}

export default loader(Search, { wait: false })
