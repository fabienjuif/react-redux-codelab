import { connect } from 'react-redux'
import Component from './bar'

const defaultObject = {}
const defaultShow = { image: {} }

// TODO : normalizr with result
const mapDispatchToProps = (state, { id }) => {
  const result = state.search.results.find(r => r.show.id === id) || defaultObject
  const show = result.show || defaultShow

  return {
    name: show.name,
  }
}

export default connect(mapDispatchToProps)(Component)
