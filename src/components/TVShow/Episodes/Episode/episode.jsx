import padStart from 'lodash/padStart'
import React, { PropTypes } from 'react'
import ToHere from './ToHere'
import View from './View'
import styles from './episode.style'

const Episode = ({ id, season, number, airdate, airtime, name, seen }) => {
  const classNames = [styles.episode]
  if (seen) classNames.push(styles.seen)

  return (
    <tr className={classNames.join(' ')}>
      <td>S{padStart(season, 2, '0')}E{padStart(number, 2, '0')}</td>
      <td>{airdate} {airtime}</td>
      <td>{name}</td>
      <td className={styles.button}>
        {seen || <View id={id} />}
        {seen || <ToHere id={id} />}
      </td>
    </tr>
  )
}

export default Episode
