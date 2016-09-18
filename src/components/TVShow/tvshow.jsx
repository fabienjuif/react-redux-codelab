import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'

const TVShow = ({ name, image, summary }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img role="presentation" src={image} />
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  )
}

export default loader(TVShow)
