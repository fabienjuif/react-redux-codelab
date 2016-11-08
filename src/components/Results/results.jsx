import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Result from './Result'
import styles from './results.style'

const Results = ({ results }) => {
  return (
    <div className={styles.results}>
      {results.map(id => <Result className={styles.result} key={id} id={id} />)}
    </div>
  )
}

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default loader(Results, { wait: false })
