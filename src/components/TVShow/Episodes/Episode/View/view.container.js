import { connect } from 'react-redux'
import { add } from './view.actions'
import Component from './view'

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onClick: () => dispatch(add(id)),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
