import { connect } from 'react-redux'
import { remove } from './unview.actions'
import Component from './unview'

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onClick: () => dispatch(remove(id)),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
