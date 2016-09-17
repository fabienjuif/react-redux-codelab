import React, { PropTypes } from 'react'
import Panel from 'muicss/lib/react/panel'
import Button from 'muicss/lib/react/button'
import Overlay from './Overlay'
import styles from './result.style.scss'

const Result = ({ className, name, image }) => {
  const style = { backgroundImage: `url(${image})` }

  return (
    <Panel style={style} className={`${styles.result} ${className}`}>
      <Overlay />
      <div className={styles.bar}>
        <span title={name}>{name}</span>
        <Button variant="fab" size="small" className={styles.more}>
          <i className="material-icons">more_vert</i>
        </Button>
      </div>

    </Panel>
  )
}

Result.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Result
