import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'

const TVShow = (props) => {
  return (
    <pre>{JSON.stringify(props, null, 2)}</pre>
  )
}

export default loader(TVShow)
