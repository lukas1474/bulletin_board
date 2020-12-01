import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAll, getAllFiltered, selectPost } from '../../../redux/postsRedux';
import { getActive } from '../../../redux/userRedux';
import { Link } from 'react-router-dom';

import { Posts } from '../Posts/Posts';
import { PostAdd } from '../../views/PostAdd/PostAdd';

import clsx from 'clsx';

import styles from './Dashboard.module.scss';

import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(4),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

class Component extends React.Component {

  state = {
    selectedPost: this.props.posts.id,
  };

  selectPost(event) {

    const { sendActivePost, posts } = this.props;
    const payload = posts.find(post => post.id === event.target.value);

    if (payload) {
      sendActivePost(payload);
    }
  }

  render() {

    const { className, children, loggedUser, filteredPosts } = this.props;
    const { selectedPost } = this.state;

    return (
      <div className={clsx(className, styles.root)}>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            {filteredPosts.length ? filteredPosts.map(post => {
              return <Link key={post.id} to={`/post/${post.id}`} value={selectedPost} onChange={(event) => this.selectPost(event)} className={styles.links}>
                <Paper className={styles.paper} elevation={3}>
                  <Posts {...post} />
                </Paper>
              </Link>;
            })
              :
              <p>
                There are no post. Please login.
              </p>
            }
            {loggedUser.active ?
              <Grid item xs={6} sm={3} container spacing={3}>
                <Container>
                  <Paper className={styles.paper} elevation={3}>
                    <PostAdd />
                    {/* <Button variant="contained" color="secondary">
                    new announcement
                  </Button> */}
                  </Paper>
                </Container>
              </Grid> : null}
            {children}
          </Grid>
        </Container>
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loggedUser: PropTypes.object,
  filteredPosts: PropTypes.any,
  id: PropTypes.string,
  sendActivePost: PropTypes.func,
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

const mapStateToProps = state => {
  const posts = getAll(state);
  const filteredPosts = getAllFiltered(state);
  const loggedUser = getActive(state);
  // const filteredPosts = posts.author && posts.author.map(userId => getUserById(state, userId));
  // console.log(filteredPosts);

  return {
    posts,
    loggedUser,
    filteredPosts,
  };

};

const mapDispatchToProps = dispatch => ({
  sendActivePost: payload => dispatch(selectPost(payload)),
});

const Container1 = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Dashboard,
  Container1 as Dashboard,
  Component as DashboardComponent,
};
