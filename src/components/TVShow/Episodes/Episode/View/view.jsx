import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const View = ({ onClick }) => {
  return (
    <Button color="primary" onClick={onClick}>Vu</Button>
  )
}

View.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default View
