import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const UnView = ({ onClick }) => {
  return (
    <Button variant="flat" onClick={onClick}>Pas vu</Button>
  )
}

UnView.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default UnView
