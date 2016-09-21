import React, { PropTypes } from 'react'
import Result from '../Results/Result'

const TVShows = ({ seen }) => {
  return (
    <div>
      {seen.map(id => <Result key={id} id={id} />)}
    </div>
  )
}

TVShows.propTypes = {
  seen: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default TVShows
