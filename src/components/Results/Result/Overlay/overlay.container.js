import { connect } from 'react-redux'
import { getSeen } from 'redux/seen'
import Component from './overlay'

const mapStateToProps = (state, { id }) => {
  return {
    seen: getSeen(state).find(s => s === id) !== undefined,
  }
}

export default connect(mapStateToProps)(Component)
