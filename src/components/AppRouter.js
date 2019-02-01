import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import Header from './Header';
import '../assets/css/App.css';
import Comments from './Comments';
import NotFound from './NotFound';
import ROUTES from '../constants/routes';
import { IS_AUTHENTICATED } from '../constants/sessionStorage';

/**
 * @class AppRouter
 * @augments {React.Component}
 */
class AppRouter extends React.Component {
  /**
   * Creates an instance of AppRouter.
   *
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      errors: '',
      success: '',
      isAuthenticated: false
    };
  }

  /**
   * @param {*} props Data from parent component.
   * @param {*} state Current state of the component.
   * @returns {number} The sum of the two numbers.
   */
  static getDerivedStateFromProps(props, state) {
    return {
      ...state,
      isAuthenticated: sessionStorage.getItem(IS_AUTHENTICATED) === 'true'
    };
  }

  /**
   * Handles logout function in app.
   */
  handleLogout = () => {
    this.setState({ isAuthenticated: false });
    sessionStorage.setItem('isAuthenticated', false);
  };

  /**
   * @returns {boolean} React Router.
   */
  render() {
    const { isAuthenticated } = this.state;

    return (
      <Router basename={'/hackernews'}>
        <div>
          {isAuthenticated && (
            <div className="header-container">
              <Header />
              <NavBar />
            </div>
          )}
          <Switch>
            <Route
              path={ROUTES.NEWNEWSSTORIES}
              exact
              component={props => <Home {...props} />}
            />
            <Route
              path={ROUTES.LOGINSIGNUP}
              exact
              component={props => <Login {...props} />}
            />
            <Route
              path={ROUTES.TOPNEWSSTORIES}
              exact
              component={props => <Home {...props} />}
            />
            <Route
              path={ROUTES.BESTNEWSSTORIES}
              exact
              component={props => <Home {...props} />}
            />
            <Route
              path={ROUTES.COMMENTS}
              exact
              component={props => <Comments {...props} />}
            />
            <Route component={props => <NotFound {...props} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AppRouter;
