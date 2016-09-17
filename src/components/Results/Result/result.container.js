import { connect } from 'react-redux'
import Component from './result'

const defaultObject = {}
const defaultShow = { image: {} }
const defaultImage = { medium: 'http://tvmazecdn.com/images/no-img/no-img-portrait-text.png' }

const mapDispatchToProps = (state, { id }) => {
  const result = state.search.results.find(r => r.show.id === id) || defaultObject
  const show = result.show || defaultShow
  const image = show.image || defaultImage

  return {
    name: show.name,
    image: image.medium,
  }
}

export default connect(mapDispatchToProps)(Component)
