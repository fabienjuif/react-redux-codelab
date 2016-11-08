import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const Add = ({ onAdd, className }) => {
  return (
    <Button
      color="primary"
      className={className}
      onClick={onAdd}
      children="ajouter"
    />
  )
}

Add.propTypes = {
  onAdd: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default Add
