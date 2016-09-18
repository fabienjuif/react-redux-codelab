import padStart from 'lodash/padStart'
import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'
import styles from './episode.style'

const Episode = ({ season, number, airdate, airtime, name }) => {
  return (
    <tr className={styles.episode}>
      <td>S{padStart(season, 2, '0')}E{padStart(number, 2, '0')}</td>
      <td>{airdate} {airtime}</td>
      <td>{name}</td>
      <td className={styles.button}>
        <Button color="primary">Vu</Button>
        <Button variant="flat">Jusqu'ici</Button>
      </td>
    </tr>
  )
}

export default Episode
