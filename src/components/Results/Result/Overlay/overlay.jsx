import React, { PropTypes } from 'react'
import { Link } from 'redux-little-router'
import Button from 'muicss/lib/react/button'
import Add from './Add'
import styles from './overlay.style'

const Overlay = ({ id }) => {
  return (
    <div className={styles.overlay}>
      <Add className={styles.button} id={id} />
      <Link href={`/tvshow/${id}`}>
        <Button
          color="default"
          variant="flat"
          className={styles.button}
          children="consulter"
        />
      </Link>
    </div>
  )
}

Overlay.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Overlay
