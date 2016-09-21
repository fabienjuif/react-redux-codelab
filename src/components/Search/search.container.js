import { connect } from 'react-redux'
import { search, connectFirebase } from './search.actions'

import Component from './search'

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => dispatch(search(event.target.value)),
    load: () => dispatch(connectFirebase()), // TODO : move it
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
