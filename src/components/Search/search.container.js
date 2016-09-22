import { connect } from 'react-redux'
import { search } from './search.actions'

import Component from './search'

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => dispatch(search(event.target.value)),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
