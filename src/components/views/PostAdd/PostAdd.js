import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Component = ({ className, children }) => {

  const classes = useStyles();
  // const [setValue] = React.useState('Controlled');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <div className={clsx(className, styles.root)}>
      <h2>PostAdd</h2>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={3}>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Title"
                  placeholder="Type something"
                  multiline
                  variant="outlined"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Announcement"
                  placeholder="Type something"
                  multiline
                  rows={4}
                  defaultValue=""
                  variant="outlined"
                />
              </div>
            </form>
          </Grid>
        </Grid>
      </Container>

      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
