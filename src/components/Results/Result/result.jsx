import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Panel from 'muicss/lib/react/panel'
import Bar from './Bar'
import Overlay from './Overlay'
import styles from './result.style'

const Result = ({ className, id, image }) => {
  const style = { backgroundImage: `url(${image})` }

  return (
    <Panel style={style} className={`${styles.result} ${className}`}>
      <Overlay id={id} />
      <Bar id={id} />
    </Panel>
  )
}

Result.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default loader(Result)
