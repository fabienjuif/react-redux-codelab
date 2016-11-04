import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Episode from './Episode'
import styles from './episodes.style.scss'

const Episodes = ({ className, episodes }) => {
  return (
    <table className={`mui-table mui-table--bordered ${styles.table} ${className}`}>
      <thead>
        <tr>
          <th>Numéro</th>
          <th>Date</th>
          <th>Titre</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {episodes.map(id => <Episode key={id} id={id} />)}
      </tbody>
    </table>
  )
}

Episodes.propTypes = {
  episodes: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string,
}

export default loader(Episodes)
