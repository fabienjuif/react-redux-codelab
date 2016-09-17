import React from 'react'
import Button from 'muicss/lib/react/button'
import styles from './overlay.style.scss'

const Overlay = () => {
  return (
    <div className={styles.overlay}>
      <Button color="primary" className={styles.button}>ajouter</Button>
      <Button color="default" variant="flat" className={styles.button}>consulter</Button>
    </div>
  )
}

export default Overlay
