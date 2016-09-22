import padStart from 'lodash/padStart'
import React, { PropTypes } from 'react'
import ToHere from './ToHere'
import View from './View'
import styles from './episode.style'

const Episode = ({ id, season, number, airdate, airtime, name }) => {
  return (
    <tr className={styles.episode}>
      <td>S{padStart(season, 2, '0')}E{padStart(number, 2, '0')}</td>
      <td>{airdate} {airtime}</td>
      <td>{name}</td>
      <td className={styles.button}>
        <View id={id} />
        <ToHere id={id} />
      </td>
    </tr>
  )
}

export default Episode
