import { connect } from 'react-redux'
import { helpers } from 'redux/tvshows'
import { getSeen } from 'redux/seen'
import pick from 'lodash/pick'
import Component from './result'

const mapStateToProps = (state, { id }) => {
  const tvshow = helpers.getById(state, id)

  return {
    ...pick(tvshow, ['name', 'image']),
    seen: getSeen(state).find(s => s.id === id) !== undefined,
    loaded: tvshow.name,
  }
}

export default connect(mapStateToProps)(Component)
