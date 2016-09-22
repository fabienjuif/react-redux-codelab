import React, { PropTypes } from 'react'
import Button from 'muicss/lib/react/button'
import { Link } from 'redux-little-router'

const Home = ({ className, onClick }) => {
  return (
    <Link href="/">
      <Button
        variant="fab"
        color="primary"
        className={className}
        onClick={onClick}
      >
        <i className="material-icons">home</i>
      </Button>
    </Link>
  )
}

export default Home
