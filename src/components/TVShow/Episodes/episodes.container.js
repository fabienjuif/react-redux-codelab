import { connect } from 'react-redux'
import { defaultArray } from 'redux/defaults'
import { fetchEpisodes } from 'redux/tvshows/episodes'
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

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    load: () => dispatch(fetchEpisodes(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
