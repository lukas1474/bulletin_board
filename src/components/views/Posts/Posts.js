import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';
import { getAll } from '../../../redux/postsRedux';
import { connect } from 'react-redux';

import clsx from 'clsx';

import styles from './Posts.module.scss';

const Component = ({ className, author, description, title, status }) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.status}>{status}</p>
      <p className={styles.author}>{author}</p>
      {props => <Post {...props} key={this.props.id} />}
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  status: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  Container as Posts,
  Component as PostsComponent,
};
