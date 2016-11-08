import { connect } from 'react-redux'
import { getSeen } from 'redux/seen'
import { setParams } from 'redux/router'
import { fetchEpisodes } from 'redux/tvshows/episodes'
import { connectFirebase } from '../../../TVShow/tvshow.actions'
import Component from './overlay'

const mapStateToProps = (state, { id }) => {
  return {
    seen: getSeen(state).find(s => s === id) !== undefined,
  }
}

// FIXME(router): delete mapDispatchToProps
const mapDispatchToProps = (dispatch, { id }) => {
  return {
    onClick: () => {
      dispatch(setParams({ id }))
      dispatch(fetchEpisodes(id))
      dispatch(connectFirebase())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
