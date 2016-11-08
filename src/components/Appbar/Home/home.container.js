import { connect } from 'react-redux'
import { setText } from 'redux/search'
import Commponent from './home'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(setText('')),
  }
}

export default connect(undefined, mapDispatchToProps)(Commponent)
