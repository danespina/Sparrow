import { connect } from 'react-redux';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => {
      return dispatch(login(
        {
          username: user.username,
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
    clearErrors: () => {
      return dispatch(clearErrors());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
