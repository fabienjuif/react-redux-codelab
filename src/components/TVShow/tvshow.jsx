import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Episodes from './Episodes'
import styles from './tvshow.style'

const TVShow = ({ id, name, image, summary }) => {
  return (
    <div className={styles.tvshow}>
      <h1>{name}</h1>
      <h2>En résumé</h2>
      <div className={styles.abstract}>
        <img role="presentation" src={image} />
        <div className={styles.summary} dangerouslySetInnerHTML={{ __html: summary }} />
      </div>
      <h2>Episodes</h2>
      <Episodes id={id} />
    </div>
  )
}

TVShow.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.string,
}

export default loader(TVShow)
