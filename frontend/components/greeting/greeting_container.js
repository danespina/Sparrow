import { connect } from 'react-redux';
import { withRouter } from 'react-router';
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Greeting));
