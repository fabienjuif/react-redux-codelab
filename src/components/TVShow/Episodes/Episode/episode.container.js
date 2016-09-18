import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getEpisode } from 'redux/tvshow'
import Component from './episode'

const mapStateToProps = (state, { id }) => {
  return {
    ...pick(getEpisode(state, id), ['season', 'number', 'airdate', 'airtime', 'name']),
  }
}

export default connect(mapStateToProps)(Component)
