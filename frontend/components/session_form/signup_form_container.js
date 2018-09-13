import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors,
    formType: 'signup',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => {
      return dispatch(signup(
        {
          username: user.username,
          email: user.email,
          password: user.password,
        }));
    },
    login: (user) => {
      return dispatch(login(
        {
          username: user.username,
          password: user.password,
        }
      ));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
