import React, { PropTypes } from 'react'
import styles from './avatar.style'

const Avatar = ({ style, className, photoURL = '' }) => {
  const ownStyle = {
    backgroundImage: `url(${photoURL})`,
    ...style,
  }

  return (
    <div style={ownStyle} className={`${styles.avatar} ${className}`}>
      {photoURL !== '' || <i className="material-icons">supervisor_account</i>}
    </div>
  )
}

export default Avatar
