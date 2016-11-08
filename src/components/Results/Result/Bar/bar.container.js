import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { helpers } from 'redux/tvshows'
import Component from './bar'

const mapDispatchToProps = (state, { id }) => {
  return {
    ...pick(helpers.getById(state, id), ['name']),
  }
}

export default connect(mapDispatchToProps)(Component)
