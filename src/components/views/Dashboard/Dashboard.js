import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { getActive, getUserById } from '../../../redux/userRedux';

import { Posts } from '../Posts/Posts';
import { PostAdd } from '../../views/PostAdd/PostAdd';

import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Dashboard.module.scss';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Component = ({ className, children, posts, loggedUser, filteredPosts }) => {
  const classes = useStyles();
  // const postFiltered = posts.filter(post => post.status === 'draft');
  // const postMap = postFiltered.map(post = post.author === loggedUser.name);

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {filteredPosts && filteredPosts.filter(post => (
            <Grid key={post.id} item xs={6} sm={3}>
              <Paper className={classes.paper} elevation={3}>
                <Posts {...post} />
              </Paper>
            </Grid>
          ))}
          {loggedUser.active ?
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper} elevation={3}>
                <PostAdd />
                <Button variant="contained" color="secondary">
                  new announcement
                </Button>
              </Paper>
            </Grid> : null}
          {children}
        </Grid>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loggedUser: PropTypes.object,
  filteredPosts: PropTypes.any,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};

Component.defaultProps = {
  posts: [],
};

const mapStateToProps = (state, props) => {
  const posts = getAll(state);
  const loggedUser = getActive(state);
  const filteredPosts = posts.author && posts.author.map(userId => getUserById(state, userId));
  console.log(filteredPosts);

  return {
    posts,
    loggedUser,
    filteredPosts,
  };

};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container1 = connect(mapStateToProps)(Component);

export {
  //Component as Dashboard,
  Container1 as Dashboard,
  Component as DashboardComponent,
};
