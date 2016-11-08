import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Episodes from './Episodes'
import styles from './tvshow.style'

/* eslint-disable react/no-danger */

const TVShow = ({ id, name, image, summary }) => {
  return (
    <div className={styles.tvshow}>
      <h1>{name}</h1>
      <div className={styles.card}>
        <h2>En résumé</h2>
        <div className={styles.abstract}>
          <img role="presentation" src={image} />
          <div className={styles.summary} dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </div>

      <div className={styles.card}>
        <h2>Episodes</h2>
        <div className={styles.episodes}>
          <Episodes id={id} />
        </div>
      </div>
    </div>
  )
}

/* eslint-enable react/no-danger */

TVShow.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  summary: PropTypes.string,
}

// FIXME(router)
// export default loader(TVShow)

//
const LoadingIndicator = () => <div />
export default loader(TVShow, { LoadingIndicator })
