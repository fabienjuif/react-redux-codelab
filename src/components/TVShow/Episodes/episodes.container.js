import { connect } from 'react-redux'
import { getEpisodes } from 'redux/tvshow'
import { defaultArray } from 'redux/defaults'
import Component from './episodes'

const mapStateToProps = (state) => {
  const raw = getEpisodes(state)
  const episodes = (raw || defaultArray).map(e => e.id)

  return {
    loaded: episodes !== undefined,
    episodes,
  }
}

export default connect(mapStateToProps)(Component)
