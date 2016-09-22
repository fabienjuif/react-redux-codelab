import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const ToHere = ({ onClick }) => {
  return (
    <Button variant="flat" onClick={onClick}>Jusqu'ici</Button>
  )
}

export default ToHere
