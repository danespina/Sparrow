import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = state => {
  return { currentUser: state.entities.users[state.session.currentUserId] };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      return dispatch(logout());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
