import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getEpisodes } from 'redux/episodes'
import { getEpisode } from './episode.selectors'
import Component from './episode'

const mapStateToProps = (state, { id }) => {
  const seen = getEpisodes(state).includes(id)

  return {
    ...pick(getEpisode(state, id), ['id', 'season', 'number', 'airdate', 'airtime', 'name']),
    seen,
  }
}

export default connect(mapStateToProps)(Component)
