import pick from 'lodash/pick'
import { connect } from 'react-redux'
import { getUser, isConnected } from 'redux/user'
import Component from './user'
import styles from './user.style'
import { login, retrieveLogin } from './user.actions'

const mapStateToProps = (state, { className = '' }) => {
  const user = getUser(state)
  const classNames = [className]
  if (!isConnected(state)) classNames.push(styles.login)

  return {
    ...pick(user, ['displayName']),
    className: classNames.join(' '),
    loaded: true,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(login()),
    load: () => dispatch(retrieveLogin()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
