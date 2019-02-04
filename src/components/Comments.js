import React from 'react';

import CommentsChilds from './CommentsChilds';

/**
 * @class Comments
 * @extends {Component}
 */
class Comments extends React.Component {
  /**
   * @returns {Object}
   */
  render() {
    const kidsNewsId = this.props.data
      ? this.props.data
      : this.props.history.location.state.data.kids;

    return (
      <React.Fragment>
        <div className="container local-container list-container">
          {kidsNewsId ? (
            <ul>
              <CommentsChilds data={kidsNewsId} />
            </ul>
          ) : (
            <div>error</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Comments;
