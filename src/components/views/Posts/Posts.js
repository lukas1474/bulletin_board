import React from 'react';
import PropTypes from 'prop-types';

import { getAll } from '../../../redux/postsRedux';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Posts.module.scss';
import { Link } from 'react-router-dom';

const Component = ({ className, id, author, description, title }) => (
  <div className={clsx(className, styles.root)}>
    <Link to={`/post/${id}`} className={styles.links}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{author}</p>
    </Link>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
