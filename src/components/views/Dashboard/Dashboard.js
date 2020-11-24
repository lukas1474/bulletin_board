import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { getAll } from '../../../redux/postsRedux';

import clsx from 'clsx';

import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Dashboard.module.scss';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Component = ({ className, children, posts }) => {
  const classes = useStyles();
  return (
    <div className={clsx(className, styles.root)}>
      <Paper className={clsx(className, styles.component)}>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            {posts && posts.map(post => (
              <Grid key={post.id} item xs={6} sm={3}>
                <Paper className={classes.paper}>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                  <p>{post.author}</p>
                </Paper>
              </Grid>
            ))}
            {children}
          </Grid>
        </Container>
      </Paper>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  posts: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container1 = connect(mapStateToProps)(Component);

export {
  //Component as Dashboard,
  Container1 as Dashboard,
  Component as DashboardComponent,
};
