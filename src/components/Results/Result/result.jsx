import React, { PropTypes } from 'react'
import Panel from 'muicss/lib/react/panel'
import styles from './result.style.scss'

const Result = ({ className, name, image }) => {
  return (
    <Panel className={`${styles.result} ${className}`}>
      <h2 title={name}>{name}</h2>
      <img role="presentation" src={image} />
    </Panel>
  )
}

Result.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Result
