import { connect } from 'react-redux'
import { getSeen } from 'redux/seen'
import { getResults } from 'redux/results'
import { getText } from 'redux/search'
import { connectFirebase } from './results.actions'
import Component from './results'

const mapStateToProps = (state) => {
  let results = getSeen(state)

  if (getText(state) !== '') {
    results = getResults(state)
  }

  return {
    results,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(connectFirebase()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
