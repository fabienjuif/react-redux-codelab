import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Episodes from './Episodes'
import styles from './tvshow.style'

const TVShow = ({ id, name, image, summary }) => {
  return (
    <div className={styles.tvshow}>
      <h1>{name}</h1>
			<div className="card resume">
				<h2>En résumé</h2>
				<div className="card-content">
					<div className={styles.abstract}>
						<img role="presentation" src={image} />
						<div className={styles.summary} dangerouslySetInnerHTML={{ __html: summary }} />
					</div>
    		</div>
   		</div>
      <div className="card episodes">
				<h2>Episodes</h2>
				<div className="card-content">
    			<Episodes id={id} />
    		</div>
      </div>
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
