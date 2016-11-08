import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'
// FIXME(router) import { Link } from 'redux-little-router'

const Home = ({ className, onClick }) => {
  return (
    // FIXME(router): <Link href="/">
    <Button
      variant="fab"
      color="primary"
      className={className}
      onClick={onClick}
    >
      <i className="material-icons">home</i>
    </Button>
    // FIXME(router): </Link>
  )
}

Home.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Home
