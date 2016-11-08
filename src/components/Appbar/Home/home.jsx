import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'

const Home = ({ className, onClick }) => {
  return (
    <Button
      variant="fab"
      color="primary"
      className={className}
      onClick={onClick}
    >
      <i className="material-icons">home</i>
    </Button>
  )
}

Home.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Home
