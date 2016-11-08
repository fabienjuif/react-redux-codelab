import React, { PropTypes } from 'react'
// FIXME(router): import { Link } from 'redux-little-router'
import Button from 'muicss/lib/react/button'
import Add from './Add'
import styles from './overlay.style'

const Overlay = ({ id, seen, onClick }) => {
  return (
    <div className={styles.overlay}>
      {seen || <Add className={styles.button} id={id} />}
      <Button
        color="default"
        variant="flat"
        className={styles.button}
        children="consulter"
        onClick={onClick}
      />
    </div>
  )
}

Overlay.propTypes = {
  id: PropTypes.number.isRequired,
  seen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Overlay
