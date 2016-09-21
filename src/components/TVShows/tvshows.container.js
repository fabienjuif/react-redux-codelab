import { connect } from 'react-redux'
import { getSeen } from 'redux/seen'
import Component from './tvshows'

const mapStateToProps = (state) => {
  return {
    seen: getSeen(state),
  }
}

export default connect(mapStateToProps)(Component)
