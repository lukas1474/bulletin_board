import React from 'react';
import PropTypes from 'prop-types';

import { getAll } from '../../../redux/postsRedux';
import { connect } from 'react-redux';

import clsx from 'clsx';

import styles from './Posts.module.scss';

const Component = ({ className, author, description, title }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{author}</p>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
