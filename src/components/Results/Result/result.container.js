import { connect } from 'react-redux'
import { getShow } from 'redux/search'
import pick from 'lodash/pick'
import Component from './result'

const mapStateToProps = (state, { id }) => {
  return {
    ...pick(getShow(state, id), ['name', 'image']),
  }
}

export default connect(mapStateToProps)(Component)
