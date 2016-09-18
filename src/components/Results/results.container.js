import { connect } from 'react-redux'
import { defaultArray } from 'redux/defaults'
import { getResults } from 'redux/search'
import Component from './results'

const mapStateToProps = (state) => {
  return {
    results: getResults(state).map(result => result.show.id) || defaultArray,
  }
}

export default connect(mapStateToProps)(Component)
