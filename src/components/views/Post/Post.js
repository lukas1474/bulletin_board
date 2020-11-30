import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Post.module.scss';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Component = ({ className, post}) => {
  const classes = useStyles();
  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth='lg' className={styles.container}>
        <Paper Paper className={classes.paper} elevation={3}>
          <Button variant="contained" color="secondary" href="/">
            Powrót
          </Button>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p>{post.author}</p>
          <Button variant="contained" color="primary" href="/">
            Edytuj
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  post: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  post: getPostById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container1 = connect(mapStateToProps)(Component);

export {
  // Component as Post,
  Container1 as Post,
  Component as PostComponent,
};
