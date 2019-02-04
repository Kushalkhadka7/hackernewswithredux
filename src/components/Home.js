import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import ROUTES from '../constants/routes';
import { connect } from 'react-redux';

/**
 * @class Home
 * @extends {React.PureComponent}
 */
class Home extends React.PureComponent {
  /**
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      newsType: 'bestnews'
    };
  }

  /**
   * @memberof Home
   * Calls fetchNewsStories to fetch news data from api.
   */
  componentDidMount() {
    const newsType = this.checkRoutes();

    this.props.fetchNewsIds(newsType);
  }

  /**
   * @memberof Home
   * @returns {string} News type .
   * Checks news type based on the incoming routes.
   */
  checkRoutes = () => {
    const { pathname } = this.props.location;

    switch (pathname) {
      case ROUTES.NEWNEWSSTORIES:
        return 'newnews';
      case ROUTES.TOPNEWSSTORIES:
        return 'topnews';
      case ROUTES.BESTNEWSSTORIES:
        return 'bestnews';
      default:
        return 'newnews';
    }
  };

  /**
   * @memberof Home
   * @returns {number} Jsx to display news.
   */
  render() {
    const stories = this.props.NewsStories.stories;
    const isAuthenticated = this.props.LoginSignup.isAuthenticated;

    return (
      <React.Fragment>
        {isAuthenticated ? (
          <div>
            {!this.props.NewsStories.loading ? (
              stories.map(value => (
                <Link
                  to={{
                    pathname: `news/${value.data.id}`,
                    state: {
                      data: value.data
                    }
                  }}
                >
                  <div className="each-news">{value.data.title}</div>
                </Link>
              ))
            ) : (
              <div>loading...</div>
            )}
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </React.Fragment>
    );
  }
}

/**
 * @param {*} state
 * @returns {Object}
 */
const mapstateToProps = ({ NewsIds, NewsStories, LoginSignup }) => {
  return {
    NewsIds,
    NewsStories,
    LoginSignup
  };
};

/**
 * @param {*} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => {
  const FetchNews = require('../reducer/news/actionCreators');

  return {
    fetchNewsIds: newsType => dispatch(FetchNews.actions.fetchNewsIds(newsType))
  };
};

export default connect(
  mapstateToProps,
  mapDispatchToProps
)(Home);
