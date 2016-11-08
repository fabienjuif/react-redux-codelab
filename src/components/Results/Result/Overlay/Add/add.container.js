import { connect } from 'react-redux'
import Component from './add'
import { add } from './add.actions'

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onAdd: () => dispatch(add(id)),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
