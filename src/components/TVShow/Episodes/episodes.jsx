import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'

import Episode from './Episode'

const Episodes = ({ episodes }) => {
  return (
    <table className="mui-table mui-table--bordered">
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

export default loader(Episodes)
