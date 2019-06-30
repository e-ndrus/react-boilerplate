/**
 *
 * Post
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPost from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Post() {
  useInjectReducer({ key: 'post', reducer });
  useInjectSaga({ key: 'post', saga });

  return (
    <div>
      <Helmet>
        <title>Post</title>
        <meta name="description" content="Description of Post" />
      </Helmet>
      Content of this page is public.
    </div>
  );
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Post);
