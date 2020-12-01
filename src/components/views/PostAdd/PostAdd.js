import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { getActive } from '../../../redux/userRedux';

import styles from './PostAdd.module.scss';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: '', description: '', author: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { addPost } = this.props;

    document.getElementsByName('addPost')[0].reset();
    this.clearData();
    addPost(this.state);
    event.preventDefault();

    return false;
  }

  clearData() {
    this.setState({
      title: '',
      description: '',
      author: '',
      email: '',
      status: 'draft',
    });
  }

  handleChange(event) {
    const { loggedUser } = this.props;
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
    this.setState({ author: loggedUser.name });
  }

  render() {

    const { className, children, loggedUser } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <Container maxWidth='lg'>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <form name="addPost" onSubmit={this.handleSubmit} onChange={this.handleChange} className={styles.root} noValidate autoComplete="off">
                <div>
                  <TextField
                    id="outlined-textarea"
                    label="Title"
                    placeholder="Please write title"
                    multiline
                    variant="outlined"
                    name="title"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Announcement"
                    placeholder="Please write description"
                    multiline
                    rows={4}
                    defaultValue=""
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
            </Grid>
          </Grid>
        </Container>
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  addPost: PropTypes.func,
  loggedUser: PropTypes.object,
  clearData: PropTypes.func,
};

const mapStateToProps = state => ({
  loggedUser: getActive(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (payload) => dispatch(addPost(payload)),
});

const Container1 = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container1 as PostAdd,
  Component as PostAddComponent,
};
