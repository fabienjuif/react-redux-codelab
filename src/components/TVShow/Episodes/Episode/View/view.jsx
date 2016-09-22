import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const View = ({ onClick }) => {
  return (
    <Button color="primary" onClick={onClick}>Vu</Button>
  )
}

export default View
