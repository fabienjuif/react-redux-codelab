import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getId } from 'redux/router'
import { helpers } from 'redux/tvshows'
import { load } from './tvshow.actions'
import Component from './tvshow'

const mapStateToProps = (state) => {
  const id = Number(getId(state))
  const tvshow = helpers.getById(state, id)

  return {
    loaded: id === tvshow.id,
    ...pick(tvshow, ['id', 'name', 'image', 'summary']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(load()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
