import { connect } from 'react-redux'
import { defaultArray } from 'redux/defaults'
import { getEpisodes } from './episodes.selectors'
import Component from './episodes'

const mapStateToProps = (state) => {
  const raw = getEpisodes(state)
  const episodes = (raw || defaultArray).map(e => e.id)

  return {
    loaded: raw !== undefined,
    episodes,
  }
}

export default connect(mapStateToProps)(Component)
