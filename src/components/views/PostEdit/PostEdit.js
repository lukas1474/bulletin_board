import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import { NotFound } from '../NotFound/NotFound';

import { connect } from 'react-redux';
import { editPost, getActivePost, getAll } from '../../../redux/postsRedux';
import { getActive } from '../../../redux/userRedux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostEdit.module.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

class Component extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: this.props.title,
      description: this.props.description,
      author: this.props.author,
      // status: this.props.state,
    };
    // console.log(this.props.activePost.id);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { editPost, loggedUser, activePost } = this.props;
    if (this.props.author === loggedUser.name || loggedUser.name === 'Administrator') {
      if (!this.state.title || !this.state.description) {
        alert('Write something');
        event.preventDefault();
      } else {
        event.preventDefault();
        editPost(this.state);
      }
    } else {
      alert('Login please');
    }
    console.log(activePost);
    return false;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {

    const { className, children, loggedUser, activePost, post, author, posts} = this.props;

    return (

      <div className={clsx(className, styles.root)}>
        <h2>PostEdit</h2>
        {posts.author ?
          <Container maxWidth='lg'>
            <Grid key={post.id} container spacing={3} item xs={6} sm={3}>
              <Paper>
                <form name="editPost" onSubmit={this.handleSubmit} onChange={this.handleChange} className={styles.root} noValidate autoComplete="off">
                  <div>
                    <TextField
                      defaultValue={post.title}
                      id="outlined-textarea"
                      label="Title"
                      placeholder="Please write title"
                      multiline
                      variant="outlined"
                      name="title"
                    />
                    <TextField
                      defaultValue={this.state.description}
                      id="outlined-multiline-static"
                      label="Announcement"
                      placeholder="Please write description"
                      multiline
                      rows={4}
                      // defaultValue=""
                      variant="outlined"
                      name="description"
                    />
                    {/* <TextField
                    id="outlined-textarea"
                    label="e-mail"
                    placeholder="Please write email"
                    variant="outlined"
                    name="email"
                  /> */}
                    <p>{loggedUser.name}</p>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      New annoucment
                    </Button>
                  </div>
                </form>
              </Paper>
            </Grid>
          </Container> : <NotFound />}
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  activePost: PropTypes.object,
  editPost: PropTypes.func,
  loggedUser: PropTypes.object,
  clearData: PropTypes.func,
  post: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.any,
  author: PropTypes.any,
  description: PropTypes.any,
  posts: PropTypes.object,
};

const mapStateToProps = state => ({
  loggedUser: getActive(state),
  activePost: getActivePost(state),
  posts: getAll(state),

});


const mapDispatchToProps = dispatch => ({
  editPost: (payload) => dispatch(editPost(payload)),
});

const Container1 = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostEdit,
  Container1 as PostEdit,
  Component as PostEditComponent,
};
