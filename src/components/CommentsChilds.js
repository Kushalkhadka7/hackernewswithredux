import React from 'react';
import Comments from './Comments';
import { connect } from 'react-redux';
/**
 * @class Comments
 * @augments {Component}
 */
class CommentsChilds extends React.Component {
  /**
   * APi Call.
   */
  componentDidMount() {
    const commentsIds = this.props.data;

    commentsIds.forEach(value => {
      this.props.fetchComments(value);
    });
  }
  /**
   * @returns {jsx} Jsx to display comments.
   */
  render() {
    const comments = this.props.Comments.comments;

    return (
      <React.Fragment>
        <div>
          {comments ? (
            <React.Fragment>
              {comments.map(value => (
                <div className="each-news">{value.data.text}</div>
              ))}
            </React.Fragment>
          ) : (
            <div>no comments</div>
          )}
        </div>
      </React.Fragment>
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
)(CommentsChilds);
