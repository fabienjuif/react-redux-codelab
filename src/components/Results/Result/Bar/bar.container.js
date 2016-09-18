import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getShow } from 'redux/search'
import Component from './bar'

// TODO : normalizr with result
const mapDispatchToProps = (state, { id }) => {
  return {
    ...pick(getShow(state, id), ['name']),
  }
}

export default connect(mapDispatchToProps)(Component)
