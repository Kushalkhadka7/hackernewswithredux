import React from 'react';
import { connect } from 'react-redux';

/**
 * @returns {number} Header title.
 */
class Header extends React.Component {
  handleLogout = () => {
    this.props.logout();
  };

  /**
   * @memberof Header
   * @returns {string} Header.
   */
  render() {
    return (
      <div className="container app-header local-container clearfix">
        <span className="header">Hacker News</span>
        <span className="logout" onClick={this.handleLogout}>
          <i className="fas fa-sign-out-alt" />
        </span>
      </div>
    );
  }
}

/**
 * @param {*} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => {
  const Logout = require('../reducer/logout/actionCreators');

  return {
    logout: () => dispatch(Logout.actions.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
