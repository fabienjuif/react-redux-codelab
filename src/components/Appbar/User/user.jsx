import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Avatar from './Avatar'
import styles from './user.style'

const User = ({ className, displayName, onClick }) => {
  return (
    <button className={`${styles.user} ${className}`} onClick={onClick}>
      <span className={styles.name}>{displayName || 'Log in'}</span>
      <Avatar className={styles.avatar} />
    </button>
  )
}

User.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default loader(User, { Loader: null })
