import React, { PropTypes } from 'react'
import { Link } from 'redux-little-router'
import Button from 'muicss/lib/react/button'
import styles from './overlay.style'

const Overlay = ({ onAdd, id }) => {
  return (
    <div className={styles.overlay}>
      <Button
        color="primary"
        className={styles.button}
        onClick={onAdd}
        children="ajouter"
      />
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
  onAdd: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
}

export default Overlay
