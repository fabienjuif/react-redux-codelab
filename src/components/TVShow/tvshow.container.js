import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getId } from 'redux/router'
import { getTVShow, helpers } from 'redux/tvshow'
import { load } from './tvshow.actions'
import Component from './tvshow'

const mapStateToProps = (state) => {
  const tvshow = getTVShow(state)

  return {
    loaded: Number(getId(state)) === tvshow.id,
    ...pick(helpers.enhanceTVShow(tvshow), ['name', 'image', 'summary']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(load()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
