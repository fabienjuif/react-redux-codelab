import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'
import styles from './bar.style'

const Bar = ({ name }) => {
  return (
    <div className={styles.bar}>
      <span title={name}>{name}</span>
      <Button variant="fab" size="small" className={styles.more}>
        <i className="material-icons">more_vert</i>
      </Button>
    </div>
  )
}

Bar.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Bar
