import { connect } from 'react-redux'
import { tohere } from './tohere.actions'
import Component from './tohere'

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onClick: () => dispatch(tohere(id)),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
