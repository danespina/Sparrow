import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Splash from './placeholder_splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

export default withRouter(connect(mapStateToProps, null)(Splash));
