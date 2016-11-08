import { connect } from 'react-redux'
import { getId } from 'redux/router'
// FIXME(router): import { load } from './tvshow.actions'
import { getTvShow } from './tvshow.selectors'
import Component from './tvshow'

/*
const mapStateToProps = (state) => {
  const id = Number(getId(state))
  const tvshow = helpers.getById(state, id)

  return {
    loaded: id === tvshow.id,
    ...pick(tvshow, ['id', 'name', 'image', 'summary']),
  }
}
*/

const mapStateToProps = (state) => {
  const id = Number(getId(state))
  const tvshow = getTvShow(state)
  return {
    loaded: id === tvshow.id,
    ...tvshow,
  }
}

/* FIXME(router): const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(load()),
  }
}
*/

export default connect(mapStateToProps /* FIXME(router):  mapDispatchToProps */)(Component)
