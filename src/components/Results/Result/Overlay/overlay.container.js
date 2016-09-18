import { connect } from 'react-redux'
import Component from './overlay'

const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onAdd: () => console.log(id), // TODO
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
