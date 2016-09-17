import { connect } from 'react-redux'
import Component from './results'

const defaultArray = []

const mapStateToProps = (state) => {
  return {
    results: state.search.results.map(result => result.show.id) || defaultArray,
  }
}

export default connect(mapStateToProps)(Component)
