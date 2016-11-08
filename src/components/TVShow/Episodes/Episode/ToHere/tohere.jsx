import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const ToHere = ({ onClick }) => {
  return (
    <Button variant="flat" onClick={onClick}>Jusqu'ici</Button>
  )
}

ToHere.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ToHere
