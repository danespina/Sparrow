import { connect } from 'react-redux';
import Splash from './placeholder_splash';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUserId],
  };
};

export default connect(mapStateToProps, null)(Splash);
