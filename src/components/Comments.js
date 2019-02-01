import React from 'react';
import { connect } from 'react-redux';

/**
 * @class Comments
 * @extends {Component}
 */
class Comments extends React.Component {
  /**
   * Api call here.
   */
  componentDidMount() {
    const commentsIds = this.props.location.state.data.kids || this.props.data;

    this.props.fetchComments(commentsIds);
  }
  /**
   * @returns {Object}
   */
  render() {
    const { loading, comments } = this.props.Comments;

    return (
      <div>
        {!loading ? (
          comments ? (
            comments.map(value => (
              <div>
                <div className="each-news">{value.data.text}</div>
              </div>
            ))
          ) : (
            <div>no comments to display</div>
          )
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

/**
 * @param {Object} param
 * @returns {Object}
 */
const mapStateToProps = ({ Comments }) => {
  return {
    Comments
  };
};
/**
 * @param {*} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => {
  const FetchComments = require('../reducer/comments/actionCreators');

  return {
    fetchComments: commentId => {
      dispatch(FetchComments.actions.fetchComments(commentId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
