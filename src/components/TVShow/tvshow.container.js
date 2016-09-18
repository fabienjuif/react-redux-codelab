import { connect } from 'react-redux'
import { getId } from 'redux/router'
import { getTVShow } from 'redux/tvshow'
import { load } from './tvshow.actions'
import Component from './tvshow'

const mapStateToProps = (state) => {
  return {
    loaded: Number(getId(state)) === getTVShow(state).id,
    ...getTVShow(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    load: () => dispatch(load()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
