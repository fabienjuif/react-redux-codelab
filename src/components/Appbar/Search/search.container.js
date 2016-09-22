import { connect } from 'react-redux'
import { getText } from 'redux/search'
import { search } from './search.actions'

import Component from './search'

const mapStateToProps = (state) => {
  return {
    value: getText(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: event => dispatch(search(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
