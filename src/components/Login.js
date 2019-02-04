import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { LOGIN_ERRORS } from '../constants/message';

/**
 * @class Login
 * @extends {React.Component}
 * @param {Object} data
 * @param {Object} event
 */
class Login extends React.Component {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = { errors: '', password: '', userName: '' };
  }

  /**
   * @memberof Login
   * @param {Object} inputEvent
   * Handles value change in input fields.
   */
  handleInputChange = inputEvent => {
    this.setState({
      [inputEvent.target.name]: inputEvent.target.value
    });
  };

  /**
   * @memberof Login
   * @param {Object} event
   * Handles submit event for both login and signup button.
   */
  handleFormDataSubmit = event => {
    event.preventDefault();
    const { userName, password } = this.state;

    if (userName && password) {
      const loginData = { userName: userName, password: password };

      event.target.name === 'signup'
        ? this.props.handleSignup(loginData)
        : this.props.handleLogin(loginData) && this.props.history.push('/');
    } else {
      this.setState({ errors: LOGIN_ERRORS.EMPTY_INPUT_FIELDS });
    }
  };

  /**
   * @memberof Login
   * @returns {number} Jsx to disply login-signup form.
   */
  render() {
    const stateErrors = this.state.errors;
    const {
      LoginSignup: { message, isAuthenticated }
    } = this.props;

    return (
      <React.Fragment>
        {isAuthenticated ? (
          <Redirect to={ROUTES.NEWNEWSSTORIES} />
        ) : (
          <div className="conteiner local-container">
            <div className="row form-row">
              <div className="login-header">Login</div>
              <form className="col s12 form-holder">
                <div className="row">
                  <div className="input-field col s12">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="icon_prefix"
                      type="text"
                      className="validate"
                      name="userName"
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="icon_prefix">User Name</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">security</i>
                    <input
                      id="icon_telephone"
                      type="password"
                      className="validate"
                      name="password"
                      onChange={this.handleInputChange}
                    />
                    <label htmlFor="icon_telephone">Password</label>
                  </div>
                </div>
                <div className="btn-container">
                  <input
                    className="btn waves-effect waves-light login-page-buttons"
                    type="button"
                    name="login"
                    value="login"
                    onClick={this.handleFormDataSubmit}
                  />
                  <input
                    className="btn waves-effect waves-light login-page-buttons"
                    type="button"
                    name="signup"
                    value="signup"
                    onClick={this.handleFormDataSubmit}
                  />
                </div>
              </form>
              <div className="invalid errors">{stateErrors || message}</div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

/**
 * @param {*} hello
 * @returns {Object} Store Objects.
 *  */
const mapStateToProps = ({ LoginSignup }) => {
  return { LoginSignup };
};

/**
 * @param {Object} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => {
  const LoginHandler = require('../reducer/login/actionCreators');

  return {
    handleSignup: loginData => {
      LoginHandler.actions.handleSignup(dispatch, loginData);
    },
    handleLogin: loginData => {
      LoginHandler.actions.handleLogin(dispatch, loginData);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
