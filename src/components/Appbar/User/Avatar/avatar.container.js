import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getUser } from 'redux/user'
import Component from './avatar'

const mapStateToProps = (state) => {
  return {
    ...pick(getUser(state), ['photoURL']),
  }
}

export default connect(mapStateToProps)(Component)
